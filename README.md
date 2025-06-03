# Name.com MCP Server

name-mcp is a Model Context Protocol (MCP) server implemented in TypeScript. It interfaces with name.com's Domain Availability API, allowing AI agents and applications to check the availability of multiple domain names with price through standardized tools.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Environment Variables](#environment-variables)
- [MCP Configuration](#mcp-configuration)
- [License](#license)
- [Author](#author)

---

## Overview

This project utilizes the [@modelcontextprotocol/sdk](https://github.com/modelcontextprotocol/typescript-sdk) to create an MCP-compliant server. MCP is an open standard that enables seamless integration between AI models and external tools or data sources.([1](https://modelcontextprotocol.io/introduction))

By exposing name.com's domain availability checks as MCP tools, this server allows AI agents to programmatically verify domain availability.

---

## Features

- Check the availability of multiple domains upto 50 at once.
- Gives purchase prices and renewal prices for each domain which are available for purchase.
- Implements MCP tools for integration with AI agents.

---

## Environment Variables

Add below environment variables to your mcpserver's configuration:

- **NAME_API_BASE_URL**: Base URL for Name.com's API. `https://api.dev.name.com` or `https://api.name.com`.
- **NAME_USERNAME**: Your Username for API.
- **NAME_API_TOKEN**: Your API Token.

---

## MCP Configuration

To integrate this server with an MCP client, include the following configuration in your MCP JSON:

```json
{
  "mcpServers": {
    "Name": {
      "command": "npx",
      "args": ["-y", "Name-mcp"],
      "env": {
        "NAME_API_BASE_URL": "<Name-api-base-url>",
        "NAME_USERNAME": "<Name-api-key>",
        "NAME_API_TOKEN": "<Name-api-secret>"
      }
    }
  }
}
```

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

**Harshal Katakiya**

- GitHub: [@Harshalkatakiya](https://github.com/Harshalkatakiya)
- Email: [katakiyaharshl001@gmail.com](mailto:katakiyaharshl001@gmail.com)
- LinkedIn: [@harshal-katakiya](https://www.linkedin.com/in/harshal-katakiya)
- NPM: [@harshalkatakiya](https://www.npmjs.com/~harshalkatakiya)

---
