import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const token = req.cookies.get("auth")?.value;
    const url = req.nextUrl.clone();

    if (!token) {
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    try {
        await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
        return NextResponse.next();
    } catch {
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }
}

export const config = {
    matcher: ["/adminpanel/:path*"],
};
