import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import {
  GetHistoryByAddressParamType,
  getHistoryByAddressTool,
  GetSpecificTransactionParamType,
  getSpecificTransactionTool,
  GetSupportedChainParamType,
  getSupportedChainTool,
} from "../tools/transaction";

export const createTransactionServer = () => {
  const server = new McpServer({
    name: "OKX_TRANSACTION_SERVER",
    version: "0.0.1",
  });

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

  return server;
};
