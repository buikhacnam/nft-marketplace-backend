import { ethers, network } from 'hardhat'
import { moveBlocks } from '../utils/move-blocks'

const PRICE = ethers.utils.parseEther('0.1')

async function mintAndList() {
	const nftMarketplace = await ethers.getContract('NftMarketplace')
	const basicNft = await ethers.getContract('BasicNft')
	console.log('Minting...')
	const mintTx = await basicNft.mintNft()
	const mintTxReceipt = await mintTx.wait(1)
	console.log('mintTxReceipt:', mintTxReceipt)
	// run the event: event DogMinted(uint256 indexed tokenId);
	const tokenId = mintTxReceipt.events[0].args.tokenId

	console.log('approving nft...')
	// approve(address to, uint256 tokenId)
	// address owner = ERC721.ownerOf(tokenId);
	// require(to != owner, "ERC721: approval to current owner");
	// Approves another address to transfer the given token ID The zero address indicates there is no approved address.
	// There can only be one approved address per token at a given time.
	// Can only be called by the token owner or an approved operator.
	const approveTx = await basicNft.approve(nftMarketplace.address, tokenId)
	await approveTx.wait(1)

	// console.log("listing nft...")
	const listTx = await nftMarketplace.listItem(
		basicNft.address,
		tokenId,
		PRICE
	)
	await listTx.wait(1)
	console.log('listTed:', listTx)

	if (network.config.chainId == 31337) {
		// Moralis has a hard time if you move more than 1 at once!
		await moveBlocks(1)
	}
}

mintAndList()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error)
		process.exit(1)
	})
