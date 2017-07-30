pragma solidity ^0.4.2;

// import './zeppelin/lifecycle/Killable.sol';


contract File {
    uint public fee;
    address public authorAddress;
    string private contentHash;
    address[] private buyers;

    function File(
        uint accessFee,
        address contentAuthorAddress,
        string hashOfcontent
    ) {
        fee = accessFee;
        authorAddress = contentAuthorAddress;
        contentHash = hashOfcontent;
    }

    function buyContent() {
        if (msg.sender.balance < fee) {
            revert();
        }
        if (authorAddress.balance + fee < authorAddress.balance) {
            revert();
        }
        buyers.push(msg.sender);
    }

    function getContentHash() constant returns (string) {
        return contentHash;
    }
}
