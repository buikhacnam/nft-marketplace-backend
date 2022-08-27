import { ethers, network } from 'hardhat'
import { moveBlocks } from '../utils/move-blocks'

const PRICE = ethers.utils.parseEther("0.1")

async function mintAndList() {
    const basicNft = await ethers.getContract("BasicNftTwo")
    console.log("Minting NFT...")
    const mintTx = await basicNft.mintNft()
    const mintTxReceipt = await mintTx.wait(1)
    console.log(
        `Minted tokenId ${mintTxReceipt.events[0].args.tokenId.toString()} from contract: ${
            basicNft.address
        }
        It is now can be listed for sale.
        `


    )
    if (network.config.chainId == 31337) {
        // Moralis has a hard time if you move more than 1 block!
        await moveBlocks(1, 1000)
    }
}

mintAndList()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
