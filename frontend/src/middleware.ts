import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import {jwtVerify} from 'jose'

export async function middleware(request: NextRequest) {

    const jwt = request.cookies.get('token')

    if (!jwt) return NextResponse.redirect(new URL("/login", request.url));

    //  verify if the token is created with my signature 
    try {
        const { payload } = await jwtVerify(
          jwt.value,
          new TextEncoder().encode(process.env.TOKEN_SECRET)
        );
        return NextResponse.next();
      } catch (error) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

}

export const config = {
    matcher: [
        '/',
        '/profile',
        '/explore',
        '/notifications',
        '/edit-profile',
    ],
}