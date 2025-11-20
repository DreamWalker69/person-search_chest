import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Layers, Server, Database, Palette, Shield, Zap } from 'lucide-react'

function ProjectOverview() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Project Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Person Search is a full-stack web application demonstrating modern web development practices 
          with complete CRUD functionality and Model Context Protocol (MCP) integration. This application showcases 
          enterprise-level architecture using Next.js 15, React 19, and a robust database layer powered by Prisma ORM.
        </p>
        <p className="mb-4">
          The application provides a comprehensive person management system with real-time search, 
          create, update, and delete operations. All data is persisted in a PostgreSQL database, and can be 
          accessed both through the web interface and via Claude Desktop using our custom MCP server.
        </p>
        <p>
          Built with a mobile-first, responsive design approach and featuring dark mode support, 
          this app ensures an optimal user experience across all devices and preferences. The MCP integration
          allows AI assistants to perform database operations through natural language commands.
        </p>
      </CardContent>
    </Card>
  )
}

function AppArchitecture() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Layers className="h-5 w-5" />
          Application Architecture
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Server className="h-5 w-5 text-primary" />
            Frontend Layer
          </h3>
          <ul className="space-y-2 ml-7 text-muted-foreground">
            <li>• <strong>Next.js 15 App Router:</strong> Server-side rendering and routing</li>
            <li>• <strong>React 19:</strong> UI components with latest concurrent features</li>
            <li>• <strong>TypeScript:</strong> Type-safe development with compile-time checks</li>
            <li>• <strong>Tailwind CSS:</strong> Utility-first styling with responsive design</li>
            <li>• <strong>shadcn/ui:</strong> Accessible, customizable component library</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            Backend Layer
          </h3>
          <ul className="space-y-2 ml-7 text-muted-foreground">
            <li>• <strong>Next.js Server Actions:</strong> Type-safe server-side mutations</li>
            <li>• <strong>React Server Components:</strong> Optimized data fetching</li>
            <li>• <strong>API Routes:</strong> RESTful endpoints for external integrations</li>
            <li>• <strong>Server-side Validation:</strong> Zod schema validation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            Data Layer
          </h3>
          <ul className="space-y-2 ml-7 text-muted-foreground">
            <li>• <strong>Prisma ORM:</strong> Type-safe database operations</li>
            <li>• <strong>PostgreSQL Database:</strong> Production-ready relational database</li>
            <li>• <strong>Automated Migrations:</strong> Schema versioning and updates</li>
            <li>• <strong>Query Caching:</strong> React cache for optimized reads</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            MCP Integration Layer
          </h3>
          <ul className="space-y-2 ml-7 text-muted-foreground">
            <li>• <strong>Model Context Protocol:</strong> AI assistant integration</li>
            <li>• <strong>MCP Server:</strong> Custom CRUD tools for Claude Desktop</li>
            <li>• <strong>Natural Language Operations:</strong> Database operations via conversation</li>
            <li>• <strong>Real-time Validation:</strong> Zod schemas ensure data integrity</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Authentication Layer
          </h3>
          <ul className="space-y-2 ml-7 text-muted-foreground">
            <li>• <strong>Auth.js (NextAuth v5):</strong> Modern authentication library</li>
            <li>• <strong>Google OAuth 2.0:</strong> Secure, passwordless sign-in</li>
            <li>• <strong>Database Sessions:</strong> Persistent session management</li>
            <li>• <strong>Protected Routes:</strong> Middleware-enforced access control</li>
            <li>• <strong>CSRF Protection:</strong> Built-in security token validation</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

