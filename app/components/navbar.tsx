import Link from 'next/link';
import { Search, Database, Github, Zap, Settings, Shield, LogIn } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from './theme-toggle';
import { UserMenu } from './user-menu';
import { auth } from '@/auth';

export default async function Navbar() {
  const session = await auth();

  return (
    <nav className="bg-background shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Search className="h-8 w-8 text-primary" aria-hidden="true" />
              <span className="ml-2 text-lg font-semibold text-foreground">Person Search</span>
            </Link>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Link href="/" className="text-foreground hover:text-primary px-2 sm:px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary px-2 sm:px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="/auth-setup" className="text-foreground hover:text-primary px-2 sm:px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Auth Setup</span>
            </Link>
            <Link href="/security" className="text-foreground hover:text-primary px-2 sm:px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Security</span>
            </Link>
            <Link href="/mcp-demo" className="text-foreground hover:text-primary px-2 sm:px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
              <Zap className="h-4 w-4" />
              <span className="hidden sm:inline">MCP Demo</span>
            </Link>
            <Link href="/database" className="text-foreground hover:text-primary px-2 sm:px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
              <Database className="h-4 w-4" />
              <span className="hidden sm:inline">Database</span>
            </Link>
            <Link href="/github" className="text-foreground hover:text-primary px-2 sm:px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1">
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </Link>
            
            <ThemeToggle />
            
            {session ? (
              <UserMenu user={session.user} />
            ) : (
              <Button asChild size="sm" className="ml-2">
                <Link href="/auth/signin" className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}