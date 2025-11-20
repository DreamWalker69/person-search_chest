# Person CRUD MCP Server

Model Context Protocol (MCP) server for managing Person database operations.

## Features

- **Create Person**: Add new person records with validation
- **Read Person**: Get person by ID or search by name
- **Update Person**: Modify existing person data
- **Delete Person**: Remove person records
- **List All**: Retrieve all persons from database

## Installation

```bash
cd mcp-server
npm install
npm run build
```

## Configuration

Add to your Claude Desktop config file:

### Windows
`%APPDATA%\Claude\claude_desktop_config.json`

### macOS
`~/Library/Application Support/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "person-crud": {
      "command": "node",
      "args": ["C:\\Users\\Chester\\Documents\\Week 3-5\\person-search_chest\\mcp-server\\dist\\index.js"],
      "env": {
        "POSTGRES_PRISMA_URL": "your_database_url_here",
        "POSTGRES_URL_NON_POOLING": "your_direct_database_url_here"
      }
    }
  }
}
```

## Available Tools

### create_person
Create a new person record.
- `name`: Full name (min 2 characters)
- `email`: Valid email (must be unique)
- `phoneNumber`: Format 04XXXXXXXX

### get_person
Retrieve person by UUID.
- `id`: Person UUID

### search_persons
Search persons by name (case-insensitive).
- `query`: Search string

### list_all_persons
Get all persons from database.

### update_person
Update person fields.
- `id`: Person UUID
- `name`: New name (optional)
- `email`: New email (optional)
- `phoneNumber`: New phone number (optional)

### delete_person
Remove person from database.
- `id`: Person UUID

## Usage with Claude Desktop

After configuration, restart Claude Desktop. You can then ask:
- "Create a new person with name John Doe, email john@example.com, phone 0412345678"
- "Search for persons named Alice"
- "List all persons"
- "Update person with id [uuid] to have email newemail@example.com"
- "Delete person with id [uuid]"
