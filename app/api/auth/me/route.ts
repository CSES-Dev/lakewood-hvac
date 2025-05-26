import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const token = req.cookies.get("auth")?.value;

    if (!token) return NextResponse.json({ loggedIn: false }, { status: 200 });

    try {
        const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);
        const { payload } = await jwtVerify(token, secretKey);

        return NextResponse.json({ loggedIn: true, user: payload }, { status: 200 });
    } catch {
        return NextResponse.json({ loggedIn: false }, { status: 200 });
    }
}
