// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.;
const hre = require("hardhat");

const  CONTRACT_ADDR = "0xF7184b4269B5F2681ecc2FCBd9948a0673B4e34a";

async function main() {
      // hardhat-ethers
  const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDR);  
  console.log(await contract.x() );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
