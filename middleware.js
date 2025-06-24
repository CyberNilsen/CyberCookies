// middleware.js (in root directory)
import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl
  const authToken = request.cookies.get('auth_token')

  // Protected routes that require authentication
  const protectedRoutes = ['/dashboard']
  
  // Auth routes that should redirect if already logged in
  const authRoutes = ['/login']

  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!authToken) {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  if (authRoutes.some(route => pathname.startsWith(route))) {
    if (authToken) {
      // Redirect to dashboard if already authenticated
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login']
}