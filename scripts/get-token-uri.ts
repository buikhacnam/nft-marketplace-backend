import { ethers, network } from 'hardhat'
// import { moveBlocks } from '../utils/move-blocks'

const TOKEN_ID = 0

async function buyItem() {
    const nftMarketplace = await ethers.getContract("NftMarketplace")
    const basicNft = await ethers.getContract("BasicNft")
    const tokenUri = await basicNft.tokenURI(TOKEN_ID)
    console.log({tokenUri})
}

buyItem()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
