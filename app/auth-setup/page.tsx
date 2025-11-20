import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Key, Settings, CheckCircle2, Terminal, Lock } from 'lucide-react';

export default function AuthSetupPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">OAuth Setup Guide</h1>
        <p className="text-muted-foreground text-lg">
          Complete guide for implementing Google OAuth authentication with Auth.js (NextAuth v5)
        </p>
      </div>

      {/* Overview */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Authentication Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
            This application uses <strong>Auth.js (NextAuth v5)</strong> with <strong>Google OAuth 2.0</strong> provider 
            to secure all Person CRUD operations. Users must authenticate with their Google account to access protected features.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-primary" />
                <h4 className="font-semibold text-sm">Secure by Default</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                All CRUD routes protected by middleware
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Key className="h-4 w-4 text-primary" />
                <h4 className="font-semibold text-sm">OAuth 2.0</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Industry-standard Google authentication
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="h-4 w-4 text-primary" />
                <h4 className="font-semibold text-sm">Session Management</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Database-backed sessions with Prisma
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Prerequisites */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Prerequisites</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
              <span>Google Cloud Platform account</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
              <span>PostgreSQL database (Neon, Vercel, or local)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
              <span>Auth.js v5 and @auth/prisma-adapter installed</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
              <span>Prisma schema updated with authentication models</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Step-by-Step Setup */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Setup Instructions</h2>

        {/* Step 1 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                1
              </span>
              <CardTitle>Google Cloud Console Setup</CardTitle>
            </div>
            <CardDescription>Configure OAuth 2.0 credentials in Google Cloud Platform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-sm mb-2">1.1 Create a New Project</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Go to <a href="https://console.cloud.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Cloud Console</a></li>
                  <li>Click on the project dropdown and select &quot;New Project&quot;</li>
                  <li>Enter a project name (e.g., &quot;Person Search OAuth&quot;)</li>
                  <li>Click &quot;Create&quot;</li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">1.2 Enable Google+ API</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>In the left sidebar, go to &quot;APIs & Services&quot; → &quot;Library&quot;</li>
                  <li>Search for &quot;Google+ API&quot;</li>
                  <li>Click on it and click &quot;Enable&quot;</li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">1.3 Configure OAuth Consent Screen</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Go to &quot;APIs & Services&quot; → &quot;OAuth consent screen&quot;</li>
                  <li>Select &quot;External&quot; user type and click &quot;Create&quot;</li>
                  <li>Fill in required fields:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>App name: &quot;Person Search App&quot;</li>
                      <li>User support email: Your email</li>
                      <li>Developer contact: Your email</li>
                    </ul>
                  </li>
                  <li>Click &quot;Save and Continue&quot; through remaining steps</li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">1.4 Create OAuth Credentials</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground ml-4">
                  <li>Go to &quot;APIs & Services&quot; → &quot;Credentials&quot;</li>
                  <li>Click &quot;Create Credentials&quot; → &quot;OAuth client ID&quot;</li>
                  <li>Select &quot;Web application&quot; as application type</li>
                  <li>Configure authorized redirect URIs:
                    <div className="bg-muted/50 p-3 rounded-lg font-mono text-xs mt-2">
                      <p className="mb-1">Local development:</p>
                      <code>http://localhost:3000/api/auth/callback/google</code>
                      <p className="mt-2 mb-1">Production:</p>
                      <code>https://your-domain.vercel.app/api/auth/callback/google</code>
                    </div>
                  </li>
                  <li>Click &quot;Create&quot;</li>
                  <li>Copy the <strong>Client ID</strong> and <strong>Client Secret</strong></li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                2
              </span>
              <CardTitle>Environment Variables Configuration</CardTitle>
            </div>
            <CardDescription>Add OAuth credentials to your .env file</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm mb-3">Add these environment variables to your <code className="bg-muted px-2 py-0.5 rounded">.env</code> file:</p>
              <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm space-y-1">
                <p className="text-muted-foreground"># Database (existing)</p>
                <p>POSTGRES_PRISMA_URL=&quot;your_postgres_url&quot;</p>
                <p>POSTGRES_URL_NON_POOLING=&quot;your_direct_url&quot;</p>
                <p className="mt-3 text-muted-foreground"># Auth.js Configuration</p>
                <p>AUTH_SECRET=&quot;your_random_secret_key&quot;</p>
                <p>GOOGLE_CLIENT_ID=&quot;your_google_client_id&quot;</p>
                <p>GOOGLE_CLIENT_SECRET=&quot;your_google_client_secret&quot;</p>
                <p className="mt-3 text-muted-foreground"># NextAuth URL</p>
                <p>NEXTAUTH_URL=&quot;http://localhost:3000&quot;</p>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
              <p className="text-sm font-semibold mb-1">Generate AUTH_SECRET</p>
              <p className="text-xs text-muted-foreground mb-2">Run this command to generate a secure secret:</p>
              <div className="bg-muted/50 p-2 rounded font-mono text-xs">
                openssl rand -base64 32
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 3 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                3
              </span>
              <CardTitle>Database Migration</CardTitle>
            </div>
            <CardDescription>Update database with authentication tables</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">Run Prisma migrations to add authentication tables:</p>
            <div className="bg-muted/50 p-4 rounded-lg space-y-2">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Generate Prisma Client:</p>
                <code className="font-mono text-sm">npx prisma generate</code>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1 mt-3">Create and apply migration:</p>
                <code className="font-mono text-sm">npx prisma migrate dev --name add_auth</code>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">Added Database Tables:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="border rounded-lg p-3">
                  <Badge variant="outline" className="text-xs mb-2">User</Badge>
                  <p className="text-xs text-muted-foreground">Stores user profile information</p>
                </div>
                <div className="border rounded-lg p-3">
                  <Badge variant="outline" className="text-xs mb-2">Account</Badge>
                  <p className="text-xs text-muted-foreground">OAuth provider account data</p>
                </div>
                <div className="border rounded-lg p-3">
                  <Badge variant="outline" className="text-xs mb-2">Session</Badge>
                  <p className="text-xs text-muted-foreground">Active user sessions</p>
                </div>
                <div className="border rounded-lg p-3">
                  <Badge variant="outline" className="text-xs mb-2">VerificationToken</Badge>
                  <p className="text-xs text-muted-foreground">Email verification tokens</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 4 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                4
              </span>
              <CardTitle>Test Authentication</CardTitle>
            </div>
            <CardDescription>Verify OAuth flow is working correctly</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Start your development server: <code className="bg-muted px-2 py-0.5 rounded">npm run dev</code></li>
              <li>Navigate to <code className="bg-muted px-2 py-0.5 rounded">http://localhost:3000</code></li>
              <li>Click &quot;Sign In&quot; button in the navbar</li>
              <li>Select your Google account</li>
              <li>Grant permissions when prompted</li>
              <li>You should be redirected back to the home page, now authenticated</li>
              <li>Try accessing protected routes like <code className="bg-muted px-2 py-0.5 rounded">/mcp-demo</code></li>
            </ol>

            <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 p-4 rounded">
              <p className="text-sm font-semibold mb-1">Success Indicators</p>
              <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                <li>✓ User avatar displayed in navbar</li>
                <li>✓ Access to /mcp-demo and /database pages</li>
                <li>✓ Session persists across page reloads</li>
                <li>✓ Sign out successfully clears session</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Step 5 */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                5
              </span>
              <CardTitle>Deploy to Production</CardTitle>
            </div>
            <CardDescription>Configure OAuth for production environment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-2">Vercel Deployment</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Add all environment variables in Vercel dashboard</li>
                <li>Update Google OAuth redirect URIs with your Vercel domain</li>
                <li>Set <code className="bg-muted px-1 py-0.5 rounded">NEXTAUTH_URL</code> to your production URL</li>
                <li>Push changes and deploy</li>
                <li>Run database migrations on production</li>
              </ol>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-xs text-muted-foreground mb-2">Production environment variables:</p>
              <div className="font-mono text-xs space-y-1">
                <p>NEXTAUTH_URL=https://your-domain.vercel.app</p>
                <p>GOOGLE_CLIENT_ID=your_client_id</p>
                <p>GOOGLE_CLIENT_SECRET=your_client_secret</p>
                <p>AUTH_SECRET=your_secret_key</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Troubleshooting */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Troubleshooting
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm mb-2">Common Issues</h4>
            <div className="space-y-3">
              <div className="border rounded-lg p-3">
                <p className="font-medium text-sm mb-1">Redirect URI mismatch</p>
                <p className="text-xs text-muted-foreground">
                  Ensure the redirect URI in Google Console exactly matches your callback URL, including trailing slashes
                </p>
              </div>
              <div className="border rounded-lg p-3">
                <p className="font-medium text-sm mb-1">Session not persisting</p>
                <p className="text-xs text-muted-foreground">
                  Check that database connection is working and Session table exists
                </p>
              </div>
              <div className="border rounded-lg p-3">
                <p className="font-medium text-sm mb-1">OAuth consent screen error</p>
                <p className="text-xs text-muted-foreground">
                  Make sure you&apos;ve completed all required fields in the OAuth consent screen configuration
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-2">Debug Mode</h4>
            <p className="text-xs text-muted-foreground mb-2">Enable debug logging in development:</p>
            <div className="bg-muted/50 p-2 rounded font-mono text-xs">
              DEBUG=true npm run dev
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            Additional Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://authjs.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Auth.js Official Documentation
              </a>
            </li>
            <li>
              <a href="https://console.cloud.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Google Cloud Console
              </a>
            </li>
            <li>
              <a href="https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Prisma Database Connection Guide
              </a>
            </li>
            <li>
              <a href="/security" className="text-primary hover:underline">
                Security Features Documentation
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
