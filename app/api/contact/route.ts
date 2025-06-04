import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body: unknown = await request.json();
        const response = await fetch(`https://formspree.io/f/${process.env.FORMSPREE_ID ?? ""}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const error: unknown = await response.json();
            return new Response(JSON.stringify({ error }), { status: response.status });
        }

        return NextResponse.json({ success: true }, { status: 201 });
    } catch {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}
