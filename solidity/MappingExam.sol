pragma solidity ^0.8.13;

contract MappingExample {
    mapping(address => uint) public balances;

    function update(uint newBalances) public {
        balances[msg.sender] = newBalances;
    }
}

contract MappingUser {
    function f() public returns(uint) {
        MappingExample m = new MappingExample();
        m.update(100);

        return m.balances(this);
    }
}