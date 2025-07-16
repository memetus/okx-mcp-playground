import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
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

export const createTradeServer = () => {
  const server = new McpServer({
    name: "OKX_TRADE_SERVER",
    version: "0.0.1",
  });

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

  return server;
};
