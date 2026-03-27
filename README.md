# VaultLend

VaultLend is a single‑market DeFi lending demo built for Ethereum Sepolia. It showcases a complete onchain borrowing flow using MetaMask with faucet‑minted mock assets (WETH collateral, USDC borrow/supply). The UI reads live protocol state from deployed contracts and surfaces pool metrics, account health, and transaction status.


## 🎥 Video Demonstration


https://github.com/user-attachments/assets/244173ef-69f0-4cf5-beaa-e50047ddcb4c


## What You Can Do

- Mint demo WETH and USDC via the in‑app faucet
- Deposit WETH as collateral
- Supply USDC as liquidity
- Borrow USDC against your collateral
- Repay USDC and withdraw collateral
- View live market and account metrics (liquidity, utilization, debt, health factor)

This is a testnet/demo app. The assets are mock tokens and do not represent real value.

## Tech Stack

- React + Vite
- Wagmi + RainbowKit
- viem (contract reads/writes)
- Solidity + Hardhat

## Contracts

- `contracts/VaultLend.sol`
- `contracts/MockWETH.sol`
- `contracts/MockUSDC.sol`
- `contracts/MockOracle.sol`

## App Structure

- Landing page: `src/app/pages/Home.tsx`
- App dashboard: `src/app/pages/AppDashboard.tsx`
- Protocol hooks: `src/hooks/useProtocol.ts`
- Contract addresses/ABIs: `src/config/contract-abis.ts`
- Deployment records: `src/config/deployments/sepolia.json`

## Quick Start

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

## Live Demo

```
https://anshul-chauhan2004.github.io/VaultLend/
```

## Sepolia Deployment

Set env variables:

```bash
SEPOLIA_RPC_URL=...
PRIVATE_KEY=...
ETHERSCAN_API_KEY=...
```

Deploy contracts:

```bash
npm run deploy:sepolia
```

## Useful Commands

Generate ABIs:

```bash
npm run abi:generate
```

Local deploy:

```bash
npm run deploy:local
```

Run tests:

```bash
npx hardhat test
```

## Architecture

```text
User Wallet (MetaMask)
        |
        v
Frontend (React + Wagmi + viem)
        |
        v
VaultLend (lending pool)
  |         |         |
  v         v         v
MockWETH  MockUSDC  MockOracle
```
## Notes

- Single‑market demo: WETH collateral, USDC borrow/supply
- Faucet mints mock tokens for testing
- UI reads live onchain state from Sepolia deployments
