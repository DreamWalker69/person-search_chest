import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Key, Eye, Database, Server, Users, FileKey } from 'lucide-react';

export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Security Features</h1>
        <p className="text-muted-foreground text-lg">
          Comprehensive security documentation for OAuth-protected Person Management System
        </p>
      </div>

      {/* Security Overview */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Architecture
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
            This application implements a multi-layered security architecture using industry-standard OAuth 2.0 
            authentication, database-backed sessions, and route-level protection to ensure data privacy and access control.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="h-4 w-4 text-green-500" />
                <h4 className="font-semibold text-sm">OAuth 2.0 Authentication</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Google OAuth provider ensures secure, passwordless authentication with industry-standard security protocols
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Database className="h-4 w-4 text-blue-500" />
                <h4 className="font-semibold text-sm">Database Sessions</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Sessions stored in PostgreSQL with automatic expiration and secure token management
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Server className="h-4 w-4 text-purple-500" />
                <h4 className="font-semibold text-sm">Middleware Protection</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Next.js middleware intercepts requests to protected routes before they reach the application
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Key className="h-4 w-4 text-orange-500" />
                <h4 className="font-semibold text-sm">Encrypted Credentials</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Environment variables secure sensitive OAuth credentials and database connection strings
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Protected Routes */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileKey className="h-5 w-5" />
            Protected Routes
          </CardTitle>
          <CardDescription>
            Routes requiring authentication to access
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">Protected</Badge>
                  <code className="text-sm">/mcp-demo</code>
                </div>
                <Lock className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">
                MCP demonstration page with interactive CRUD operations. Requires valid authentication session.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">Protected</Badge>
                  <code className="text-sm">/database</code>
                </div>
                <Lock className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">
                Database schema documentation and structure information. Protected to prevent unauthorized access.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Public</Badge>
                  <code className="text-sm">/</code>
                </div>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">
                Home page with search functionality. Publicly accessible but features limited for unauthenticated users.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Public</Badge>
                  <code className="text-sm">/about</code>
                </div>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">
                Application architecture and technology stack documentation. Accessible to all users.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Public</Badge>
                  <code className="text-sm">/auth-setup</code>
                </div>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">
                OAuth configuration guide. Public to help developers set up authentication.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Public</Badge>
                  <code className="text-sm">/security</code>
                </div>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">
                Security features documentation (this page). Publicly accessible for transparency.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Authentication Flow */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Authentication Flow</CardTitle>
          <CardDescription>How OAuth authentication works in this application</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">User Initiates Sign In</h4>
                <p className="text-xs text-muted-foreground">
                  User clicks &quot;Sign In&quot; button and is redirected to Google OAuth consent screen
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Google Authentication</h4>
                <p className="text-xs text-muted-foreground">
                  User selects Google account and grants permissions to the application
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">OAuth Callback</h4>
                <p className="text-xs text-muted-foreground">
                  Google redirects back to application with authorization code
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Token Exchange</h4>
                <p className="text-xs text-muted-foreground">
                  Auth.js exchanges authorization code for access and refresh tokens
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                5
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Session Creation</h4>
                <p className="text-xs text-muted-foreground">
                  User record created/updated in database, session token generated and stored
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                6
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Authenticated Access</h4>
                <p className="text-xs text-muted-foreground">
                  User redirected to application with valid session, can now access protected routes
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Session Management */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Session Management
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-sm mb-2">Session Duration</h4>
              <p className="text-xs text-muted-foreground mb-2">
                Sessions are valid for <strong>30 days</strong> from creation
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded block">
                maxAge: 30 * 24 * 60 * 60
              </code>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-sm mb-2">Session Storage</h4>
              <p className="text-xs text-muted-foreground mb-2">
                Sessions stored in PostgreSQL <code>Session</code> table
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded block">
                strategy: &quot;database&quot;
              </code>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-sm mb-2">Automatic Expiration</h4>
              <p className="text-xs text-muted-foreground">
                Expired sessions are automatically invalidated and removed from the database
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-sm mb-2">Secure Logout</h4>
              <p className="text-xs text-muted-foreground">
                Sign out immediately invalidates session and clears client-side cookies
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Privacy */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Data Privacy & Compliance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 p-4 rounded">
            <h4 className="font-semibold text-sm mb-2">OAuth Scopes</h4>
            <p className="text-xs text-muted-foreground mb-2">
              Application requests only minimal required permissions:
            </p>
            <ul className="text-xs text-muted-foreground space-y-1 ml-4">
              <li>• <strong>profile</strong>: User&apos;s basic profile information (name, image)</li>
              <li>• <strong>email</strong>: User&apos;s email address for identification</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
            <h4 className="font-semibold text-sm mb-2">Stored User Data</h4>
            <p className="text-xs text-muted-foreground mb-2">
              Only essential user information is stored:
            </p>
            <ul className="text-xs text-muted-foreground space-y-1 ml-4">
              <li>• Email address (unique identifier)</li>
              <li>• Display name</li>
              <li>• Profile image URL</li>
              <li>• OAuth provider account details</li>
              <li>• Session tokens and expiration</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
            <h4 className="font-semibold text-sm mb-2">No Password Storage</h4>
            <p className="text-xs text-muted-foreground">
              OAuth eliminates password management risks. User credentials are never stored in our database. 
              Authentication is entirely handled by Google&apos;s secure infrastructure.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Security Best Practices Implemented</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <Shield className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">HTTPS Enforcement</p>
                <p className="text-xs text-muted-foreground">All production traffic encrypted via TLS</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Shield className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">CSRF Protection</p>
                <p className="text-xs text-muted-foreground">Auth.js built-in CSRF token validation</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Shield className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Environment Variables</p>
                <p className="text-xs text-muted-foreground">Secrets never committed to version control</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Shield className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Secure Session Tokens</p>
                <p className="text-xs text-muted-foreground">Cryptographically secure random tokens</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Shield className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Database Connection Pooling</p>
                <p className="text-xs text-muted-foreground">Prevents connection exhaustion attacks</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Shield className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Middleware Authorization</p>
                <p className="text-xs text-muted-foreground">Server-side route protection before rendering</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Shield className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">OAuth State Parameter</p>
                <p className="text-xs text-muted-foreground">Prevents authorization code interception</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Shield className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Token Refresh</p>
                <p className="text-xs text-muted-foreground">Automatic access token renewal</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* MCP Server Security */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="h-5 w-5" />
            MCP Server Security (Advanced)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
            The Model Context Protocol server can be extended with OAuth protection for enhanced security:
          </p>

          <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
            <h4 className="font-semibold text-sm mb-2">Future Enhancement</h4>
            <p className="text-xs text-muted-foreground">
              MCP server authentication requires additional configuration to validate sessions before executing 
              database operations via Claude Desktop. This ensures that even AI-powered operations respect 
              user authentication boundaries.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-2">Current MCP Security</h4>
            <ul className="text-xs text-muted-foreground space-y-1 ml-4">
              <li>• Database connection secured via environment variables</li>
              <li>• Input validation using Zod schemas</li>
              <li>• Error handling prevents information leakage</li>
              <li>• Local execution on developer machine only</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
