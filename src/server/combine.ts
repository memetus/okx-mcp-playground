import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import {
  GetSpecificTokenBalanceParamType,
  getSpecificTokenBalanceTool,
  GetTotalTokenBalancesParamType,
  getTotalTokenBalancesTool,
  GetTotalValueParamType,
  getTotalValueTool,
} from "../tools/balance";
import {
  BroadcastTransactionsParamType,
  broadcastTransactionsTool,
  GetGasLimitParamType,
  getGasLimitTool,
  GetGasPriceParamType,
  getGasPriceTool,
  GetTransactionOrdersParamType,
  getTransactionOrdersTool,
  SimulateTransactionsParamType,
  simulateTransactionsTool,
} from "../tools/gateway";
import {
  GetHistoricalIndexPriceParamType,
  getHistoricalIndexPriceTool,
  GetTokenIndexPriceParamType,
  getTokenIndexPriceTool,
} from "../tools/indexPrice";
import {
  getBatchTokenPriceTool,
  GetBatchTokenPriceToolParamType,
  GetCandlesticksHistoryParamType,
  getCandlesticksHistoryTool,
  GetCandlesticksParamType,
  getCandlesticksTool,
  GetPriceParamType,
  getPriceTool,
  GetTradesParamType,
  getTradesTool,
} from "../tools/marketPrice";
import {
  ApproveTransactionsParamType,
  approveTransactionsTool,
  ExecuteSwapParamType,
  executeSwapTool,
  GetLiquiditySourcesParamType,
  getLiquiditySourcesTool,
  GetQuotesParamType,
  getQuotesTool,
  getSupportedChainsTool,
  GetSupportedChainsToolParamType,
  GetSwapInstructionsParamType,
  getSwapInstructionsTool,
  GetTokensParamType,
  getTokensTool,
  GetTransactionStatusParamType,
  getTransactionStatusTool,
} from "../tools/trade";
import {
  GetHistoryByAddressParamType,
  getHistoryByAddressTool,
  GetSpecificTransactionParamType,
  getSpecificTransactionTool,
} from "../tools/transaction";

export const combineMcpServer = () => {
  const server = new McpServer({
    name: "OKX_MCP_SERVER",
    version: "0.0.1",
  });

  server.tool(
    getSpecificTokenBalanceTool.name,
    getSpecificTokenBalanceTool.description,
    getSpecificTokenBalanceTool.parameters,
    async (args: GetSpecificTokenBalanceParamType) => {
      const data = await getSpecificTokenBalanceTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    getTotalTokenBalancesTool.name,
    getTotalTokenBalancesTool.description,
    getTotalTokenBalancesTool.parameters,
    async (args: GetTotalTokenBalancesParamType) => {
      const data = await getTotalTokenBalancesTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    getTotalValueTool.name,
    getTotalValueTool.description,
    getTotalValueTool.parameters,
    async (args: GetTotalValueParamType) => {
      const data = await getTotalValueTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    broadcastTransactionsTool.name,
    broadcastTransactionsTool.description,
    broadcastTransactionsTool.parameters,
    async (args: BroadcastTransactionsParamType) => {
      const data = await broadcastTransactionsTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    getGasLimitTool.name,
    getGasLimitTool.description,
    getGasLimitTool.parameters,
    async (args: GetGasLimitParamType) => {
      const data = await getGasLimitTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    getGasPriceTool.name,
    getGasPriceTool.description,
    getGasPriceTool.parameters,
    async (args: GetGasPriceParamType) => {
      const data = await getGasPriceTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    getTransactionOrdersTool.name,
    getTransactionOrdersTool.description,
    getTransactionOrdersTool.parameters,
    async (args: GetTransactionOrdersParamType) => {
      const data = await getTransactionOrdersTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    simulateTransactionsTool.name,
    simulateTransactionsTool.description,
    simulateTransactionsTool.parameters,
    async (args: SimulateTransactionsParamType) => {
      const data = await simulateTransactionsTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    getHistoricalIndexPriceTool.name,
    getHistoricalIndexPriceTool.description,
    getHistoricalIndexPriceTool.parameters,
    async (args: GetHistoricalIndexPriceParamType) => {
      const data = await getHistoricalIndexPriceTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    getTokenIndexPriceTool.name,
    getTokenIndexPriceTool.description,
    getTokenIndexPriceTool.parameters,
    async (args: GetTokenIndexPriceParamType) => {
      const data = await getTokenIndexPriceTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    getBatchTokenPriceTool.name,
    getBatchTokenPriceTool.description,
    getBatchTokenPriceTool.parameters,
    async (args: GetBatchTokenPriceToolParamType) => {
      const data = await getBatchTokenPriceTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    getCandlesticksHistoryTool.name,
    getCandlesticksHistoryTool.description,
    getCandlesticksHistoryTool.parameters,
    async (args: GetCandlesticksHistoryParamType) => {
      const data = await getCandlesticksHistoryTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    getCandlesticksTool.name,
    getCandlesticksTool.description,
    getCandlesticksTool.parameters,
    async (args: GetCandlesticksParamType) => {
      const data = await getCandlesticksTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    getPriceTool.name,
    getPriceTool.description,
    getPriceTool.parameters,
    async (args: GetPriceParamType) => {
      const data = await getPriceTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    getTradesTool.name,
    getTradesTool.description,
    getTradesTool.parameters,
    async (args: GetTradesParamType) => {
      const data = await getTradesTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    approveTransactionsTool.name,
    approveTransactionsTool.description,
    approveTransactionsTool.parameters,
    async (args: ApproveTransactionsParamType) => {
      const data = await approveTransactionsTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    executeSwapTool.name,
    executeSwapTool.description,
    executeSwapTool.parameters,
    async (args: ExecuteSwapParamType) => {
      const data = await executeSwapTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    getLiquiditySourcesTool.name,
    getLiquiditySourcesTool.description,
    getLiquiditySourcesTool.parameters,
    async (args: GetLiquiditySourcesParamType) => {
      const data = await getLiquiditySourcesTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    getQuotesTool.name,
    getQuotesTool.description,
    getQuotesTool.parameters,
    async (args: GetQuotesParamType) => {
      const data = await getQuotesTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    getSwapInstructionsTool.name,
    getSwapInstructionsTool.description,
    getSwapInstructionsTool.parameters,
    async (args: GetSwapInstructionsParamType) => {
      const data = await getSwapInstructionsTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    getTokensTool.name,
    getTokensTool.description,
    getTokensTool.parameters,
    async (args: GetTokensParamType) => {
      const data = await getTokensTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    getTransactionStatusTool.name,
    getTransactionStatusTool.description,
    getTransactionStatusTool.parameters,
    async (args: GetTransactionStatusParamType) => {
      const data = await getTransactionStatusTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    getHistoryByAddressTool.name,
    getHistoryByAddressTool.description,
    getHistoryByAddressTool.parameters,
    async (args: GetHistoryByAddressParamType) => {
      const data = await getHistoryByAddressTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    getSpecificTransactionTool.name,
    getSpecificTransactionTool.description,
    getSpecificTransactionTool.parameters,
    async (args: GetSpecificTransactionParamType) => {
      const data = await getSpecificTransactionTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );

  server.tool(
    getSupportedChainsTool.name,
    getSupportedChainsTool.description,
    getSupportedChainsTool.parameters,
    async (args: GetSupportedChainsToolParamType) => {
      const data = await getSupportedChainsTool.handler(args);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data),
          },
        ],
      };
    }
  );
  return server;
};
