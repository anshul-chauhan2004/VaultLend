import fs from "node:fs";
import path from "node:path";
import solc from "solc";
import { ContractFactory, JsonRpcProvider, Wallet, formatEther, parseEther, parseUnits } from "ethers";

const REQUIRED_ENV_VARS = ["SEPOLIA_RPC_URL", "PRIVATE_KEY"];
const DEPLOYMENT_PLACEHOLDER = "0x1234567890123456789012345678901234567890";

const SOURCE_FILES = [
  "contracts/MockERC20.sol",
  "contracts/MockUSDC.sol",
  "contracts/MockWETH.sol",
  "contracts/MockOracle.sol",
  "contracts/VaultLend.sol",
];

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function writeFrontendConfig(filePath, deployment) {
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

// Auto-updated by scripts/deploy-sepolia-direct.mjs after deployment.
export const DEPLOYMENT: DeploymentConfig = ${JSON.stringify(
    {
      chainId: deployment.chainId,
      networkName: deployment.networkName,
      contracts: deployment.contracts,
    },
    null,
    2,
  )} as const;

export const IS_DEPLOYMENT_CONFIGURED =
  DEPLOYMENT.contracts.lendingPool !== "${DEPLOYMENT_PLACEHOLDER}";
`;

  fs.writeFileSync(filePath, ts);
}

function loadSources() {
  return Object.fromEntries(
    SOURCE_FILES.map((file) => [file, { content: fs.readFileSync(path.join(process.cwd(), file), "utf8") }]),
  );
}

function compileContracts() {
  const input = {
    language: "Solidity",
    sources: loadSources(),
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      outputSelection: {
        "*": {
          "*": ["abi", "evm.bytecode.object"],
        },
      },
    },
  };

  const output = JSON.parse(solc.compile(JSON.stringify(input)));
  const errors = output.errors ?? [];
  const fatalErrors = errors.filter((error) => error.severity === "error");

  if (fatalErrors.length > 0) {
    const message = fatalErrors.map((error) => error.formattedMessage).join("\n");
    throw new Error(`Solidity compilation failed:\n${message}`);
  }

  return output.contracts;
}

function getArtifact(compiledContracts, sourceName, contractName) {
  const contract = compiledContracts[sourceName]?.[contractName];
  if (!contract) {
    throw new Error(`Missing compiled artifact for ${sourceName}:${contractName}`);
  }

  return {
    abi: contract.abi,
    bytecode: `0x${contract.evm.bytecode.object}`,
  };
}

async function deploy(factoryName, artifact, signer, args = []) {
  console.log(`Deploying ${factoryName}...`);
  const factory = new ContractFactory(artifact.abi, artifact.bytecode, signer);
  const contract = await factory.deploy(...args);
  await contract.waitForDeployment();
  const address = await contract.getAddress();
  console.log(`${factoryName} deployed at ${address}`);
  return contract;
}

async function main() {
  for (const envVar of REQUIRED_ENV_VARS) {
    requireEnv(envVar);
  }

  const provider = new JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
  const wallet = new Wallet(process.env.PRIVATE_KEY, provider);
  const network = await provider.getNetwork();
  const balance = await provider.getBalance(wallet.address);

  console.log(`Using deployer ${wallet.address}`);
  console.log(`Chain ID: ${network.chainId}`);
  console.log(`Wallet balance: ${formatEther(balance)} ETH`);

  if (network.chainId !== 11155111n) {
    throw new Error(`Expected Sepolia (11155111), got ${network.chainId.toString()}`);
  }

  if (balance === 0n) {
    throw new Error("Deployer wallet has no Sepolia ETH");
  }

  const compiledContracts = compileContracts();
  const mockWethArtifact = getArtifact(compiledContracts, "contracts/MockWETH.sol", "MockWETH");
  const mockUsdcArtifact = getArtifact(compiledContracts, "contracts/MockUSDC.sol", "MockUSDC");
  const mockOracleArtifact = getArtifact(compiledContracts, "contracts/MockOracle.sol", "MockOracle");
  const vaultLendArtifact = getArtifact(compiledContracts, "contracts/VaultLend.sol", "VaultLend");

  const weth = await deploy("MockWETH", mockWethArtifact, wallet);
  const usdc = await deploy("MockUSDC", mockUsdcArtifact, wallet);
  const oracle = await deploy("MockOracle", mockOracleArtifact, wallet);

  const wethAddress = await weth.getAddress();
  const usdcAddress = await usdc.getAddress();
  const oracleAddress = await oracle.getAddress();

  console.log("Setting oracle prices...");
  await (await oracle.setPrice(wethAddress, parseEther("3200"))).wait();
  await (await oracle.setPrice(usdcAddress, parseEther("1"))).wait();

  const lendingPool = await deploy("VaultLend", vaultLendArtifact, wallet, [
    wethAddress,
    usdcAddress,
    oracleAddress,
  ]);
  const lendingPoolAddress = await lendingPool.getAddress();

  console.log("Minting deployer demo balances...");
  const faucetWethAmount = parseEther("25");
  const faucetUsdcAmount = parseUnits("250000", 6);
  await (await weth.mint(wallet.address, faucetWethAmount)).wait();
  await (await usdc.mint(wallet.address, faucetUsdcAmount)).wait();

  console.log("Seeding initial USDC liquidity...");
  const initialLiquidity = parseUnits("100000", 6);
  await (await usdc.approve(lendingPoolAddress, initialLiquidity)).wait();
  await (await lendingPool.deposit(initialLiquidity)).wait();

  const deployment = {
    chainId: Number(network.chainId),
    networkName: "Sepolia",
    deployer: wallet.address,
    contracts: {
      lendingPool: lendingPoolAddress,
      weth: wethAddress,
      usdc: usdcAddress,
      oracle: oracleAddress,
    },
    tokens: {
      faucetWethAmount: formatEther(faucetWethAmount),
      faucetUsdcAmount: "250000",
    },
    prices: {
      wethUsd: "3200",
      usdcUsd: "1",
    },
    timestamp: new Date().toISOString(),
    explorer: {
      lendingPool: `https://sepolia.etherscan.io/address/${lendingPoolAddress}`,
      weth: `https://sepolia.etherscan.io/address/${wethAddress}`,
      usdc: `https://sepolia.etherscan.io/address/${usdcAddress}`,
      oracle: `https://sepolia.etherscan.io/address/${oracleAddress}`,
    },
  };

  const frontendConfigPath = path.join(process.cwd(), "src/config/deployment.ts");
  const frontendDeploymentsDir = path.join(process.cwd(), "src/config/deployments");
  const frontendDeploymentPath = path.join(frontendDeploymentsDir, "sepolia.json");

  ensureDir(frontendDeploymentsDir);
  writeJson(frontendDeploymentPath, deployment);
  writeFrontendConfig(frontendConfigPath, deployment);

  console.log("Deployment finished.");
  console.log(`VaultLend: ${lendingPoolAddress}`);
  console.log(`MockWETH: ${wethAddress}`);
  console.log(`MockUSDC: ${usdcAddress}`);
  console.log(`MockOracle: ${oracleAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
