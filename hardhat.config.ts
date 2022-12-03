// Imports
// ========================================================
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';

// Config
// ========================================================
dotenv.config();

// Main Config
// ========================================================
const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    // NOTE: Not currently supported
    zkevm: {
      url: `${process.env.RPC_ZKEVM_URL || ''}`,
      accounts: process.env.WALLET_PRIVATE_KEY
        ? [`0x${process.env.WALLET_PRIVATE_KEY}`]
        : [],
    }
  }
};

// Exports
// ========================================================
export default config;
