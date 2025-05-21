import bcrypt from "bcryptjs";
import { serialize } from "cookie";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getUser } from "@/services/users";

const validator = z.object({
    email: z.string().email(),
    password: z.string(),
});

export async function POST(request: NextRequest) {
    try {
        const body: unknown = await request.json();
        const validation = validator.safeParse(body);

        if (!validation.success) {
            return NextResponse.json({ message: "Missing fields" }, { status: 400 });
        }

        const secret = process.env.JWT_SECRET;
        const { email, password } = validation.data;
        const user = await getUser({ email });

        if (!secret || !user || !(await bcrypt.compare(password, user.password))) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }

        const token = jwt.sign({ email: user.email }, secret, { expiresIn: "1h" });
        const cookie = serialize("auth", token, {
            httpOnly: true,
            path: "/",
            sameSite: "lax",
            maxAge: 3600,
        });

        return NextResponse.json(
            { message: "Login successful" },
            {
                status: 200,
                headers: {
                    "Set-Cookie": cookie,
                    "Content-Type": "application/json",
                },
            },
        );
    } catch {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
