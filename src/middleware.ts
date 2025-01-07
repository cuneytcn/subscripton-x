import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Login sayfasına erişime izin ver
  if (request.nextUrl.pathname === '/keystatic') {
    return NextResponse.next()
  }

  // Keystatic ile başlayan tüm path'leri kontrol et
  if (request.nextUrl.pathname.startsWith('/keystatic')) {
    const authCookie = request.cookies.get('keystaticAuth')

    // Cookie yoksa veya geçersizse login sayfasına yönlendir
    if (!authCookie || authCookie.value !== 'true') {
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/keystatic', '/keystatic/:path*'],
}
