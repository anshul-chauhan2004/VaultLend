// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title MockOracle
 * @dev Mock price oracle for testing. Returns fixed prices.
 */
contract MockOracle {
    mapping(address => uint256) public prices;
    address public owner;

    event PriceUpdated(address indexed token, uint256 price);

    constructor() {
        owner = msg.sender;
        // Default prices (in Wei, 18 decimals)
        // ETH: $3,200
        prices[0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2] = 3200e18; // WETH
        // USDC: $1
        prices[0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48] = 1e18; // USDC
    }

    /**
     * @dev Set price for a token (in Wei with 18 decimals)
     */
    function setPrice(address token, uint256 price) external {
        require(msg.sender == owner, "Only owner");
        prices[token] = price;
        emit PriceUpdated(token, price);
    }

    /**
     * @dev Get price of a token
     */
    function getPrice(address token) external view returns (uint256) {
        uint256 price = prices[token];
        require(price > 0, "Price not set");
        return price;
    }

    /**
     * @dev Get prices for multiple tokens
     */
    function getPrices(address[] calldata tokens) external view returns (uint256[] memory) {
        uint256[] memory tokenPrices = new uint256[](tokens.length);
        for (uint256 i = 0; i < tokens.length; i++) {
            tokenPrices[i] = prices[tokens[i]];
        }
        return tokenPrices;
    }
}
