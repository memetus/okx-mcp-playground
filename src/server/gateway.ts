import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import {
  BroadcastTransactionsParamType,
  broadcastTransactionsTool,
  GetGasLimitParamType,
  getGasLimitTool,
  GetGasPriceParamType,
  getGasPriceTool,
  GetSupportedChainParamType,
  getSupportedChainTool,
  GetTransactionOrdersParamType,
  getTransactionOrdersTool,
  SimulateTransactionsParamType,
  simulateTransactionsTool,
} from "../tools/gateway";

export const createGatewayServer = () => {
  const server = new McpServer({
    name: "OKX_GATEWAY_SERVER",
    version: "0.0.1",
  });

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

  return server;
};
