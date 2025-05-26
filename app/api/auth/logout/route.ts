import { serialize } from "cookie";
import { NextResponse } from "next/server";

export function POST() {
    const logoutCookie = serialize("auth", "", {
        httpOnly: true,
        path: "/",
        expires: new Date(0),
    });

    return NextResponse.json(
        { message: "Logged out" },
        {
            status: 200,
            headers: {
                "Set-Cookie": logoutCookie,
                "Content-Type": "application/json",
            },
        },
    );
}
