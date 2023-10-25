// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Incrementer {
    uint256 public count;

    constructor() {
        count = 0;
    }

    function increment() public {
        count += 1;
    }

    function getCount() public view returns (uint256) {
        return count;
    }
}