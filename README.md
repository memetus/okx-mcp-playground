# OKX MCP Playground

This repository contains a Model Context Protocol (MCP) server that provides Claude with access to various blockchain data and market price data via the OKX API. The server enables Claude to perform operations like retrieve assets prices, transaction data, account history data and trade instruction data.

## Overview

The MCP server exposes the following tools to Claude:

### Balance Operations

- `get_supported_chain`: Retrieve information on chains supported by the DEX Balance endpoint.
- `get_specific_token_balance`: Retrieve the list of token balances for an address across multiple chains or specified chains.
- `get_total_token_balances`: Retrieve the list of token balances for an address across multiple chains or specified chains.
- `get_total_value`: Retrieve the total balance of all tokens and DeFi assets under an account.

### Gateway Operations

- `get_supported_chain`: Retrieve information on chains supported by Onchain gateway API
- `broadcast_transactions`: Broadcast transactions to the specified blockchain.
- `get_gas_limit`: Retrieve estimated Gas Limit consumption through pre-execution of transaction information.
- `get_gas_price`: Dynamically obtain estimated gas prices for various chains.
- `get_transaction_orders`: Get the list of orders sent from transaction broadcasting API. This supports querying transactions sorted in descending order by time.
- `simulate_transactions`: Simulate a blockchain transaction before executing it to see the expected outcomes and potential risks.

### Index Price Operation

- `get_supported_chain`: Get the list of supported chains for the index.
- `get_historical_index_price`: Query historical prices for a specific token.
- `get_token_index_price`: The index price refers to a currency price calculated from the prices of multiple third-party data sources.

### Market Price Operation

- `get_supported_chain`: Get the list of supported chains for the market.
- `get_trades`: Retrieve the recent transactions of a token.
- `get_batch_token_price`: Retrieve the latest price for multiple tokens.
- `get_candlesticks_history`: Retrieve historical candlestick charts.
- `get_candlesticks`: Retrieve the candlestick charts.
- `get_price`: Retrieve the latest price of a token.

### Trade Operation

- `get_supported_chains`: Retrieve information on chains supported for single-chain exchanges. The request returns supported target chains for cross-chain transactions.
- `approve_transactions`: According to the ERC-20 standard, we need to make sure that the OKX router has permission to spend funds with the user's wallet before making a transaction. This API will generate the relevant data for calling the contract.
- `execute_swap`: Generate the data to call the OKX DEX router to execute a swap.
- `get_liquidity_sources`: Get a list of liquidity that are available for swap in the OKX aggregation protocol.
- `get_quotes`: Get the best quote for a swap through OKX DEX.
- `get_swap_instructions`: Obtain transaction instruction data for redemption or custom assembly in Solana.
- `get_tokens`: It fetches a list of tokens. This interface returns a list of tokens that belong to major platforms or are deemed significant enough by OKX. However, you can still quote and swap other tokens outside of this list on OKX DEX.
- `get_transaction_status`: Get the final transaction status of a single-chain swap using txhash

### Transaction Operation

- `get_supported_chain`:Retrieve information on chains supported by Transaction history API.
- `get_history_by_address`: Query the transaction history under the address dimension, sorted in descending chronological order.
- `get_specific_transaction`: Retrieve details of a transaction based on txHash.

## Prerequisites

- Node.js (v16 or higher)
- A OKX API key (get one at [https://web3.okx.com/ro/build/dev-portal](https://web3.okx.com/ro/build/dev-portal))
- Claude Desktop application

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/memetus/okx-mcp-playground
   cd okx-mcp-playground
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   npm i
   ```

3. Build the project:

   ```bash
   npm run build
   ```

4. Build the project with Smithery:
   ```bash
   npm run build:smithery
   ```

## Configuration

### Configure Claude Desktop

To configure Claude Desktop to use this MCP server:

1. Open Claude Desktop
2. Navigate to the Claude Desktop configuration file:

   - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
   - Linux: `~/.config/Claude/claude_desktop_config.json`

3. Add the MCP server configuration:

```json
{
  "mcpServers": {
    "okx-mcp-playground": {
      "command": "node",
      "args": ["your project path/dist/index.js"],
      "env": {
        "OKX_API_KEY": "your-okx-api-key",
        "OKX_API_SECRET": "your-okx-api-secret",
        "OKX_PASSPHRASE": "your-okx-api-passphrase",
        "OKX_PROJECT_ID": "your-okx-project-id"
      }
    }
  }
}
```

### Environment Variables

```env
OKX_API_KEY=""
OKX_API_SECRET=""
OKX_PASSPHRASE=""
OKX_PROJECT_ID=""
```

### Running Locally

```bash
node dist/index.js
```

## License

MIT
