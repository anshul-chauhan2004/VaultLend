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
    uint256 collateral;
    uint256 debt;
    uint256 availableToBorrow;
    uint256 healthFactor;
}

/**
 * @title VaultLend
 * @dev Single-market isolated lending protocol: WETH collateral, USDC borrow
 */
contract VaultLend {
    uint256 private constant WAD = 1e18;
    uint256 private constant USDC_SCALE = 1e12; // 6 decimals -> 18 decimals
    uint256 private constant REPAY_DUST = 1e4; // 0.01 USDC

    uint256 public constant LTV = 75e16;
    uint256 public constant LIQUIDATION_THRESHOLD = 80e16;
    uint256 public constant CLOSE_FACTOR = 50e16;
    uint256 public constant LIQUIDATION_BONUS = 108e16;
    uint256 public constant RESERVE_FACTOR = 10e16;

    IERC20 public weth;
    IERC20 public usdc;
    IOracle public oracle;

    mapping(address => uint256) public collateral;
    mapping(address => uint256) public liquidityBalance;
    mapping(address => uint256) public principal;
    mapping(address => uint256) public interestIndex;

    uint256 public totalCollateral;
    uint256 public totalDeposits;
    uint256 public totalBorrows;
    uint256 public cumulativeInterest = WAD;

    uint256 public lastAccrualTime;
    uint256 public borrowAPR = 65e15; // 6.5%

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
        if (block.timestamp <= lastAccrualTime) {
            return;
        }

        if (totalBorrows == 0) {
            lastAccrualTime = block.timestamp;
            return;
        }

        uint256 elapsed = block.timestamp - lastAccrualTime;
        uint256 growthFactor = _growthFactor(elapsed);
        totalBorrows = (totalBorrows * growthFactor) / WAD;
        cumulativeInterest = (cumulativeInterest * growthFactor) / WAD;
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

        emit DepositCollateral(msg.sender, amount);
    }

    function withdrawCollateral(uint256 amount) external {
        require(amount > 0, "Amount must be positive");
        accrueInterest();
        require(collateral[msg.sender] >= amount, "Insufficient collateral");

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
        accrueInterest();
        require(amount <= _availableLiquidity(), "Insufficient liquidity");

        uint256 currentDebt = getBorrowBalance(msg.sender);
        principal[msg.sender] = currentDebt + amount;
        interestIndex[msg.sender] = cumulativeInterest;
        totalBorrows += amount;

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
        if (remainingDebt <= REPAY_DUST) {
            principal[msg.sender] = 0;
            interestIndex[msg.sender] = 0;
            totalBorrows -= debt;

            emit Repay(msg.sender, debt);
            return;
        }

        principal[msg.sender] = remainingDebt;
        interestIndex[msg.sender] = cumulativeInterest;
        totalBorrows -= repayAmount;

        emit Repay(msg.sender, repayAmount);
    }

    // ============ Liquidation ============

    function liquidate(address user, uint256 repayAmount, address to) external {
        require(repayAmount > 0, "Amount must be positive");
        accrueInterest();

        AccountData memory data = getAccountData(user);
        require(data.healthFactor < 1e18, "Account is healthy");

        uint256 debt = getBorrowBalance(user);
        uint256 maxRepay = (debt * CLOSE_FACTOR) / WAD;
        uint256 actualRepay = repayAmount > maxRepay ? maxRepay : repayAmount;
        require(actualRepay > 0, "Repay too small");

        uint256 borrowPrice = oracle.getPrice(address(usdc));
        uint256 collateralPrice = oracle.getPrice(address(weth));

        uint256 repayValue = _usdcToUsdValue(actualRepay, borrowPrice);
        uint256 collateralAmount = _usdValueToWethAmount(repayValue, collateralPrice);
        uint256 collateralReward = (collateralAmount * LIQUIDATION_BONUS) / WAD;

        require(collateral[user] >= collateralReward, "Not enough collateral");
        require(usdc.transferFrom(msg.sender, address(this), actualRepay), "Transfer failed");

        uint256 remainingDebt = debt - actualRepay;
        principal[user] = remainingDebt;
        interestIndex[user] = remainingDebt == 0 ? 0 : cumulativeInterest;
        totalBorrows -= actualRepay;
        collateral[user] -= collateralReward;
        totalCollateral -= collateralReward;

        require(weth.transfer(to, collateralReward), "Transfer failed");

        emit Liquidate(msg.sender, user, actualRepay, to);
    }

    // ============ View Functions ============

    function getBorrowBalance(address user) public view returns (uint256) {
        uint256 debt = principal[user];
        if (debt == 0) {
            return 0;
        }

        uint256 entryIndex = interestIndex[user];
        if (entryIndex == 0) {
            return debt;
        }

        uint256 liveCumulativeInterest = _currentCumulativeInterest();
        uint256 liveDebt = (debt * liveCumulativeInterest) / entryIndex;
        return liveDebt <= REPAY_DUST ? 0 : liveDebt;
    }

    function getAccountData(address user) public view returns (AccountData memory) {
        uint256 userCollateral = collateral[user];
        uint256 borrowBalance = getBorrowBalance(user);

        uint256 collateralPrice = oracle.getPrice(address(weth));
        uint256 borrowPrice = oracle.getPrice(address(usdc));

        uint256 collateralValue = _wethToUsdValue(userCollateral, collateralPrice);
        uint256 debtValue = _usdcToUsdValue(borrowBalance, borrowPrice);

        uint256 maxBorrowValue = (collateralValue * LTV) / WAD;
        uint256 availableValue = debtValue < maxBorrowValue ? maxBorrowValue - debtValue : 0;
        uint256 available = _usdValueToUsdcAmount(availableValue, borrowPrice);

        uint256 hf = debtValue == 0 ? type(uint256).max : (collateralValue * LIQUIDATION_THRESHOLD) / debtValue;

        return AccountData({
            collateral: userCollateral,
            debt: borrowBalance,
            availableToBorrow: available,
            healthFactor: hf
        });
    }

    function getPoolData() external view returns (uint256, uint256, uint256) {
        return (totalDeposits, _liveTotalBorrows(), totalCollateral);
    }

    // ============ Internal ============

    function _validateHealthFactor(address user, uint256 newCollateral) internal view {
        uint256 borrowBalance = getBorrowBalance(user);
        if (borrowBalance == 0) {
            return;
        }

        uint256 hf = _healthFactorFrom(newCollateral, borrowBalance);
        require(hf >= WAD, "Unsafe position");
    }

    function _availableLiquidity() internal view returns (uint256) {
        return totalDeposits > totalBorrows ? totalDeposits - totalBorrows : 0;
    }

    function _growthFactor(uint256 elapsed) internal view returns (uint256) {
        return WAD + (borrowAPR * elapsed) / (365 days);
    }

    function _currentCumulativeInterest() internal view returns (uint256) {
        if (block.timestamp <= lastAccrualTime || totalBorrows == 0) {
            return cumulativeInterest;
        }

        uint256 elapsed = block.timestamp - lastAccrualTime;
        return (cumulativeInterest * _growthFactor(elapsed)) / WAD;
    }

    function _liveTotalBorrows() internal view returns (uint256) {
        if (block.timestamp <= lastAccrualTime || totalBorrows == 0) {
            return totalBorrows;
        }

        uint256 elapsed = block.timestamp - lastAccrualTime;
        return (totalBorrows * _growthFactor(elapsed)) / WAD;
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
