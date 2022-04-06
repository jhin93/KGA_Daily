// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Doge {
    function catchphrase () public returns (string memory) {
        return "So WoW Crypto Doge - Musk";
    }
}

contract BabyDoge is Doge {
    function wowCatchPhrase() public returns (string memory) {
        return "Such Moon";
    }
}




