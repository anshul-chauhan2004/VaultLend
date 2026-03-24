import { expect } from "chai";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-ethers";
import * as hre from "hardhat";

const { ethers } = hre;

describe("VaultLend", () => {
  let vaultLend: any;
  let weth: any;
  let usdc: any;
  let oracle: any;
  let owner: any;
  let user1: any;
  let user2: any;

  const WETH_PRICE = ethers.parseEther("3200");
  const USDC_PRICE = ethers.parseEther("1");

  beforeEach(async () => {
    [owner, user1, user2] = await ethers.getSigners();

    // Deploy MockERC20
    const MockERC20 = await ethers.getContractFactory("MockERC20");
    weth = await MockERC20.deploy("Wrapped Ether", "WETH", 18, ethers.parseEther("1000"));
    usdc = await MockERC20.deploy("USD Coin", "USDC", 6, ethers.parseUnits("10000000", 6));

    // Deploy MockOracle
    const MockOracle = await ethers.getContractFactory("MockOracle");
    oracle = await MockOracle.deploy();

    // Set prices
    await oracle.setPrice(await weth.getAddress(), WETH_PRICE);
    await oracle.setPrice(await usdc.getAddress(), USDC_PRICE);

    // Deploy VaultLend
    const VaultLend = await ethers.getContractFactory("VaultLend");
    vaultLend = await VaultLend.deploy(
      await weth.getAddress(),
      await usdc.getAddress(),
      await oracle.getAddress()
    );

    // Mint tokens
    await weth.mint(owner.address, ethers.parseEther("100"));
    await weth.mint(user1.address, ethers.parseEther("100"));
    await weth.mint(user2.address, ethers.parseEther("100"));

    await usdc.mint(owner.address, ethers.parseUnits("1000000", 6));
    await usdc.mint(user1.address, ethers.parseUnits("1000000", 6));
    await usdc.mint(user2.address, ethers.parseUnits("1000000", 6));

    // Approve tokens
    await usdc.approve(await vaultLend.getAddress(), ethers.parseUnits("10000000", 6));
    await weth.approve(await vaultLend.getAddress(), ethers.parseEther("1000"));

    await usdc.connect(user1).approve(await vaultLend.getAddress(), ethers.parseUnits("10000000", 6));
    await weth.connect(user1).approve(await vaultLend.getAddress(), ethers.parseEther("1000"));

    await usdc.connect(user2).approve(await vaultLend.getAddress(), ethers.parseUnits("10000000", 6));
    await weth.connect(user2).approve(await vaultLend.getAddress(), ethers.parseEther("1000"));
  });

  describe("Deposit/Withdraw", () => {
    it("should allow users to deposit USDC liquidity", async () => {
      const amount = ethers.parseUnits("10000", 6);
      await vaultLend.deposit(amount);

      const data = await vaultLend.getPoolData();
      expect(data[0]).to.equal(amount); // totalDeposits
      expect(await vaultLend.liquidityBalance(owner.address)).to.equal(amount);
    });

    it("should allow users to withdraw USDC liquidity", async () => {
      const deposit = ethers.parseUnits("10000", 6);
      await vaultLend.deposit(deposit);

      const withdraw = ethers.parseUnits("5000", 6);
      await vaultLend.withdrawLiquidity(withdraw);

      const data = await vaultLend.getPoolData();
      expect(data[0]).to.equal(deposit - withdraw); // totalDeposits
      expect(await vaultLend.liquidityBalance(owner.address)).to.equal(deposit - withdraw);
    });

    it("should fail to withdraw more than available", async () => {
      const deposit = ethers.parseUnits("10000", 6);
      await vaultLend.deposit(deposit);

      const withdraw = ethers.parseUnits("15000", 6);
      await expect(vaultLend.withdrawLiquidity(withdraw)).to.be.revertedWith(
        "Insufficient supplied balance"
      );
    });

    it("should not allow users to withdraw liquidity they did not supply", async () => {
      const deposit = ethers.parseUnits("10000", 6);
      await vaultLend.deposit(deposit);

      await expect(
        vaultLend.connect(user1).withdrawLiquidity(ethers.parseUnits("1", 6))
      ).to.be.revertedWith("Insufficient supplied balance");
    });

    it("should fail to withdraw supplied liquidity when the pool does not have enough available cash", async () => {
      const deposit = ethers.parseUnits("10000", 6);
      await vaultLend.deposit(deposit);

      await vaultLend.connect(user1).depositCollateral(ethers.parseEther("10"));
      await vaultLend.connect(user1).borrow(ethers.parseUnits("5000", 6));

      await expect(vaultLend.withdrawLiquidity(deposit)).to.be.revertedWith("Insufficient liquidity");
    });
  });

  describe("Oracle Access Control", () => {
    it("should only allow the owner to update prices", async () => {
      await expect(
        oracle.connect(user1).setPrice(await weth.getAddress(), ethers.parseEther("4000"))
      ).to.be.revertedWith("Only owner");
    });
  });

  describe("Collateral", () => {
    it("should allow users to deposit WETH collateral", async () => {
      const amount = ethers.parseEther("5");
      await vaultLend.depositCollateral(amount);

      const data = await vaultLend.getAccountData(owner.address);
      expect(data.collateral).to.equal(amount);
    });

    it("should allow users to withdraw collateral if healthy", async () => {
      const deposit = ethers.parseEther("5");
      await vaultLend.depositCollateral(deposit);

      const withdraw = ethers.parseEther("2");
      await vaultLend.withdrawCollateral(withdraw);

      const data = await vaultLend.getAccountData(owner.address);
      expect(data.collateral).to.equal(deposit - withdraw);
    });

    it("should fail to withdraw collateral that would make position unsafe", async () => {
      // Deposit liquidity first
      await vaultLend.deposit(ethers.parseUnits("10000", 6));

      // Deposit collateral
      const collateral = ethers.parseEther("2");
      await vaultLend.depositCollateral(collateral);

      // Borrow amount that requires most of the collateral
      const borrow = ethers.parseUnits("4000", 6);
      await vaultLend.borrow(borrow);

      // Try to withdraw all collateral (should fail)
      await expect(vaultLend.withdrawCollateral(collateral)).to.be.revertedWith("Unsafe position");
    });
  });

  describe("Borrow/Repay", () => {
    beforeEach(async () => {
      // Setup: deposit liquidity
      await vaultLend.deposit(ethers.parseUnits("100000", 6));
      
      // Deposit collateral
      await vaultLend.depositCollateral(ethers.parseEther("10"));
    });

    it("should allow users to borrow USDC", async () => {
      const amount = ethers.parseUnits("1000", 6);
      await vaultLend.borrow(amount);

      const data = await vaultLend.getAccountData(owner.address);
      expect(data.debt).to.be.closeTo(amount, ethers.parseUnits("1", 6));
    });

    it("should fail to borrow more than available", async () => {
      const amount = ethers.parseUnits("100000", 6);
      await expect(vaultLend.borrow(amount)).to.be.revertedWith("Unsafe position");
    });

    it("should fail to borrow more than pool liquidity", async () => {
      const amount = ethers.parseUnits("150000", 6);
      await expect(vaultLend.borrow(amount)).to.be.revertedWith("Insufficient liquidity");
    });

    it("should allow users to repay debt", async () => {
      // Borrow
      const borrow = ethers.parseUnits("1000", 6);
      await vaultLend.borrow(borrow);

      // Repay
      const repay = ethers.parseUnits("500", 6);
      await vaultLend.repay(repay);

      const data = await vaultLend.getAccountData(owner.address);
      expect(data.debt).to.be.closeTo(borrow - repay, ethers.parseUnits("1", 6));
    });

    it("should allow full repayment", async () => {
      const amount = ethers.parseUnits("1000", 6);
      await vaultLend.borrow(amount);

      // Repay more than owed (should repay full amount)
      await vaultLend.repay(ethers.parseUnits("2000", 6));

      const data = await vaultLend.getAccountData(owner.address);
      expect(data.debt).to.be.equal(0);
    });

    it("should allow repaying remaining debt after interest accrues and a prior repayment", async () => {
      const borrowAmount = ethers.parseUnits("24000", 6);
      await vaultLend.borrow(borrowAmount);

      await ethers.provider.send("evm_increaseTime", [24 * 60 * 60]);
      await ethers.provider.send("evm_mine", []);

      await vaultLend.accrueInterest();

      await vaultLend.repay(borrowAmount);

      const debtAfterFirstRepay = await vaultLend.getBorrowBalance(owner.address);
      expect(debtAfterFirstRepay).to.be.gt(0);

      await expect(vaultLend.repay(debtAfterFirstRepay)).to.not.be.reverted;

      const finalDebt = await vaultLend.getBorrowBalance(owner.address);
      expect(finalDebt).to.equal(0);
    });
  });

  describe("Health Factor", () => {
    beforeEach(async () => {
      // Setup: deposit liquidity and collateral
      await vaultLend.deposit(ethers.parseUnits("100000", 6));
      await vaultLend.depositCollateral(ethers.parseEther("10"));
    });

    it("should calculate health factor correctly", async () => {
      const borrow = ethers.parseUnits("1000", 6);
      await vaultLend.borrow(borrow);

      const data = await vaultLend.getAccountData(owner.address);
      
      // HF = (collateral * collateral_price * liquidation_threshold) / debt_value
      // = (10 * 3200 * 0.8) / 1000 = 25.6
      const expectedHF = ethers.parseEther("25.6");
      expect(data.healthFactor).to.be.closeTo(expectedHF, ethers.parseEther("0.1"));
    });

    it("should show SAFE health factor > 2.0", async () => {
      await vaultLend.borrow(ethers.parseUnits("5000", 6));
      const data = await vaultLend.getAccountData(owner.address);
      expect(data.healthFactor).to.be.gt(ethers.parseEther("2.0"));
    });

    it("should show WARNING health factor between 1.0 and 2.0", async () => {
      await vaultLend.borrow(ethers.parseUnits("15000", 6));
      const data = await vaultLend.getAccountData(owner.address);
      expect(data.healthFactor).to.be.lt(ethers.parseEther("2.0"));
      expect(data.healthFactor).to.be.gt(ethers.parseEther("1.0"));
    });

    it("should show DANGER health factor < 1.0", async () => {
      await vaultLend.borrow(ethers.parseUnits("20000", 6));
      await oracle.setPrice(await usdc.getAddress(), ethers.parseEther("1.3"));
      const data = await vaultLend.getAccountData(owner.address);
      expect(data.healthFactor).to.be.lt(ethers.parseEther("1.0"));
    });
  });

  describe("Liquidation", () => {
    beforeEach(async () => {
      // Setup liquidity and collateral for user1
      await vaultLend.deposit(ethers.parseUnits("500000", 6));
      
      await vaultLend.connect(user1).depositCollateral(ethers.parseEther("10"));
      await vaultLend.connect(user1).borrow(ethers.parseUnits("20000", 6));
    });

    it("should fail to liquidate healthy position", async () => {
      await expect(
        vaultLend.liquidate(user1.address, ethers.parseUnits("1000", 6), user2.address)
      ).to.be.revertedWith("Account is healthy");
    });

    it("should liquidate unhealthy position", async () => {
      // Make position unhealthy by increasing price
      await oracle.setPrice(await usdc.getAddress(), ethers.parseEther("1.5"));

      const userData = await vaultLend.getAccountData(user1.address);
      expect(userData.healthFactor).to.be.lt(ethers.parseEther("1.0"));

      const repayAmount = ethers.parseUnits("5000", 6);
      await vaultLend.liquidate(user1.address, repayAmount, user2.address);

      // Check debt decreased
      const newData = await vaultLend.getAccountData(user1.address);
      expect(newData.debt).to.be.lt(userData.debt);
    });

    it("should allow repaying remaining debt after a partial liquidation", async () => {
      await ethers.provider.send("evm_increaseTime", [24 * 60 * 60]);
      await ethers.provider.send("evm_mine", []);
      await vaultLend.accrueInterest();

      await oracle.setPrice(await usdc.getAddress(), ethers.parseEther("1.5"));

      await vaultLend.connect(user2).liquidate(
        user1.address,
        ethers.parseUnits("5000", 6),
        user2.address
      );

      const remainingDebt = await vaultLend.getBorrowBalance(user1.address);
      expect(remainingDebt).to.be.gt(0);

      await expect(vaultLend.connect(user1).repay(remainingDebt)).to.not.be.reverted;
      expect(await vaultLend.getBorrowBalance(user1.address)).to.equal(0);
    });

    it("should respect close factor (50%)", async () => {
      // Make position unhealthy
      await oracle.setPrice(await usdc.getAddress(), ethers.parseEther("1.5"));

      const userData = await vaultLend.getAccountData(user1.address);
      const maxRepay = (userData.debt * ethers.parseEther("0.5")) / ethers.parseEther("1.0");

      // Try to liquidate more than close factor (should be capped)
      await vaultLend.liquidate(user1.address, ethers.parseUnits("50000", 6), user2.address);

      const newData = await vaultLend.getAccountData(user1.address);
      expect(newData.debt).to.be.lt(userData.debt);
      expect(newData.debt).to.be.gt(userData.debt - maxRepay - ethers.parseUnits("2", 6));
    });

    it("should give liquidation bonus (8%) to liquidator", async () => {
      // Make position unhealthy
      await oracle.setPrice(await usdc.getAddress(), ethers.parseEther("1.5"));

      const user2BalanceBefore = await weth.balanceOf(user2.address);
      const repayAmount = ethers.parseUnits("5000", 6);

      await vaultLend.liquidate(user1.address, repayAmount, user2.address);

      const user2BalanceAfter = await weth.balanceOf(user2.address);
      expect(user2BalanceAfter).to.be.gt(user2BalanceBefore);
    });
  });

  describe("Available to Borrow", () => {
    it("should calculate available to borrow correctly", async () => {
      // Deposit liquidity
      await vaultLend.deposit(ethers.parseUnits("100000", 6));
      
      // Deposit 10 WETH collateral
      await vaultLend.depositCollateral(ethers.parseEther("10"));

      const data = await vaultLend.getAccountData(owner.address);
      
      // Max borrow = collateral * price * LTV = 10 * 3200 * 0.75 = 24000
      const expectedAvailable = ethers.parseUnits("24000", 6);
      expect(data.availableToBorrow).to.be.closeTo(expectedAvailable, ethers.parseUnits("100", 6));
    });

    it("should decrease available to borrow after borrowing", async () => {
      await vaultLend.deposit(ethers.parseUnits("100000", 6));
      await vaultLend.depositCollateral(ethers.parseEther("10"));

      const dataBeforeBorrow = await vaultLend.getAccountData(owner.address);
      const availableBefore = dataBeforeBorrow.availableToBorrow;

      const borrowAmount = ethers.parseUnits("5000", 6);
      await vaultLend.borrow(borrowAmount);

      const dataAfterBorrow = await vaultLend.getAccountData(owner.address);
      const availableAfter = dataAfterBorrow.availableToBorrow;

      expect(availableAfter).to.be.lt(availableBefore);
    });
  });
});
