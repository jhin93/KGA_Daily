pragma solidity ^0.8.13;


contract HotelRoom {
    enum Statuses { Vacant, Occupied }
    Statuses curStatus;

    event Occupy(address _occupant, uint _value);

    address payable public owner;

    constructor() public {
        owner = msg.sender;
        curStatus = Statuses.Vacant;
    }

    modifier onlyWhileVacant {
        require(curStatus == Statuses.Vacant, "Currently occupied.");
        _;
    }

    modifier costs (uint _amount) {
        require(msg.value >= _amount, "Not enough Ether provider.");
        _;
    }

    receive() external payable onlyWhileVacant costs(2 ether) {
        curStatus = Statuses.Occupied;
        owner.transfer(msg.value);
        emit Occupy(msg.sender, msg.value);
    }

    // 리믹스에서 1계정에서 배포하고, 2계정에서 밸런스를 2 이더 이상입력하고 transact 하면 1계정에 2이더가 들어감. 1계정은 방이 차서 그 이후로는 안들어감
}