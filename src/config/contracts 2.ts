// VaultLend Contract Configuration
// This file holds contract addresses and ABIs for the lending protocol

// Using Ethereum Sepolia testnet as example
// In production, swap these for mainnet addresses

export const NETWORK_ID = 11155111; // Sepolia testnet
export const NETWORK_NAME = "Sepolia";

// Placeholder contract addresses (mock for now - replace with real deployed addresses)
export const CONTRACTS = {
  LENDING_POOL: "0x1234567890123456789012345678901234567890",
  WETH_TOKEN: "0x7ef2e0d27b2e3a8d1f3e5f7c6d5e4d3c2b1a0987",
  USDC_TOKEN: "0x6b175474e89094c44da98b954eedeac495271d0f",
  ORACLE: "0xAbDa6Ecf6A4Abf3A7a8A6D9d80f8B0A9C7D6E5F4",
} as const;

// Minimal LendingPool ABI for core functions
export const LENDING_POOL_ABI = [
  {
    type: "function",
    name: "depositCollateral",
    inputs: [
      { name: "amount", type: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawCollateral",
    inputs: [
      { name: "amount", type: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "deposit",
    inputs: [
      { name: "amount", type: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdraw",
    inputs: [
      { name: "amount", type: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "borrow",
    inputs: [
      { name: "amount", type: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "repay",
    inputs: [
      { name: "amount", type: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "liquidate",
    inputs: [
      { name: "user", type: "address" },
      { name: "repayAmount", type: "uint256" },
      { name: "to", type: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "accountData",
    inputs: [
      { name: "user", type: "address" },
    ],
    outputs: [
      { name: "collateral", type: "uint256" },
      { name: "debt", type: "uint256" },
      { name: "availableToBorrow", type: "uint256" },
      { name: "healthFactor", type: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPoolData",
    inputs: [],
    outputs: [
      { name: "totalDeposits", type: "uint256" },
      { name: "totalBorrows", type: "uint256" },
      { name: "supplyAPY", type: "uint256" },
      { name: "borrowAPY", type: "uint256" },
    ],
    stateMutability: "view",
  },
] as const;

// ERC20 ABI for token interactions
export const ERC20_ABI = [
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "spender", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
    ],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "account", type: "address" }],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [{ name: "", type: "uint8" }],
    stateMutability: "view",
  },
] as const;

// Market Configuration
export const MARKET_CONFIG = {
  ltv: 0.75, // 75% - max you can borrow against collateral
  liquidationThreshold: 0.80, // 80% - health factor below this = liquidatable
  closeFactor: 0.5, // 50% - max % of debt that can be liquidated in one tx
  liquidationBonus: 0.08, // 8% - liquidator bonus
} as const;
