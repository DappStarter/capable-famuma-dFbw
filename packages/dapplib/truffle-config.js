require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note office color install help equal genius'; 
let testAccounts = [
"0x6ef11e1c988c5a0b35d87bcd3c0d323755a43c3227e30b5508bde96b448bf615",
"0xd76a7d27ee35cf822a10a0d24039c469e46bc040ad1aeef12f560394f8e7bf52",
"0x7a8c5ebae39d7148e7b07757df52596c16739a7f38e3f9e46b81e0b5a7f95872",
"0x91e908d1ff00eba7c57d375b8bdf3359825d9ed25d8b81e32fbc487b6501600e",
"0xd76c27bdfd1536003436b8a65e4bfeff3d983bd08344851400f3c37296999308",
"0x437186c6fdd76c5d1e33300ada1efc55597b2db523b018633c503e4cd492c31f",
"0x0964f986cda1b4d25fad7f52e93563d3acc74550774648d8c4af6dfcb92d9c53",
"0xd4f904e635ef67a5c2bbee8c89e4eaac0c9998af4bb237693f430783aef9ff60",
"0x43b3b7b536c2b5af8fb567fa69a8ab35cb51f477fa0f9b1dcc74c1e66c3cc7ee",
"0x397a1629a38adba34da1adc093df607c5ba4a3a66f23ae83326fc8398c2f36bf"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

