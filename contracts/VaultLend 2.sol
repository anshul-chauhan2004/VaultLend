// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IERC20 {
    function transfer(address to, uint256 value) external returns (bool);
    function transferFrom(address from, address to, uint256 value) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
    function approve(address spender, uint256 value) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
}

interface IOracle {
    function getPrice(address token) external view returns (uint256);
}

struct AccountData {
    uint256 collateral; // deposits in Wei (WETH decimals=18)
    uint256 debt; // borrows in Wei (USDC decimals=6, normalized to 18)
    uint256 availableToBorrow;
    uint256 healthFactor; // scaled by 1e18
}

/**
 * @title VaultLend
 * @dev Single-market isolated lending protocol: WETH collateral, USDC borrow
 * 
 * Risk Parameters:
 * - LTV: 75%
 * - Liquidation Threshold: 80%
 * - Close Factor: 50%
 * - Liquidation Bonus: 8%
 * - Reserve Factor: 10%
 */
contract VaultLend {
    uint256 private constant WAD = 1e18;
    uint256 private constant USDC_SCALE = 1e12; // 6 decimals -> 18 decimals

    // Risk parameters (scaled)
    uint256 public constant LTV = 75e16; // 75% = 0.75 * 1e18
    uint256 public constant LIQUIDATION_THRESHOLD = 80e16; // 80%
    uint256 public constant CLOSE_FACTOR = 50e16; // 50%
    uint256 public constant LIQUIDATION_BONUS = 108e16; // 1.08 (8% bonus)
    uint256 public constant RESERVE_FACTOR = 10e16; // 10%
    uint256 public constant MAX_RISK_PREMIUM = 85e15; // 8.5%
    
    // Tokens
    IERC20 public weth;
    IERC20 public usdc;
    IOracle public oracle;
    
    // State
    mapping(address => uint256) public collateral; // WETH deposits
    mapping(address => uint256) public liquidityBalance; // USDC supplied by user
    mapping(address => uint256) public principal; // Current debt balance for each borrower
    mapping(address => uint256) public interestIndex; // Legacy field retained for ABI compatibility
    mapping(address => uint256) public accountBorrowRate; // Per-account APR, scaled by 1e18
    mapping(address => uint256) public lastUserAccrual; // Last timestamp when user debt was accrued
    
    uint256 public totalCollateral; // Total WETH locked
    uint256 public totalDeposits; // Total USDC supplied
    uint256 public totalBorrows; // Total USDC borrowed including accrued interest
    uint256 public cumulativeInterest = WAD; // Legacy field retained for ABI compatibility
    
    uint256 public lastAccrualTime;
    uint256 public borrowAPR = 65e15; // 6.5% APR

    address[] private borrowerList;
    mapping(address => bool) private borrowerSeen;
    
    event Deposit(address indexed user, uint256 amount);
    event Withdraw(address indexed user, uint256 amount);
    event DepositCollateral(address indexed user, uint256 amount);
    event WithdrawCollateral(address indexed user, uint256 amount);
    event Borrow(address indexed user, uint256 amount);
    event Repay(address indexed user, uint256 amount);
    event Liquidate(address indexed liquidator, address indexed user, uint256 repayAmount, address indexed to);

    constructor(address _weth, address _usdc, address _oracle) {
        weth = IERC20(_weth);
        usdc = IERC20(_usdc);
        oracle = IOracle(_oracle);
        lastAccrualTime = block.timestamp;
    }

    // ============ Accrual ============

    function accrueInterest() public {
        uint256 length = borrowerList.length;
        for (uint256 i = 0; i < length; i++) {
            address user = borrowerList[i];
            if (principal[user] > 0) {
                _accrueUserInterest(user);
            }
        }
        lastAccrualTime = block.timestamp;
    }

    // ============ Deposit USDC Liquidity ============

    function deposit(uint256 amount) external {
        require(amount > 0, "Amount must be positive");
        accrueInterest();
        require(usdc.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        
        liquidityBalance[msg.sender] += amount;
        totalDeposits += amount;
        
        emit Deposit(msg.sender, amount);
    }

    function withdrawLiquidity(uint256 amount) external {
        require(amount > 0, "Amount must be positive");
        accrueInterest();
        require(liquidityBalance[msg.sender] >= amount, "Insufficient supplied balance");
        require(amount <= _availableLiquidity(), "Insufficient liquidity");
        
        liquidityBalance[msg.sender] -= amount;
        totalDeposits -= amount;
        require(usdc.transfer(msg.sender, amount), "Transfer failed");
        
        emit Withdraw(msg.sender, amount);
    }

    // ============ Collateral Management ============

    function depositCollateral(uint256 amount) external {
        require(amount > 0, "Amount must be positive");
        accrueInterest();
        require(weth.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        
        collateral[msg.sender] += amount;
        totalCollateral += amount;
        _refreshBorrowerTerms(msg.sender);
        
        emit DepositCollateral(msg.sender, amount);
    }

    function withdrawCollateral(uint256 amount) external {
        require(amount > 0, "Amount must be positive");
        accrueInterest();
        require(collateral[msg.sender] >= amount, "Insufficient collateral");
        
        // Check health factor after withdrawal
        uint256 newCollateral = collateral[msg.sender] - amount;
        _validateHealthFactor(msg.sender, newCollateral);
        
        collateral[msg.sender] = newCollateral;
        totalCollateral -= amount;
        _refreshBorrowerTerms(msg.sender);
        
        require(weth.transfer(msg.sender, amount), "Transfer failed");
        
        emit WithdrawCollateral(msg.sender, amount);
    }

    // ============ Borrowing ============

    function borrow(uint256 amount) external {
        require(amount > 0, "Amount must be positive");
        accrueInterest();
        require(amount <= _availableLiquidity(), "Insufficient liquidity");
        
        _trackBorrower(msg.sender);
        principal[msg.sender] += amount;
        totalBorrows += amount;
        lastUserAccrual[msg.sender] = block.timestamp;
        _refreshBorrowerTerms(msg.sender);
        
        // Check health factor
        _validateHealthFactor(msg.sender, collateral[msg.sender]);
        
        require(usdc.transfer(msg.sender, amount), "Transfer failed");
        
        emit Borrow(msg.sender, amount);
    }

    function repay(uint256 amount) external {
        require(amount > 0, "Amount must be positive");
        
        accrueInterest();
        
        uint256 debt = principal[msg.sender];
        uint256 repayAmount = amount > debt ? debt : amount;
        
        require(usdc.transferFrom(msg.sender, address(this), repayAmount), "Transfer failed");
        
        uint256 remainingDebt = debt - repayAmount;
        principal[msg.sender] = remainingDebt;
        totalBorrows -= repayAmount;
        lastUserAccrual[msg.sender] = block.timestamp;
        _refreshBorrowerTerms(msg.sender);
        
        emit Repay(msg.sender, repayAmount);
    }

    // ============ Liquidation ============

    function liquidate(address user, uint256 repayAmount, address to) external {
        require(repayAmount > 0, "Amount must be positive");
        
        accrueInterest();
        
        // Check if user is liquidatable
        AccountData memory data = getAccountData(user);
        require(data.healthFactor < 1e18, "Account is healthy");
        
        // Calculate max allowed repay (close factor)
        uint256 debt = principal[user];
        uint256 maxRepay = (debt * CLOSE_FACTOR) / WAD;
        uint256 actualRepay = repayAmount > maxRepay ? maxRepay : repayAmount;
        
        // Calculate collateral reward
        uint256 borrowPrice = oracle.getPrice(address(usdc));
        uint256 collateralPrice = oracle.getPrice(address(weth));
        
        uint256 repayValue = _usdcToUsdValue(actualRepay, borrowPrice);
        uint256 collateralAmount = _usdValueToWethAmount(repayValue, collateralPrice);
        uint256 collateralReward = (collateralAmount * LIQUIDATION_BONUS) / WAD;
        
        require(collateral[user] >= collateralReward, "Not enough collateral");
        require(usdc.transferFrom(msg.sender, address(this), actualRepay), "Transfer failed");
        
        uint256 remainingDebt = debt - actualRepay;
        principal[user] = remainingDebt;
        totalBorrows -= actualRepay;
        collateral[user] -= collateralReward;
        totalCollateral -= collateralReward;
        lastUserAccrual[user] = block.timestamp;
        _refreshBorrowerTerms(user);
        
        require(weth.transfer(to, collateralReward), "Transfer failed");
        
        emit Liquidate(msg.sender, user, actualRepay, to);
    }

    // ============ View Functions ============

    function getBorrowBalance(address user) public view returns (uint256) {
        uint256 debt = principal[user];
        if (debt == 0) {
            return 0;
        }

        uint256 lastUserAccrualTime = lastUserAccrual[user];
        if (lastUserAccrualTime == 0 || block.timestamp <= lastUserAccrualTime) {
            return debt;
        }

        uint256 rate = accountBorrowRate[user];
        if (rate == 0) {
            rate = _getBorrowAPRForState(collateral[user], debt);
        }

        uint256 elapsed = block.timestamp - lastUserAccrualTime;
        uint256 interest = (debt * rate * elapsed) / (365 days * WAD);
        return debt + interest;
    }

    function getAccountData(address user) public view returns (AccountData memory) {
        uint256 userCollateral = collateral[user];
        uint256 borrowBalance = getBorrowBalance(user);
        
        // Get prices
        uint256 collateralPrice = oracle.getPrice(address(weth)); // ETH price in USD * 1e18
        uint256 borrowPrice = oracle.getPrice(address(usdc)); // USDC price in USD * 1e18
        
        // Calculate collateral value in USD (18 decimals)
        // collateral * price / 1e18
        uint256 collateralValue = _wethToUsdValue(userCollateral, collateralPrice);
        uint256 debtValue = _usdcToUsdValue(borrowBalance, borrowPrice);
        
        // Available to borrow = collateral_value * LTV - debt_value
        uint256 maxBorrowValue = (collateralValue * LTV) / WAD;
        uint256 availableValue = debtValue < maxBorrowValue ? maxBorrowValue - debtValue : 0;
        uint256 available = _usdValueToUsdcAmount(availableValue, borrowPrice);
        
        // Health factor = (collateral_value * liquidation_threshold) / debt_value
        uint256 hf = debtValue == 0 ? type(uint256).max : (collateralValue * LIQUIDATION_THRESHOLD) / debtValue;
        
        return AccountData({
            collateral: userCollateral,
            debt: borrowBalance,
            availableToBorrow: available,
            healthFactor: hf
        });
    }

    function getPoolData() external view returns (uint256, uint256, uint256) {
        return (totalDeposits, _getLiveTotalBorrows(), totalCollateral);
    }

    function getRiskScore(address user) public view returns (uint256) {
        uint256 debt = getBorrowBalance(user);
        return _getRiskScoreForState(collateral[user], debt);
    }

    function getAccountBorrowAPR(address user) public view returns (uint256) {
        uint256 debt = getBorrowBalance(user);
        if (debt == 0) {
            return borrowAPR;
        }
        return _getBorrowAPRForState(collateral[user], debt);
    }

    // ============ Internal ============

    function _validateHealthFactor(address user, uint256 newCollateral) internal view {
        uint256 borrowBalance = principal[user];
        if (borrowBalance == 0) {
            return; // No debt, always safe
        }

        uint256 hf = _healthFactorFrom(newCollateral, borrowBalance);
        require(hf >= WAD, "Unsafe position");
    }

    function _availableLiquidity() internal view returns (uint256) {
        return totalDeposits > totalBorrows ? totalDeposits - totalBorrows : 0;
    }

    function _accrueUserInterest(address user) internal {
        uint256 debt = principal[user];
        if (debt == 0) {
            accountBorrowRate[user] = 0;
            lastUserAccrual[user] = block.timestamp;
            return;
        }

        uint256 lastUserAccrualTime = lastUserAccrual[user];
        if (lastUserAccrualTime == 0) {
            lastUserAccrual[user] = block.timestamp;
            accountBorrowRate[user] = _getBorrowAPRForState(collateral[user], debt);
            return;
        }

        uint256 elapsed = block.timestamp - lastUserAccrualTime;
        uint256 rate = accountBorrowRate[user];
        if (rate == 0) {
            rate = _getBorrowAPRForState(collateral[user], debt);
        }

        if (elapsed > 0 && rate > 0) {
            uint256 interest = (debt * rate * elapsed) / (365 days * WAD);
            if (interest > 0) {
                principal[user] = debt + interest;
                totalBorrows += interest;
                debt += interest;
            }
        }

        lastUserAccrual[user] = block.timestamp;
        accountBorrowRate[user] = _getBorrowAPRForState(collateral[user], debt);
    }

    function _refreshBorrowerTerms(address user) internal {
        if (principal[user] == 0) {
            accountBorrowRate[user] = 0;
            interestIndex[user] = 0;
            lastUserAccrual[user] = block.timestamp;
            return;
        }

        _trackBorrower(user);
        accountBorrowRate[user] = _getBorrowAPRForState(collateral[user], principal[user]);
        interestIndex[user] = accountBorrowRate[user];
        lastUserAccrual[user] = block.timestamp;
    }

    function _trackBorrower(address user) internal {
        if (!borrowerSeen[user]) {
            borrowerSeen[user] = true;
            borrowerList.push(user);
        }
    }

    function _getLiveTotalBorrows() internal view returns (uint256 liveTotalBorrows) {
        uint256 length = borrowerList.length;
        for (uint256 i = 0; i < length; i++) {
            address user = borrowerList[i];
            if (principal[user] > 0) {
                liveTotalBorrows += getBorrowBalance(user);
            }
        }
    }

    function _healthFactorFrom(uint256 userCollateral, uint256 userDebt) internal view returns (uint256) {
        if (userDebt == 0) {
            return type(uint256).max;
        }

        uint256 collateralPrice = oracle.getPrice(address(weth));
        uint256 borrowPrice = oracle.getPrice(address(usdc));

        uint256 collateralValue = _wethToUsdValue(userCollateral, collateralPrice);
        uint256 debtValue = _usdcToUsdValue(userDebt, borrowPrice);

        if (debtValue == 0) {
            return type(uint256).max;
        }

        return (collateralValue * LIQUIDATION_THRESHOLD) / debtValue;
    }

    function _getRiskScoreForState(uint256 userCollateral, uint256 userDebt) internal view returns (uint256) {
        if (userDebt == 0 || userCollateral == 0) {
            return 0;
        }

        uint256 healthFactor = _healthFactorFrom(userCollateral, userDebt);
        if (healthFactor == 0) {
            return 100;
        }

        uint256 score = (100 * WAD) / healthFactor;
        return score > 100 ? 100 : score;
    }

    function _getBorrowAPRForState(uint256 userCollateral, uint256 userDebt) internal view returns (uint256) {
        if (userDebt == 0) {
            return borrowAPR;
        }

        uint256 riskScore = _getRiskScoreForState(userCollateral, userDebt);
        return borrowAPR + (MAX_RISK_PREMIUM * riskScore) / 100;
    }

    function _wethToUsdValue(uint256 wethAmount, uint256 wethPrice) internal pure returns (uint256) {
        return (wethAmount * wethPrice) / WAD;
    }

    function _usdcToUsdValue(uint256 usdcAmount, uint256 usdcPrice) internal pure returns (uint256) {
        return (usdcAmount * usdcPrice * USDC_SCALE) / WAD;
    }

    function _usdValueToWethAmount(uint256 usdValue, uint256 wethPrice) internal pure returns (uint256) {
        return (usdValue * WAD) / wethPrice;
    }

    function _usdValueToUsdcAmount(uint256 usdValue, uint256 usdcPrice) internal pure returns (uint256) {
        return (usdValue * WAD) / (usdcPrice * USDC_SCALE);
    }
}
