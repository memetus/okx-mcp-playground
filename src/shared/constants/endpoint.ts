import {
  BalanceRouterKeys,
  GatewayRouterKeys,
  IndexRouterKeys,
  MarketRouterKeys,
  TradeRouterKeys,
  TransactionRouterKeys,
} from "../types/endpoint";

export const BASE_ENDPOINT: string = "https://web3.okx.com";

export const TRADE_ROUTER: Record<TradeRouterKeys, string> = {
  GET_SUPPORTED_CHAIN: "/api/v5/dex/aggregator/supported/chain",
  GET_ALL_TOKENS: "/api/v5/dex/aggregator/all-tokens",
  GET_LIQUIDITY_SOURCES: "/api/v5/dex/aggregator/get-liquidity",
  APPROVE_TRANSACTIONS: "/api/v5/dex/aggregator/approve-transaction",
  GET_QUOTES: "/api/v5/dex/aggregator/quote",
  GET_SWAP_INSTRUCTIONS: "/api/v5/dex/aggregator/swap-instruction",
  EXECUTE_SWAP: "/api/v5/dex/aggregator/swap",
  GET_TRANSACTION_STATUS: "/api/v5/dex/aggregator/history",
};

export const GATEWAY_ROUTER: Record<GatewayRouterKeys, string> = {
  GET_SUPPORTED_CHAIN: "/api/v5/dex/pre-transaction/supported/chain",
  GET_GAS_PRICE: "/api/v5/dex/pre-transaction/gas-price",
  GET_GAS_LIMIT: "/api/v5/dex/pre-transaction/gas-limit",
  SIMULATE_TRANSACTIONS: "/api/v5/dex/pre-transaction/simulate",
  BRODCAST_TRANSACTIONS: "/api/v5/dex/pre-transaction/broadcast-transaction",
  GET_TRANSACTION_ORDER: "/api/v5/dex/post-transaction/orders",
};

export const MARKET_ROUTER: Record<MarketRouterKeys, string> = {
  GET_SUPPORTED_CHAIN: "/api/v5/dex/market/supported/chain",
  GET_PRICE: "/api/v5/dex/market/price",
  GET_BATCH_TOKEN_PRICE: "api/v5/dex/market/price-info",
  GET_TRADES: "/api/v5/dex/market/trades",
  GET_CANDLESTICKS: "/api/v5/dex/market/candles",
  GET_CANDLESTICKS_HISTORY: "/api/v5/dex/market/historical-candles",
};

export const INDEX_ROUTER: Record<IndexRouterKeys, string> = {
  GET_SUPPORTED_CHAIN: "/api/v5/dex/balance/supported/chain",
  GET_TOKEN_INDEX_PRICE: "/api/v5/dex/index/current-price",
  GET_HISTORICAL_INDEX_PRICE: "/api/v5/dex/index/historical-price",
};

export const BALANCE_ROUTER: Record<BalanceRouterKeys, string> = {
  GET_SUPPORTED_CHAIN: "/api/v5/dex/balance/supported/chain",
  GET_TOTAL_VALUE: "/api/v5/dex/balance/total-value-by-address",
  GET_TOTAL_TOKEN_BALANCES: "/api/v5/dex/balance/all-token-balances-by-address",
  GET_SPECIFIC_TOKEN_BALANCE: "/api/v5/dex/balance/token-balances-by-address",
};

export const TRANSACTION_ROUTER: Record<TransactionRouterKeys, string> = {
  GET_SUPPORTED_CHAIN: "/api/v5/dex/balance/supported/chain",
  GET_HISTORY_BY_ADDRESS: "/api/v5/dex/balance/supported/chain",
  GET_SPECIFIC_TRANSACTION:
    "/api/v5/dex/post-transaction/transaction-detail-by-txhash",
};
