import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {

    const jwt = request.cookies.get('token')

    if (!jwt) return NextResponse.redirect(new URL("/login", request.url));

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/',
        '/profile',
        '/explore',
        '/notifications',
    ],
}