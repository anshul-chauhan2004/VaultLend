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
    
    // Tokens
    IERC20 public weth;
    IERC20 public usdc;
    IOracle public oracle;
    
    // State
    mapping(address => uint256) public collateral; // WETH deposits
    mapping(address => uint256) public principal; // USDC principal borrowed
    mapping(address => uint256) public interestIndex; // Last interest index when user borrowed
    
    uint256 public totalCollateral; // Total WETH locked
    uint256 public totalDeposits; // Total USDC supplied
    uint256 public totalBorrows; // Total USDC borrowed (principal)
    uint256 public cumulativeInterest = WAD; // Starts at 1.0
    
    uint256 public lastAccrualTime;
    uint256 public borrowAPR = 65e15; // 6.5% APR
    
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
        uint256 timeElapsed = block.timestamp - lastAccrualTime;
        if (timeElapsed == 0 || totalBorrows == 0) {
            lastAccrualTime = block.timestamp;
            return;
        }

        // Simple interest: interest = principal * rate * time / year
        uint256 interest = (totalBorrows * borrowAPR * timeElapsed) / (365 days * WAD);
        if (interest == 0) {
            lastAccrualTime = block.timestamp;
            return;
        }

        // Add reserve to total
        uint256 reserved = (interest * RESERVE_FACTOR) / WAD;
        uint256 forDepositors = interest - reserved;

        // Update cumulative interest
        uint256 newCumulativeInterest = cumulativeInterest + (forDepositors * WAD) / totalBorrows;
        cumulativeInterest = newCumulativeInterest;

        totalBorrows += interest;
        lastAccrualTime = block.timestamp;
    }

    // ============ Deposit USDC Liquidity ============

    function deposit(uint256 amount) external {
        require(amount > 0, "Amount must be positive");
        require(usdc.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        
        totalDeposits += amount;
        
        emit Deposit(msg.sender, amount);
    }

    function withdrawLiquidity(uint256 amount) external {
        require(amount > 0, "Amount must be positive");
        require(amount <= _availableLiquidity(), "Insufficient liquidity");
        
        totalDeposits -= amount;
        require(usdc.transfer(msg.sender, amount), "Transfer failed");
        
        emit Withdraw(msg.sender, amount);
    }

    // ============ Collateral Management ============

    function depositCollateral(uint256 amount) external {
        require(amount > 0, "Amount must be positive");
        require(weth.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        
        collateral[msg.sender] += amount;
        totalCollateral += amount;
        
        emit DepositCollateral(msg.sender, amount);
    }

    function withdrawCollateral(uint256 amount) external {
        require(amount > 0, "Amount must be positive");
        require(collateral[msg.sender] >= amount, "Insufficient collateral");
        
        // Check health factor after withdrawal
        uint256 newCollateral = collateral[msg.sender] - amount;
        _validateHealthFactor(msg.sender, newCollateral);
        
        collateral[msg.sender] = newCollateral;
        totalCollateral -= amount;
        
        require(weth.transfer(msg.sender, amount), "Transfer failed");
        
        emit WithdrawCollateral(msg.sender, amount);
    }

    // ============ Borrowing ============

    function borrow(uint256 amount) external {
        require(amount > 0, "Amount must be positive");
        require(amount <= _availableLiquidity(), "Insufficient liquidity");
        
        accrueInterest();
        
        // Track interest accrual for this user
        if (principal[msg.sender] == 0) {
            interestIndex[msg.sender] = cumulativeInterest;
        }
        
        principal[msg.sender] += amount;
        totalBorrows += amount;
        
        // Check health factor
        _validateHealthFactor(msg.sender, collateral[msg.sender]);
        
        require(usdc.transfer(msg.sender, amount), "Transfer failed");
        
        emit Borrow(msg.sender, amount);
    }

    function repay(uint256 amount) external {
        require(amount > 0, "Amount must be positive");
        
        accrueInterest();
        
        uint256 debt = getBorrowBalance(msg.sender);
        uint256 repayAmount = amount > debt ? debt : amount;
        
        require(usdc.transferFrom(msg.sender, address(this), repayAmount), "Transfer failed");
        
        uint256 remainingDebt = debt - repayAmount;
        principal[msg.sender] = remainingDebt;
        interestIndex[msg.sender] = remainingDebt == 0 ? 0 : cumulativeInterest;
        totalBorrows -= repayAmount;
        
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
        uint256 debt = getBorrowBalance(user);
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
        
        principal[user] = debt - actualRepay;
        totalBorrows -= actualRepay;
        collateral[user] -= collateralReward;
        totalCollateral -= collateralReward;
        
        require(weth.transfer(to, collateralReward), "Transfer failed");
        
        emit Liquidate(msg.sender, user, actualRepay, to);
    }

    // ============ View Functions ============

    function getBorrowBalance(address user) public view returns (uint256) {
        if (principal[user] == 0) {
            return 0;
        }
        
        uint256 userInterestFactor = (cumulativeInterest * WAD) / interestIndex[user];
        return (principal[user] * userInterestFactor) / WAD;
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
        return (totalDeposits, totalBorrows, totalCollateral);
    }

    // ============ Internal ============

    function _validateHealthFactor(address user, uint256 newCollateral) internal view {
        uint256 borrowBalance = getBorrowBalance(user);
        if (borrowBalance == 0) {
            return; // No debt, always safe
        }
        
        uint256 collateralPrice = oracle.getPrice(address(weth));
        uint256 borrowPrice = oracle.getPrice(address(usdc));
        
        uint256 collateralValue = _wethToUsdValue(newCollateral, collateralPrice);
        uint256 debtValue = _usdcToUsdValue(borrowBalance, borrowPrice);
        
        uint256 maxCollateral = (debtValue * WAD) / LIQUIDATION_THRESHOLD;
        require(collateralValue >= maxCollateral, "Unsafe position");
    }

    function _availableLiquidity() internal view returns (uint256) {
        return totalDeposits > totalBorrows ? totalDeposits - totalBorrows : 0;
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
