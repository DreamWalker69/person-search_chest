import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Layers, Server, Database, Palette, Shield } from 'lucide-react'

function ProjectOverview() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Project Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Person Search is a full-stack web application demonstrating modern web development practices 
          with complete CRUD functionality. This application showcases enterprise-level architecture 
          using Next.js 15, React 19, and a robust database layer powered by Prisma ORM.
        </p>
        <p className="mb-4">
          The application provides a comprehensive person management system with real-time search, 
          create, update, and delete operations. All data is persisted in a SQLite database, making 
          it a complete, production-ready demonstration of modern web technologies.
        </p>
        <p>
          Built with a mobile-first, responsive design approach and featuring dark mode support, 
          this app ensures an optimal user experience across all devices and preferences.
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
            <li>• <strong>SQLite Database:</strong> File-based relational database</li>
            <li>• <strong>Automated Migrations:</strong> Schema versioning and updates</li>
            <li>• <strong>Query Caching:</strong> React cache for optimized reads</li>
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
                <p className="text-sm text-muted-foreground">All data stored in SQLite with Prisma ORM</p>
              </div>
            </div>
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
        <TechnologyStack />
        <KeyFeatures />

        <div className="flex flex-wrap gap-4">
          <Button asChild variant="outline">
            <Link href="/">
              ← Back to Home
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

