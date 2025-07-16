import dotenv from "dotenv";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { combineMcpServer } from "./server";

dotenv.config();

const server = combineMcpServer();

async function main() {
  const transport: StdioServerTransport = new StdioServerTransport();

  await server.connect(transport);

  console.log("OKX MCP Server running on STDIO.");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
