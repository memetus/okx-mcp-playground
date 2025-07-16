import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import {
  GetSpecificTokenBalanceParamType,
  getSpecificTokenBalanceTool,
  GetSupportedChainParamType,
  getSupportedChainTool,
  GetTotalTokenBalancesParamType,
  getTotalTokenBalancesTool,
  GetTotalValueParamType,
  getTotalValueTool,
} from "../tools/balance";

export const createBalanceServer = () => {
  const server = new McpServer({
    name: "OKX_BALANCE_SERVER",
    version: "0.0.1",
  });

  server.tool(
    getSpecificTokenBalanceTool.name,
    getSpecificTokenBalanceTool.description,
    getSpecificTokenBalanceTool.parameters,
    async (args: GetSpecificTokenBalanceParamType, extra) => {
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

  return server;
};
