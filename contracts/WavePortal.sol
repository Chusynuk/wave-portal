// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "hardhat/console.sol";

contract WavePortal {
  uint256 totalWaves;
  address[] public wavers;

  constructor() {
    console.log("Look at me a im smart");
  }

  function wave() public returns (uint256) {
    console.log("%s has waved", msg.sender);
    wavers.push(msg.sender);
    return totalWaves += 1;
  }

  function getTotalWaves() public view returns (uint256) {
    console.log("We have %d total waves!", totalWaves);
    return totalWaves;
  }

  function getTotalWavers() public view returns (address[] memory) {
    // console.log("wavers --> %s", wavers);
    return wavers;
  }
}
