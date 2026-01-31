const hre = require("hardhat");

async function main() {
  // 注意：这里必须和你 Protocol176.sol 里的 contract 名字一致
  const P176 = await hre.ethers.getContractFactory("Protocol176");
  
  // 你的图片显示的唯一接收地址
  const myWallet = "0x3bfda04ad60df30a7adf66702c68b339f1c4d17f";

  console.log("正在执行 Meta_Core 协议部署...");
  const token = await P176.deploy(myWallet, myWallet, myWallet, myWallet, myWallet);
  await token.waitForDeployment();

  console.log("------------------------------------------");
  console.log("部署成功！176协议合约地址为:");
  console.log(await token.getAddress());
  console.log("------------------------------------------");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
