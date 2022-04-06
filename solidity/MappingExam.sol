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

        return m.balances(this); // 에러발생 : Invalid type for argument in function call. Invalid implicit conversion from contract MappingUser to address requested.
        // 리믹스에선 MappingUser를 먼저 배포하고, MappingExample를 배포한 후 update에 777을 입력해주면 새 주소(new MappingExample();)의 밸런스가 바뀜
    }
}