// Imports
// ========================================================
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

// Tests
// ========================================================
describe("zkERC20", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployZkERC20() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    // Make sure in the contract factory that it mateches the contract name in the solidity file
    // Ex: contract ZkERC20
    const zkERC20Contract = await ethers.getContractFactory("ZkERC20");
    const zkERC20 = await zkERC20Contract.deploy();

    return { zkERC20, owner, otherAccount };
  };

  /**
   * 
   */
  describe("Deployment", function () {
    /**
     * 
     */
    it("Should deploy with initial 10,000 supply", async function () {
      // Setup
      const { zkERC20 } = await loadFixture(deployZkERC20);

      // Init + Test
      expect(await zkERC20.totalSupply()).to.equal(ethers.utils.parseEther(`10000`).toString());
    });
  });

  /**
   * 
   */
   describe("Minting", function () {
    /**
     * 
     */
    it("Should mint and increase the supply by 137", async function () {
      // Setup
      const { zkERC20, owner } = await loadFixture(deployZkERC20);

      // Init
      await zkERC20.connect(owner).mint(owner.address, ethers.utils.parseUnits('137', 18));

      // Init + Test
      expect(await zkERC20.totalSupply()).to.equal(ethers.utils.parseEther(`10137`).toString());
    });
  });
});
