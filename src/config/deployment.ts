export type DeploymentConfig = {
  chainId: number;
  networkName: string;
  contracts: {
    lendingPool: `0x${string}`;
    weth: `0x${string}`;
    usdc: `0x${string}`;
    oracle: `0x${string}`;
  };
};

// Auto-updated by scripts/deploy-sepolia-direct.mjs after deployment.
export const DEPLOYMENT: DeploymentConfig = {
  "chainId": 11155111,
  "networkName": "Sepolia",
  "contracts": {
    "lendingPool": "0x5490913F5085175a20B24EcfB9Cbb5cBB944513D",
    "weth": "0xBbDd5419E7cAaf62ac856DAABFf67B48a8909859",
    "usdc": "0x4bD71a8E675Af9DaB37578105899899B11CAB2D6",
    "oracle": "0x99b72270c78d839EC303E4d6555aCD7Bfbd2f468"
  }
} as const;

export const IS_DEPLOYMENT_CONFIGURED =
  DEPLOYMENT.contracts.lendingPool !== "0x1234567890123456789012345678901234567890";
