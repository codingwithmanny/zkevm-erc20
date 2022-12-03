// Imports
// ========================================================
import { ethers } from "hardhat";

// Main Deployment Script
// ========================================================
async function main() {
  // Make sure in the contract factory that it mateches the contract name in the solidity file
  // Ex: contract ZkERC20
  const zkERC20Contract = await ethers.getContractFactory("ZkERC20");
  const contract = await zkERC20Contract.deploy();

  await contract.deployed();

  console.log(`ZkERC20 deployed to ${contract.address}`);
};

// Init
// ========================================================
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
