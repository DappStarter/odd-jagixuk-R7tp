require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area state biology regret tide pulp coral light army general'; 
let testAccounts = [
"0xbab17a20188d45a5e3d375a343fc84b79b2a599294aceb262ee412630dbba504",
"0xbd38715a56a89c78ec0c436deb602c1fd27dd76298c839133e5ab17a4e3061a3",
"0x8d8b62aea0a17625afed5d66f3d59e6e19ab2a9111304cf810ddc53f1c67ce5d",
"0x90f9ef8c58799956a5342c3cdcac105b5f362984122f79336b3dfd2ac98b53c7",
"0x825ec033108e2e54a22e83b5561a396b72b822277fd551b981ecaddb5bd81d78",
"0x08b1be3b4c8c05242994598a7c4e189094119214dac3b5c7f25565c31415b629",
"0x3e94da453145ef20de7a567dbbcd0f7cd18f05778a1d5804bfdf87314cfc7760",
"0x91bacb6b446566dc4b417cce6f7f79b02be76ee3b4b02329a583e911e0d32ef2",
"0xb3f8b40833a3db412401fb04527a41c4eaa7572481687c6b17c98ce1e3625404",
"0x87cf2b968b1d9484999a40a390091e8cb54c7c287556441325df4ed6670b244b"
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

