// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract EtherWeiExam {
    // 1 wei same as 1
    uint public oneWei = 1 wei;
    
    bool public isOneWei = (1 wei == 1);

    // 1 ehter same as 10^18 wei
    uint public oneEther = 1 ether;

    bool public inOneEhter = (1 ether == 10**18);

}