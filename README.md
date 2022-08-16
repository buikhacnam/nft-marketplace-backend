# Hardhat NFT Marketplace Backend

- List NFTs on the market place

    There are 2 ways doing this:
        
    - Send the NFT to the contract. Transfer -> Contract "Hold" the NFT. It can be Gas Expensive.

    - Owner can still hold the NFT, and give the marketplace approval to sell the NFT for them. (We will implement this)

- Buy NFTs from the market place

- Cancel NFTs from the market place

- Update the price of NFTs on the market place

- Withdraw payment for my bought NFTs


## Some common commands:


Deploy contracts on Localhost network:

```
yarn hardhat node
```

Run scripts:

```
yarn hardhat run scripts/mint-and-list.ts
```

Generate / update contract addresses and Abi:

```
yarn hardhat deploy --network localhost --tags frontend
```