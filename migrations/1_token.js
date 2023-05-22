var Token = artifacts.require("Token\\contracts\\token.sol");

module.exports = function (deployer) {
    deployer.deploy(Token);
};