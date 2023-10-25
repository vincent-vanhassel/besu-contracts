import { ethers } from "hardhat";

async function main() {

  const increment = await ethers.deployContract("Incrementer");

  await increment.waitForDeployment();

  console.log(
    `Increment with 0 deployed to ${increment.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});