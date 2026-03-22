#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Function to extract ABI from artifact
function getAbiFromArtifact(contractName) {
  const artifactPath = path.join(
    __dirname,
    `../artifacts/contracts/${contractName}.sol/${contractName}.json`
  );
  const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf-8"));
  return artifact.abi;
}

// Extract ABIs
const VAULT_LEND_ABI = getAbiFromArtifact("VaultLend");
const ERC20_ABI = getAbiFromArtifact("MockUSDC");
const ORACLE_ABI = getAbiFromArtifact("MockOracle");

// Generate TypeScript file with ABIs
const tsContent = `// Auto-generated from Hardhat artifacts
// Run: node scripts/generate-abis.js

export const VAULT_LEND_ABI = ${JSON.stringify(VAULT_LEND_ABI, null, 2)};

export const ERC20_ABI = ${JSON.stringify(ERC20_ABI, null, 2)};

export const ORACLE_ABI = ${JSON.stringify(ORACLE_ABI, null, 2)};
`;

const outputPath = path.join(__dirname, "../src/config/contract-abis.ts");
fs.writeFileSync(outputPath, tsContent);

console.log("✅ Generated contract ABIs at src/config/contract-abis.ts");
console.log(`   - VaultLend ABI: ${VAULT_LEND_ABI.length} items`);
console.log(`   - ERC20 ABI: ${ERC20_ABI.length} items`);
console.log(`   - Oracle ABI: ${ORACLE_ABI.length} items`);
