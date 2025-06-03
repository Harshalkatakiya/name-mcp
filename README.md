# Name MCP Server

Name-mcp is a Model Context Protocol (MCP) server implemented in TypeScript. It interfaces with Name's Domain Availability API, allowing AI agents and applications to check the availability of single or multiple domain names through standardized tools.

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

By exposing Name's domain availability checks as MCP tools, this server allows AI agents to programmatically verify domain availability.

---

## Features

- Check the availability of a single or multiple domains at once.
- Supports both `FAST` and `FULL` check types.
- Optionally include domains available for transfer.
- Implements MCP tools for integration with AI agents.

---

## Environment Variables

Add below environment variables to your mcpserver's configuration:

- **Name_API_BASE_URL**: Base URL for Name's API. `https://api.ote-Name.com` or `https://api.Name.com`.
- **Name_API_KEY**: Your Name API key.
- **Name_API_SECRET**: Your Name API secret.

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
        "Name_API_BASE_URL": "<Name-api-base-url>",
        "Name_API_KEY": "<Name-api-key>",
        "Name_API_SECRET": "<Name-api-secret>"
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
