// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract ErrorExam {
    function testRequire(uint _i) public pure {
        require(_i > 10, "Input must be greater than 10");
    }

    function testRevert(uint _i) public pure {
        if(_i <= 10)
        {
            revert("Input must be greater than 10");
        }
    }

    uint public num;

    // assert는 절대 거짓이 되어서는 안되는 코드를 확인하는 데 사용됩니다.
    // assertion 실패는 아마도 버그가 있음을 의미한다.
    function testAssert() public view {
        assert(num == 0); // 이 문장이 참인지 확인.
    }

    // custom error
    error InsufficientBalance(uint balance, uint withdrawAmount);

    function testCustom(uint _withdrawAmount) public view {
        uint bal = address(this).balance;
        if(bal < _withdrawAmount) {
            revert InsufficientBalance({balance : bal, withdrawAmount: _withdrawAmount});
        }
    }
}