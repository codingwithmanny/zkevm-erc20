# zkEVM ERC20 Token

This code is for an ERC20 token and how to set it up for zkEVM.

**NOTE:** You cannot currently deploy to zkEVM Testnet through Hardhat, yet.

## Requirements

- nvm or node v18.12.1
- pnpm v7.15.0

## Getting Started

Install dependencies

```bash
pnpm install;
```

### Running Node

```bash
# FROM ./root/of/zkevm-erc20

./node_modules/.bin/hardhat node;

# Expected Output:
# Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/
# 
# Accounts
# ========
# 
# WARNING: These accounts, and their private keys, are publicly known.
# Any funds sent to them on Mainnet or any other live network WILL BE LOST.
# 
# Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
# Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
# ...
```

### Running Tests

**NOTE:** While hardhat node running.

```bash
# FROM ./root/of/zkevm-erc20

./node_modules/.bin/hardhat test;

# Expected Output:
# Compiled 6 Solidity files successfully
# 
# 
#   zkERC20
#     Deployment
#       ✔ Should deploy with initial 10,000 supply (1153ms)
#     Minting
#       ✔ Should mint and increase the supply by 137
# 
# 
#   2 passing (1s)
```