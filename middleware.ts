import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // For protected routes, just allow the request to go through
  // The pages themselves will handle authentication via server components
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/mcp-demo/:path*',
    '/database/:path*',
  ],
}
