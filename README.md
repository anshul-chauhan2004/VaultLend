
# VaultLend

VaultLend is a single-market lending protocol demo on Ethereum Sepolia.

The app uses:
- mock `WETH` as collateral
- mock `USDC` as the supply and borrow asset
- MetaMask for wallet connection and transaction signing

This project is intended for demo and testnet use. The faucet mints mock assets, so the flows are real onchain interactions on Sepolia, but they do not use real-value production assets.

## Stack

- React + Vite
- Wagmi + RainbowKit
- Solidity + Hardhat
- Ethers.js deployment script for Sepolia

## Contracts

- [VaultLend.sol](./contracts/VaultLend.sol)
- [MockWETH.sol](./contracts/MockWETH.sol)
- [MockUSDC.sol](./contracts/MockUSDC.sol)
- [MockOracle.sol](./contracts/MockOracle.sol)

## Frontend

- Landing page: [src/app/pages/Home.tsx](./src/app/pages/Home.tsx)
- App dashboard: [src/app/pages/AppDashboard.tsx](./src/app/pages/AppDashboard.tsx)
- Deployment config: [src/config/deployment.ts](./src/config/deployment.ts)

## Setup

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm run dev
```

## Useful Commands

Generate ABIs:

```bash
npm run abi:generate
```

Run the local Hardhat deploy script:

```bash
npm run deploy:local
```

Deploy to Sepolia:

```bash
SEPOLIA_RPC_URL=...
PRIVATE_KEY=...
ETHERSCAN_API_KEY=...
npm run deploy:sepolia
```

Run tests:

```bash
npx hardhat test
```

## Sepolia Deployment

The current Sepolia deployment record is stored in:

- [src/config/deployments/sepolia.json](./src/config/deployments/sepolia.json)

The frontend consumes:

- [src/config/deployment.ts](./src/config/deployment.ts)
  
