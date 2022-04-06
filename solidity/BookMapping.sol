pragma solidity ^0.6.0;

// SPDX-License-Identifier: UNLICENSED

contract BookCont {
    //mapping
    mapping(uint => string) public names;
    mapping(uint => Book) public books;
    mapping(address => mapping(uint=> Book)) public myBooks;

    struct Book {
        string title;
        string author;
    }

    constructor() public {
        names[1] = "James Hetfield";
        names[2] = "Kirk Hamete";
        names[3] = "Bruce Lee";
    }

    function addBook(uint _id, string memory _title, string memory _author) public {
        books[_id] = Book(_title, _author);
    }

    function addMyBook(uint _id, string memory _title, string memory _author) public {
        myBooks[msg.sender][_id] = Book(_title, _author);
    }
}