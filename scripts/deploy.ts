import "@nomicfoundation/hardhat-ethers";
import * as fs from "node:fs";
import * as path from "node:path";
import * as hre from "hardhat";

const { ethers, network } = hre;

type DeploymentArtifacts = {
  chainId: number;
  networkName: string;
  deployer: `0x${string}`;
  contracts: {
    lendingPool: `0x${string}`;
    weth: `0x${string}`;
    usdc: `0x${string}`;
    oracle: `0x${string}`;
  };
  tokens: {
    faucetWethAmount: string;
    faucetUsdcAmount: string;
  };
  prices: {
    wethUsd: string;
    usdcUsd: string;
  };
  timestamp: string;
};

function ensureDir(dirPath: string) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeJson(outputPath: string, data: unknown) {
  fs.writeFileSync(outputPath, `${JSON.stringify(data, null, 2)}\n`);
}

function writeFrontendConfig(outputPath: string, deployment: DeploymentArtifacts) {
  const ts = `export type DeploymentConfig = {
  chainId: number;
  networkName: string;
  contracts: {
    lendingPool: \`0x\${string}\`;
    weth: \`0x\${string}\`;
    usdc: \`0x\${string}\`;
    oracle: \`0x\${string}\`;
  };
};

// Auto-updated by scripts/deploy.ts after deployment.
export const DEPLOYMENT: DeploymentConfig = ${JSON.stringify(
    {
      chainId: deployment.chainId,
      networkName: deployment.networkName,
      contracts: deployment.contracts,
    },
    null,
    2,
  )} as const;

export const IS_DEPLOYMENT_CONFIGURED = true;
`;

  fs.writeFileSync(outputPath, ts);
}

async function waitFor(tx: { wait: () => Promise<unknown> }) {
  await tx.wait();
}

async function main() {
  const [deployer] = await ethers.getSigners();
  const networkInfo = await ethers.provider.getNetwork();
  const chainId = Number(networkInfo.chainId);

  console.log(`Deploying to ${network.name} (${chainId}) with ${deployer.address}`);

  const MockWETH = await ethers.getContractFactory("MockWETH");
  const weth = await MockWETH.deploy();
  await weth.waitForDeployment();
  const wethAddress = (await weth.getAddress()) as `0x${string}`;

  const MockUSDC = await ethers.getContractFactory("MockUSDC");
  const usdc = await MockUSDC.deploy();
  await usdc.waitForDeployment();
  const usdcAddress = (await usdc.getAddress()) as `0x${string}`;

  const MockOracle = await ethers.getContractFactory("MockOracle");
  const oracle = await MockOracle.deploy();
  await oracle.waitForDeployment();
  const oracleAddress = (await oracle.getAddress()) as `0x${string}`;

  console.log("Setting demo oracle prices...");
  await waitFor(await oracle.setPrice(wethAddress, ethers.parseEther("3200")));
  await waitFor(await oracle.setPrice(usdcAddress, ethers.parseEther("1")));

  const VaultLend = await ethers.getContractFactory("VaultLend");
  const lendingPool = await VaultLend.deploy(wethAddress, usdcAddress, oracleAddress);
  await lendingPool.waitForDeployment();
  const lendingPoolAddress = (await lendingPool.getAddress()) as `0x${string}`;

  console.log("Minting demo balances to deployer...");
  const faucetWethAmount = ethers.parseEther("25");
  const faucetUsdcAmount = ethers.parseUnits("250000", 6);
  await waitFor(await weth.mint(deployer.address, faucetWethAmount));
  await waitFor(await usdc.mint(deployer.address, faucetUsdcAmount));

  console.log("Seeding initial USDC liquidity...");
  const initialLiquidity = ethers.parseUnits("100000", 6);
  await waitFor(await usdc.approve(lendingPoolAddress, initialLiquidity));
  await waitFor(await lendingPool.deposit(initialLiquidity));

  const deployment: DeploymentArtifacts = {
    chainId,
    networkName: network.name,
    deployer: deployer.address as `0x${string}`,
    contracts: {
      lendingPool: lendingPoolAddress,
      weth: wethAddress,
      usdc: usdcAddress,
      oracle: oracleAddress,
    },
    tokens: {
      faucetWethAmount: ethers.formatEther(faucetWethAmount),
      faucetUsdcAmount: ethers.formatUnits(faucetUsdcAmount, 6),
    },
    prices: {
      wethUsd: "3200",
      usdcUsd: "1",
    },
    timestamp: new Date().toISOString(),
  };

  const rootDeploymentPath = path.join(process.cwd(), `deployment.${network.name}.json`);
  const frontendDeploymentPath = path.join(process.cwd(), "src/config/deployment.ts");
  const frontendDeploymentsDir = path.join(process.cwd(), "src/config/deployments");
  const networkDeploymentPath = path.join(frontendDeploymentsDir, `${network.name}.json`);

  ensureDir(frontendDeploymentsDir);
  writeJson(rootDeploymentPath, deployment);
  writeJson(networkDeploymentPath, deployment);
  writeFrontendConfig(frontendDeploymentPath, deployment);

  console.log("Deployment complete:");
  console.log(`  VaultLend: ${lendingPoolAddress}`);
  console.log(`  MockWETH:  ${wethAddress}`);
  console.log(`  MockUSDC:  ${usdcAddress}`);
  console.log(`  Oracle:    ${oracleAddress}`);
  console.log(`  JSON:      ${rootDeploymentPath}`);
  console.log(`  Frontend:  ${frontendDeploymentPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
