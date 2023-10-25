import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";

const mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";
const besuUrl = "http://localhost:8547";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    hardhat: {},
    besu: {
      url: besuUrl,
      chainId: 15,
      gasPrice: 0,
      gas: 4500000,
      accounts: {
        mnemonic: mnemonic,
      }
    }
  }
};

export default config;
