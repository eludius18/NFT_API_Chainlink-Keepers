async function main() {
    const BullBear = await hre.ethers.getContractFactory("BullBear");
    const bullBear = await BullBear.deploy(10, "0xECe365B379E1dD183B20fc5f022230C044d51404", "0x6168499c0cFfCaCD319c818142124B7A15E857ab");
  
    await bullBear.deployed();
  
    console.log("BullBear deployed to:", bullBear.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });