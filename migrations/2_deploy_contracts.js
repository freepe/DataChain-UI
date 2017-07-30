var Ownable = artifacts.require("./zeppelin/ownership/Ownable.sol");
var Killable = artifacts.require("./zeppelin/lifecycle/Killable.sol");
var Authentication = artifacts.require("./Authentication.sol");
var FilesFactory = artifacts.require("./FilesFactory.sol");
var File = artifacts.require("./File.sol");

console.log(artifacts);

module.exports = function(deployer) {
  deployer.deploy(Ownable);
  deployer.link(Ownable, Killable);
  deployer.deploy(Killable);
  deployer.link(Killable, Authentication);
  deployer.deploy(Authentication);
  deployer.link(Killable, FilesFactory);
  deployer.deploy(FilesFactory);
  deployer.link(Killable, File);
  deployer.deploy(File);
};