function TechnologyStack() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code2 className="h-5 w-5" />
          Technology Stack
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Server className="h-4 w-4 text-primary" />
              Core Framework
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Next.js</span>
                <code className="bg-muted px-2 py-0.5 rounded text-xs">v15.0.0</code>
              </li>
              <li className="flex justify-between">
                <span>React</span>
                <code className="bg-muted px-2 py-0.5 rounded text-xs">v19.0.0</code>
              </li>
              <li className="flex justify-between">
                <span>TypeScript</span>
                <code className="bg-muted px-2 py-0.5 rounded text-xs">v5.x</code>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Database className="h-4 w-4 text-primary" />
              Database & ORM
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Prisma</span>
                <code className="bg-muted px-2 py-0.5 rounded text-xs">v5.22.0</code>
              </li>
              <li className="flex justify-between">
                <span>SQLite</span>
                <code className="bg-muted px-2 py-0.5 rounded text-xs">File-based</code>
              </li>
              <li className="flex justify-between">
                <span>Prisma Client</span>
                <code className="bg-muted px-2 py-0.5 rounded text-xs">Auto-generated</code>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Palette className="h-4 w-4 text-primary" />
              UI & Styling
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Tailwind CSS</span>
                <code className="bg-muted px-2 py-0.5 rounded text-xs">v3.4.1</code>
              </li>
              <li className="flex justify-between">
                <span>shadcn/ui</span>
                <code className="bg-muted px-2 py-0.5 rounded text-xs">Components</code>
              </li>
              <li className="flex justify-between">
                <span>Radix UI</span>
                <code className="bg-muted px-2 py-0.5 rounded text-xs">Primitives</code>
              </li>
              <li className="flex justify-between">
                <span>Lucide Icons</span>
                <code className="bg-muted px-2 py-0.5 rounded text-xs">v0.469.0</code>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              Form & Validation
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>React Hook Form</span>
                <code className="bg-muted px-2 py-0.5 rounded text-xs">v7.54.2</code>
              </li>
              <li className="flex justify-between">
                <span>Zod</span>
                <code className="bg-muted px-2 py-0.5 rounded text-xs">v3.24.1</code>
              </li>
              <li className="flex justify-between">
                <span>Hookform Resolvers</span>
                <code className="bg-muted px-2 py-0.5 rounded text-xs">v3.9.1</code>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function KeyFeatures() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Key Features</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <div>
                <strong>Full CRUD Operations</strong>
                <p className="text-sm text-muted-foreground">Create, Read, Update, and Delete person records</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <div>
                <strong>Real-time Search</strong>
                <p className="text-sm text-muted-foreground">Instant search with database queries</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <div>
                <strong>Form Validation</strong>
                <p className="text-sm text-muted-foreground">Client and server-side validation with Zod</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <div>
                <strong>Responsive Design</strong>
                <p className="text-sm text-muted-foreground">Mobile-first approach, works on all devices</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <div>
                <strong>Dark Mode Support</strong>
                <p className="text-sm text-muted-foreground">Theme toggle with system preference detection</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <div>
                <strong>Type Safety</strong>
                <p className="text-sm text-muted-foreground">End-to-end TypeScript with Prisma types</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <div>
                <strong>Accessible UI</strong>
                <p className="text-sm text-muted-foreground">WCAG compliant components from Radix UI</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <div>
                <strong>Database Persistence</strong>
                <p className="text-sm text-muted-foreground">All data stored in PostgreSQL with Prisma ORM</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <div>
                <strong>MCP Integration</strong>
                <p className="text-sm text-muted-foreground">AI-powered operations via Claude Desktop</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function McpArchitecture() {
  return (
    <Card className="mb-8 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          Model Context Protocol (MCP) Architecture
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-muted-foreground">
          This application features a custom MCP server that enables Claude Desktop to perform database operations
          through natural language commands. The MCP integration demonstrates how AI assistants can interact with
          external systems securely and efficiently.
        </p>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">MCP Server Components</h4>
            <ul className="space-y-2 ml-7 text-muted-foreground text-sm">
              <li>• <strong>StdIO Transport:</strong> Communication channel between Claude and the server</li>
              <li>• <strong>Tool Definitions:</strong> Six CRUD operations exposed as callable tools</li>
              <li>• <strong>Prisma Integration:</strong> Direct database access with type safety</li>
              <li>• <strong>Validation Layer:</strong> Zod schemas ensure data integrity</li>
              <li>• <strong>Error Handling:</strong> Comprehensive error messages for debugging</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Available MCP Tools</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-muted p-3 rounded-lg">
                <strong className="text-sm">create_person</strong>
                <p className="text-xs text-muted-foreground mt-1">Add new person with validation</p>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <strong className="text-sm">get_person</strong>
                <p className="text-xs text-muted-foreground mt-1">Retrieve person by UUID</p>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <strong className="text-sm">search_persons</strong>
                <p className="text-xs text-muted-foreground mt-1">Search by name pattern</p>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <strong className="text-sm">list_all_persons</strong>
                <p className="text-xs text-muted-foreground mt-1">Get all database records</p>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <strong className="text-sm">update_person</strong>
                <p className="text-xs text-muted-foreground mt-1">Modify existing records</p>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <strong className="text-sm">delete_person</strong>
                <p className="text-xs text-muted-foreground mt-1">Remove person from database</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">How It Works</h4>
            <ol className="space-y-2 ml-7 text-muted-foreground text-sm list-decimal">
              <li>User asks Claude Desktop to perform a database operation in natural language</li>
              <li>Claude identifies the appropriate MCP tool based on the request intent</li>
              <li>MCP server validates the input parameters using Zod schemas</li>
              <li>Prisma Client executes the database operation with type safety</li>
              <li>Results are formatted and returned to Claude as JSON</li>
              <li>Claude presents the results in a user-friendly format</li>
            </ol>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm font-semibold mb-2">💡 Try It Yourself</p>
            <p className="text-xs text-muted-foreground mb-3">
              Follow our setup guide to configure the MCP server with Claude Desktop and experience
              AI-powered database operations firsthand.
            </p>
            <Button size="sm" asChild>
              <Link href="/mcp-setup">View Setup Guide</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-3xl font-bold mb-8">About Person Search</h1>
        
        <ProjectOverview />
        <AppArchitecture />
        <McpArchitecture />
        <TechnologyStack />
        <KeyFeatures />

        <div className="flex flex-wrap gap-4">
          <Button asChild variant="outline">
            <Link href="/">
              ← Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/mcp-setup">
              MCP Setup Guide
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/mcp-demo">
              MCP Demo
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/database">
              Database Structure
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/github">
              GitHub Repository
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

