// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract LoopCondition {
    uint[] public numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    // 짝수
    function countEvenNumbers() public view returns (uint) {
        uint count = 0;
        for(uint i = 0; i < numbers.length; i ++) {
            if(isEvenNumber(numbers[i])) {
                count ++;
            }
        }
        return count;
    }

    function isEvenNumber(uint _num) public view returns (bool) {
        if(_num % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }

    // 홀수
    function countOddNumbers() public view returns (uint) {
        uint count = 0;
        for(uint i = 0; i < numbers.length; i ++) {
            if(isOddNumber(numbers[i])) {
                count ++;
            }
        }
        return count;
    }

    function isOddNumber(uint _num) public view returns (bool) {
        if(_num % 2 == 0) {
            return false;
        } else {
            return true;
        }
    }

    function isOwner() public view returns (bool) {
        return (msg.sender == owner);
    }
}