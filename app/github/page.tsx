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
                <span><strong>Full CRUD Implementation:</strong> Complete Create, Read, Update, and Delete operations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Database Integration:</strong> Prisma ORM with SQLite database</span>
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
