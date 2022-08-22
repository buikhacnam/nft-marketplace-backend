import { ethers, network } from 'hardhat'
import { moveBlocks } from '../utils/move-blocks'

const TOKEN_ID = 1

async function cancelItem() {
    const nftMarketplace = await ethers.getContract("NftMarketplace")
    const basicNft = await ethers.getContract("BasicNft")
    const tx = await nftMarketplace.cancelListing(basicNft.address, TOKEN_ID)
    await tx.wait(1)
    console.log("NFT Canceled!")
    if ((network.config.chainId = 31337)) {
        await moveBlocks(2)
    }
}

cancelItem()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })