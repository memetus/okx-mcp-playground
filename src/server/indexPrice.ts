import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import {
  GetHistoricalIndexPriceParamType,
  getHistoricalIndexPriceTool,
  getSupportedChainTool,
  GetTokenIndexPriceParamType,
  getTokenIndexPriceTool,
  GetSupportedChainParamType,
} from "../tools/indexPrice";

export const createIndexPriceServer = () => {
  const server = new McpServer({
    name: "OKX_INDEX_PRICE_SERVER",
    version: "0.0.1",
  });

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

  return server;
};
