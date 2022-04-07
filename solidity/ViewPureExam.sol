// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 < 0.9.0;

contract ViewPureExam {
    // view : function 밖의 변수들을 읽을 수 있고 값은 변경불가능
    // pure : function 밖의 변수들을 읽지 못하고 변경 불가능
    // pure와 view를 명시하지 않을 때는, function 밖의 변수들을 읽어서 변경한다.

    // 1. view
    uint256 public a = 1;
    
    function readA() public view returns (uint256) {
        return a;
    }

    // 2. pure
    function readVariable() public pure returns(uint256) {
        uint256 nNum = 5;
        return 3 + 7 + nNum;
    }

    // 3. pure, view 명시하지 않을 때
    function readDefault() public returns(uint256) {
        a = 22;
        return a;
    }
}