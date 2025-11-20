import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code, GitBranch, Star } from 'lucide-react'

export default function GitHubPage() {
  const repoUrl = "https://github.com/DreamWalker69/person-search_chest"
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Github className="h-10 w-10" />
          <h1 className="text-3xl font-bold">GitHub Repository</h1>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Source Code Repository
            </CardTitle>
            <CardDescription>
              Access the complete source code for this Person Search application
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                This project is open source and available on GitHub. You can view the source code,
                fork the repository, report issues, or contribute to the development.
              </p>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-mono text-sm break-all">{repoUrl}</p>
              </div>

              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Visit GitHub Repository
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 pt-6 border-t">
              <div className="flex items-start gap-3">
                <GitBranch className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold mb-1">Clone the Repository</h3>
                  <p className="text-sm text-muted-foreground">
                    Clone this repository to your local machine and start developing
                  </p>
                  <code className="text-xs bg-muted px-2 py-1 rounded mt-2 block">
                    git clone {repoUrl}.git
                  </code>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Star className="h-5 w-5 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold mb-1">Star the Project</h3>
                  <p className="text-sm text-muted-foreground">
                    If you find this project helpful, please consider giving it a star on GitHub
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Repository Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span><strong>OAuth 2.0 Authentication:</strong> Google OAuth integration with Auth.js (NextAuth v5)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Protected Routes:</strong> Middleware-enforced authentication for sensitive operations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Session Management:</strong> Database-backed sessions with 30-day expiration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span><strong>MCP Integration:</strong> Model Context Protocol server for Claude Desktop</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Full CRUD Implementation:</strong> Complete Create, Read, Update, and Delete operations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Database Integration:</strong> Prisma ORM with PostgreSQL (Neon)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Modern Stack:</strong> Next.js 15, React 19, TypeScript, and Tailwind CSS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Responsive Design:</strong> Mobile-first approach with dark mode support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Form Validation:</strong> Comprehensive validation using Zod and React Hook Form</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>OAuth Setup Guide</CardTitle>
            <CardDescription>
              This repository includes complete OAuth 2.0 authentication
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The application uses Auth.js (NextAuth v5) with Google OAuth provider for secure authentication.
              To set up OAuth in your local environment:
            </p>
            
            <div className="space-y-3">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">1. Google Cloud Console Setup</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Create OAuth 2.0 credentials at the Google Cloud Console
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noopener noreferrer">
                    Open Google Cloud Console
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">2. Environment Variables</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Configure the following environment variables in your .env file:
                </p>
                <code className="text-xs bg-background px-3 py-2 rounded block font-mono">
                  AUTH_SECRET=your_secret<br/>
                  GOOGLE_CLIENT_ID=your_client_id<br/>
                  GOOGLE_CLIENT_SECRET=your_client_secret
                </code>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">3. Database Migration</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Run Prisma migrations to create authentication tables:
                </p>
                <code className="text-xs bg-background px-3 py-2 rounded block font-mono">
                  npx prisma migrate dev --name add_auth_tables
                </code>
              </div>
            </div>

            <Button asChild variant="default" className="w-full sm:w-auto">
              <Link href="/auth-setup">
                View Complete Setup Guide →
              </Link>
            </Button>
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
