import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { checkMultipleDomains } from "./services/api";

const server = new McpServer({
  name: "name-mcp",
  version: "1.0.0",
  capabilities: {
    tools: {},
  },
});

server.tool(
  "check-multiple-domains-availability",
  "Check the availability of multiple domains",
  {
    domainNames: z.array(z.string().min(2)).min(1).max(50).describe("List of domains to check (e.g. ['example.com', 'test.net'])"),
  },
  {
    title: "Check Multiple Domains Availability",
    openWorldHint: true,
  },
  async ({ domainNames }) => {
    try {
      const response = await checkMultipleDomains(domainNames);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(response, null, 2),
          },
        ],
      };
    } catch (error) {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: `Error: ${(error as Error).message || "Unknown error occurred"}`,
          },
        ],
      };
    }
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
