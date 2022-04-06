pragma solidity ^0.8.13;

contract enumTestContract {
    enum ActionChoice { GoLeft, GoRight, GoStraight, SitStill }
    ActionChoice choice; // 선언
    ActionChoice defaultChoice = ActionChoice.GoStraight;

    function setGoStrait() public {
        choice = ActionChoice.GoStraight;
    }

    function setGoLeft() public {
        choice = ActionChoice.GoLeft;
    }

    function setGoRight() public {
        choice = ActionChoice.GoRight;
    }

    function setSitStill() public {
        choice = ActionChoice.SitStill;
    }

    function getChoice() public view returns (ActionChoice) { // return 타입 정의
        return choice;
    }

    function getDefaultChoice() public view returns (ActionChoice) { // return 타입 정의
        return defaultChoice;
    }






}