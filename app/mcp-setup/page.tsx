import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Settings, Terminal, CheckCircle, Copy, Database } from 'lucide-react';

export default function McpSetupPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">MCP Server Setup Guide</h1>
        <p className="text-muted-foreground text-lg">
          Step-by-step instructions to configure the Person CRUD MCP server with Claude Desktop
        </p>
      </div>

      {/* Introduction */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            What is MCP?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-4">
            The <strong>Model Context Protocol (MCP)</strong> is an open standard that enables AI models like Claude
            to securely connect with external data sources and tools. Our Person CRUD MCP server allows Claude Desktop
            to perform database operations directly through natural language.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Create Records</Badge>
            <Badge variant="secondary">Read Data</Badge>
            <Badge variant="secondary">Update Info</Badge>
            <Badge variant="secondary">Delete Entries</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Prerequisites */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Prerequisites</CardTitle>
          <CardDescription>Before you begin, ensure you have:</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>Claude Desktop App</strong> installed on your computer</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>Node.js</strong> version 18 or higher</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>PostgreSQL database</strong> connection string (Neon, Vercel Postgres, etc.)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>Git</strong> for cloning the repository</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Step 1: Clone Repository */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
              1
            </span>
            Clone the Repository
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-3">Clone the Person Search repository to your local machine:</p>
          <div className="bg-muted p-4 rounded-lg font-mono text-sm mb-3 relative group">
            <code>git clone https://github.com/DreamWalker69/person-search_chest.git</code>
            <Copy className="absolute top-4 right-4 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
          <div className="bg-muted p-4 rounded-lg font-mono text-sm relative group">
            <code>cd person-search_chest/mcp-server</code>
            <Copy className="absolute top-4 right-4 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
        </CardContent>
      </Card>

      {/* Step 2: Install Dependencies */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
              2
            </span>
            Install Dependencies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-3">Install required npm packages:</p>
          <div className="bg-muted p-4 rounded-lg font-mono text-sm relative group">
            <code>npm install</code>
            <Copy className="absolute top-4 right-4 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            This will install the MCP SDK, Prisma Client, and other dependencies, then automatically build the server.
          </p>
        </CardContent>
      </Card>

      {/* Step 3: Configure Database */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
              3
            </span>
            <Database className="h-5 w-5" />
            Configure Database Connection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-3">Create a <code className="bg-muted px-2 py-1 rounded">.env</code> file in the mcp-server directory:</p>
          <div className="bg-muted p-4 rounded-lg font-mono text-sm mb-3 overflow-x-auto">
            <pre>{`POSTGRES_PRISMA_URL="your_postgres_connection_string"
POSTGRES_URL_NON_POOLING="your_direct_connection_string"`}</pre>
          </div>
          <p className="text-xs text-muted-foreground">
            <strong>Note:</strong> Get your database credentials from Neon, Vercel Postgres, or your PostgreSQL provider.
          </p>
        </CardContent>
      </Card>

      {/* Step 4: Build Server */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
              4
            </span>
            <Terminal className="h-5 w-5" />
            Build the MCP Server
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-3">Compile the TypeScript code:</p>
          <div className="bg-muted p-4 rounded-lg font-mono text-sm relative group">
            <code>npm run build</code>
            <Copy className="absolute top-4 right-4 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            This creates the <code className="bg-muted px-1 rounded">dist/index.js</code> file that Claude Desktop will execute.
          </p>
        </CardContent>
      </Card>

      {/* Step 5: Configure Claude Desktop */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
              5
            </span>
            Configure Claude Desktop
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-3">
            Open the Claude Desktop configuration file:
          </p>
          
          <div className="mb-4">
            <p className="text-sm font-semibold mb-2">📁 Windows:</p>
            <div className="bg-muted p-3 rounded-lg font-mono text-xs">
              %APPDATA%\Claude\claude_desktop_config.json
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm font-semibold mb-2">📁 macOS:</p>
            <div className="bg-muted p-3 rounded-lg font-mono text-xs">
              ~/Library/Application Support/Claude/claude_desktop_config.json
            </div>
          </div>

          <p className="text-sm mb-3 mt-4">Add this configuration (update the path to match your system):</p>
          <div className="bg-muted p-4 rounded-lg font-mono text-xs overflow-x-auto mb-3">
            <pre>{`{
  "mcpServers": {
    "person-crud": {
      "command": "node",
      "args": [
        "C:\\\\Users\\\\YourUsername\\\\path\\\\to\\\\person-search_chest\\\\mcp-server\\\\dist\\\\index.js"
      ],
      "env": {
        "POSTGRES_PRISMA_URL": "your_postgres_connection_string",
        "POSTGRES_URL_NON_POOLING": "your_direct_connection_string"
      }
    }
  }
}`}</pre>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <p className="text-sm font-semibold mb-1">⚠️ Important:</p>
            <ul className="text-xs space-y-1 ml-4 list-disc">
              <li>Use double backslashes (\\\\) in Windows paths</li>
              <li>Replace the path with your actual file location</li>
              <li>Use your real database connection strings</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Step 6: Restart Claude */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
              6
            </span>
            Restart Claude Desktop
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-3">
            Completely quit and restart Claude Desktop for the changes to take effect.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <p className="text-sm font-semibold mb-2">✅ Verification:</p>
            <p className="text-xs">
              After restarting, you should see a small hammer/tool icon (🔨) next to the message input in Claude Desktop,
              indicating that MCP tools are available.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Testing */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Test Your Setup</CardTitle>
          <CardDescription>Try these example commands in Claude Desktop:</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="bg-muted p-3 rounded-lg">
              <p className="text-sm font-mono">&quot;Create a new person with name Alice Smith, email alice@example.com, phone 0412345678&quot;</p>
            </div>
            <div className="bg-muted p-3 rounded-lg">
              <p className="text-sm font-mono">&quot;List all persons in the database&quot;</p>
            </div>
            <div className="bg-muted p-3 rounded-lg">
              <p className="text-sm font-mono">&quot;Search for persons named Alice&quot;</p>
            </div>
            <div className="bg-muted p-3 rounded-lg">
              <p className="text-sm font-mono">&quot;Update person [id] to have email newemail@example.com&quot;</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card>
        <CardHeader>
          <CardTitle>Troubleshooting</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold mb-1">🔴 Tools not appearing in Claude Desktop?</p>
              <p className="text-muted-foreground text-xs">
                Check the config file path is correct and Claude Desktop has been fully restarted.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">🔴 Database connection errors?</p>
              <p className="text-muted-foreground text-xs">
                Verify your database credentials in the env variables and ensure the database is accessible.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">🔴 Build errors?</p>
              <p className="text-muted-foreground text-xs">
                Make sure you&apos;re using Node.js 18+ and all dependencies are installed.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
