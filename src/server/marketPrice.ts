import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import {
  getBatchTokenPriceTool,
  GetBatchTokenPriceToolParamType,
  GetCandlesticksHistoryParamType,
  getCandlesticksHistoryTool,
  GetCandlesticksParamType,
  getCandlesticksTool,
  GetPriceParamType,
  getPriceTool,
  GetSupportedChainParamType,
  getSupportedChainTool,
  GetTradesParamType,
  getTradesTool,
} from "../tools/marketPrice";

export const createMarketPriceServer = () => {
  const server = new McpServer({
    name: "OKX_MARKET_PRICE_SERVER",
    version: "0.0.1",
  });

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
    getSupportedChainTool.name,
    getSupportedChainTool.description,
    getSupportedChainTool.parameters,
    async (args: GetSupportedChainParamType) => {
      const data = await getSupportedChainTool.handler(args);

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

  return server;
};
