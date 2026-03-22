import { ERC20_ABI, ORACLE_ABI, VAULT_LEND_ABI } from "./contract-abis";
import { DEPLOYMENT } from "./deployment";

type Address = `0x${string}`;

// Using Ethereum Sepolia testnet
export const NETWORK_ID = DEPLOYMENT.chainId;
export const NETWORK_NAME = DEPLOYMENT.networkName;
export const BLOCK_EXPLORER_URL = "https://sepolia.etherscan.io";

export const CONTRACTS = {
  LENDING_POOL: DEPLOYMENT.contracts.lendingPool,
  WETH_TOKEN: DEPLOYMENT.contracts.weth,
  USDC_TOKEN: DEPLOYMENT.contracts.usdc,
  ORACLE: DEPLOYMENT.contracts.oracle,
} as const satisfies Record<string, Address>;

export { ERC20_ABI, ORACLE_ABI, VAULT_LEND_ABI };

export const LENDING_POOL_ABI = VAULT_LEND_ABI;
export const ERC20_CONTRACT_ABI = ERC20_ABI;
export const ORACLE_CONTRACT_ABI = ORACLE_ABI;

export const MARKET_CONFIG = {
  ltv: 0.75,
  liquidationThreshold: 0.8,
  closeFactor: 0.5,
  liquidationBonus: 0.08,
} as const;
