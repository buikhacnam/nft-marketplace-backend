export interface networkConfigItem {
    name?: string
    subscriptionId?: string 
    keepersUpdateInterval?: string 
    raffleEntranceFee?: string 
    callbackGasLimit?: string 
    vrfCoordinatorV2?: string
    gasLane?: string 
    ethUsdPriceFeed?: string
    mintFee?: string
  }
  
export interface networkConfigInfo {
    [key: number]: networkConfigItem
}

export const networkConfig: networkConfigInfo = {
    31337: {
        name: "localhost",
        ethUsdPriceFeed: "0x9326BFA02ADD2366b30bacB125260Af641031331",
        gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 30 gwei
        mintFee: "10000000000000000", // 0.01 ETH
        callbackGasLimit: "500000", // 500,000 gas
    },
    // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
    // Default one is ETH/USD contract on Kovan
    4: {
        name: 'rinkeby',
        ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e", // https://docs.chain.link/docs/ethereum-addresses/
        vrfCoordinatorV2: "0x6168499c0cFfCaCD319c818142124B7A15E857ab", // https://docs.chain.link/docs/vrf-contracts/#rinkeby-testnet
        subscriptionId: "6712", // https://vrf.chain.link/rinkeby/6712
        gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 30 gwei
        keepersUpdateInterval: "30",
        raffleEntranceFee: "100000000000000000", // 0.1 ETH
        callbackGasLimit: "500000", // 500,000 gas

        mintFee: "10000000000000000", // 0.01 ETH

    },
}

export const DECIMALS = "18"
export const INITIAL_PRICE = "200000000000000000000"
export const developmentChains = ["hardhat", "localhost"]
export const VERIFICATION_BLOCK_CONFIRMATIONS = 6

export const frontEndContractsFile = "./constants/networkMapping.json"
export const frontEndAbiLocation = "./constants/"