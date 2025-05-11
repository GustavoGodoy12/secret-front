
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const TOKEN_COOKIE = 'authToken'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const isLogged = Boolean(req.cookies.get(TOKEN_COOKIE)?.value)


  if (pathname === '/') {
    req.nextUrl.pathname = isLogged ? '/home' : '/login'
    return NextResponse.redirect(req.nextUrl)
  }


  const PRIVATE_ROUTES = ['/home', '/showroom', '/campanhas']

  if (!isLogged && PRIVATE_ROUTES.some((p) => pathname.startsWith(p))) {
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }


  if (isLogged && pathname === '/login') {
    const url = req.nextUrl.clone()
    url.pathname = '/home'
    return NextResponse.redirect(url)
  }

 
  return NextResponse.next()
}

