require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config({ path: __dirname + "/.env" })

const { RINKEBY_RPC_URL, PRIVATE_KEY, COINMARKETCAP_API_KEY, ETHERSCAN_API_KEY } = process.env
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfirmations: 1,
        },
        localhost: {
            chainId: 31337,
            blockConfirmations: 1,
        },
        rinkeby: {
            chainId: 4,
            blockConfirmations: 6,
            url: `${RINKEBY_RPC_URL}`,
            accounts: [PRIVATE_KEY],
        },
    },
    gasReporter: {
        enabled: false,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: COINMARKETCAP_API_KEY,
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
        // In case the module can't find the rinkeby etherscan automatically
        customChains: [
            {
                network: "rinkeby",
                chainId: 4,
                urls: {
                    apiURL: "https://api-rinkeby.etherscan.io/api",
                    browserURL: "https://rinkeby.etherscan.io",
                },
            },
        ],
    },
    solidity: "0.8.9",
    namedAccounts: {
        deployer: {
            default: 0,
        },
        player: {
            default: 1,
        },
    },
    mocha: {
        timeout: 500000, //500 seconds max
    },
}
