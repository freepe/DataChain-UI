pragma solidity ^0.4.2;

// import './zeppelin/lifecycle/Killable.sol';
import "./File.sol";


contract FilesFactory {

    address[] public contracts;

    function getContractCount() public constant returns(uint contractCount) {
        return contracts.length;
    }

    function newFile(
        uint accessFee,
        string hashOfcontent
    ) public returns(address)
    {
        address file = new File(accessFee, msg.sender, hashOfcontent);
        contracts.push(file);
        return file;
    }

    function getContractsList() public returns (address[]) {
        return contracts;
    }
}