import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
export async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname === "/admin") {
        const session = await getToken({ req, secret: process.env.SECRET });
        if (!session) {
            const url = req.nextUrl.clone();
            url.pathname = "/";
            return NextResponse.redirect(url);
        }
    }
    return NextResponse.next();
}
