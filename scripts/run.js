const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners()
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal")
  const waveContract = await waveContractFactory.deploy()
  await waveContract.deployed()
  console.log("Contract deployed to:", waveContract.address)

  console.log("Cotract deployed by:", owner.address)

  await waveContract.getTotalWaves()

  const firstWaveTxn = await waveContract.wave()
  await firstWaveTxn.wait()

  await waveContract.getTotalWaves()
  const secondWaveTxn = await waveContract.wave()
  await secondWaveTxn.wait()

  await waveContract.getTotalWaves()
  await waveContract.getTotalWavers()
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    process.exit(1)
  }
}

runMain()
