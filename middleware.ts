import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

const PROTECTED_API_PATHS = ["/api/reviews", "/api/engagements", "/api/services", "/api/upload"];

export async function middleware(req: NextRequest) {
    const token = req.cookies.get("auth")?.value;
    const url = req.nextUrl.clone();

    // Skip middleware auths
    if (url.pathname.startsWith("/api/auth")) return NextResponse.next();

    const adminProtected = url.pathname.startsWith("/adminpanel");
    const isApiProtected =
        PROTECTED_API_PATHS.some((path) => url.pathname.startsWith(path)) &&
        ["POST", "PUT", "DELETE"].includes(req.method);

    if (!adminProtected && !isApiProtected) return NextResponse.next();

    // Validate
    if (!token) {
        if (adminProtected) {
            url.pathname = "/login";
            return NextResponse.redirect(url);
        }

        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
        return NextResponse.next();
    } catch {
        if (adminProtected) {
            url.pathname = "/login";
            return NextResponse.redirect(url);
        }

        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
}

export const config = {
    matcher: ["/adminpanel/:path*", PROTECTED_API_PATHS],
};
