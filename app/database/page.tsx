import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, Table, Key, FileCode } from 'lucide-react'

export default function DatabasePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Database className="h-10 w-10" />
          <h1 className="text-3xl font-bold">Database Structure</h1>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCode className="h-5 w-5" />
              Prisma Schema Overview
            </CardTitle>
            <CardDescription>
              Understanding the database architecture and ORM implementation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">What is Prisma?</h3>
              <p className="text-muted-foreground mb-4">
                Prisma is a next-generation ORM (Object-Relational Mapping) that provides a type-safe 
                database client for Node.js and TypeScript. It simplifies database operations and 
                ensures type safety throughout your application.
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Key Benefits:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Type-safe database queries with auto-completion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Automatic migrations and schema management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Support for multiple databases (SQLite, PostgreSQL, MySQL, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Intuitive data modeling with declarative syntax</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Table className="h-5 w-5" />
              Person Model Schema
            </CardTitle>
            <CardDescription>
              The core data model for storing person information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`model Person {
  id          String   @id @default(uuid())
  name        String
  email       String   @unique
  phoneNumber String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}`}</code>
            </pre>

            <div className="space-y-4 pt-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Key className="h-4 w-4" />
                Field Descriptions:
              </h4>
              
              <div className="grid gap-4">
                <div className="border-l-4 border-primary pl-4">
                  <h5 className="font-semibold text-sm">id (String)</h5>
                  <p className="text-sm text-muted-foreground">
                    Primary key using UUID format. Automatically generated using <code className="bg-muted px-1 rounded">@default(uuid())</code>
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-semibold text-sm">name (String)</h5>
                  <p className="text-sm text-muted-foreground">
                    Person&apos;s full name. Required field with minimum 2 characters validation
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-semibold text-sm">email (String)</h5>
                  <p className="text-sm text-muted-foreground">
                    Email address with <code className="bg-muted px-1 rounded">@unique</code> constraint to prevent duplicates
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h5 className="font-semibold text-sm">phoneNumber (String)</h5>
                  <p className="text-sm text-muted-foreground">
                    Australian mobile number format (04XXXXXXXX). Validated with regex pattern
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-semibold text-sm">createdAt (DateTime)</h5>
                  <p className="text-sm text-muted-foreground">
                    Timestamp of record creation. Auto-populated using <code className="bg-muted px-1 rounded">@default(now())</code>
                  </p>
                </div>

                <div className="border-l-4 border-pink-500 pl-4">
                  <h5 className="font-semibold text-sm">updatedAt (DateTime)</h5>
                  <p className="text-sm text-muted-foreground">
                    Automatically updated timestamp using <code className="bg-muted px-1 rounded">@updatedAt</code> decorator
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Database Configuration</CardTitle>
            <CardDescription>Current setup and provider details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Database Provider</h4>
                <p className="text-2xl font-bold text-primary">SQLite</p>
                <p className="text-sm text-muted-foreground mt-1">
                  File-based database for development
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">ORM Version</h4>
                <p className="text-2xl font-bold text-primary">Prisma 5.x</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Production-ready with type safety
                </p>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Connection String</h4>
              <code className="text-sm">DATABASE_URL=&quot;file:./prisma/dev.db&quot;</code>
              <p className="text-sm text-muted-foreground mt-2">
                The database file is stored locally in the prisma directory
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>CRUD Operations</CardTitle>
            <CardDescription>Available database operations through Prisma Client</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                <span className="font-bold text-green-600">CREATE</span>
                <span className="text-sm">Add new person records to the database</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                <span className="font-bold text-blue-600">READ</span>
                <span className="text-sm">Search and retrieve person records by name or ID</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                <span className="font-bold text-orange-600">UPDATE</span>
                <span className="text-sm">Modify existing person information</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                <span className="font-bold text-red-600">DELETE</span>
                <span className="text-sm">Remove person records from the database</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 flex gap-4">
          <Button asChild variant="outline">
            <Link href="/">
              ← Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/about">
              About This App
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
