// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.7.0;

interface PersonInterface {
       function totalSupply() external view returns (uint256);
       function balanceOf(address account) external view returns (uint256);
       function transfer(address recipient, uint256 amount) external returns (bool);
       function approve(address recipient, uint256 amount) external returns (bool);
}