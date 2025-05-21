import { NextResponse } from "next/server";

import { servicesCreateInputObjectSchema } from "@/prisma/generated/schemas/objects/servicesCreateInput.schema";
import { servicesUpdateInputObjectSchema } from "@/prisma/generated/schemas/objects/servicesUpdateInput.schema";
import { addService, deleteService, getService, getServices, updateService } from "@/services/service";

// GET
export async function GET(req: Request) {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (id) {
        const svc = await getService({ id: Number(id) });
        if (!svc) return NextResponse.json({ error: "Not found" }, { status: 404 });
        return NextResponse.json(svc);
    }
    return NextResponse.json(await getServices());
}

// POST
export async function POST(req: Request) {
    try {
        const data = servicesCreateInputObjectSchema.parse(await req.json());
        return NextResponse.json(await addService(data), { status: 201 });
    } catch (e: unknown) {
        const errorMessage = e instanceof Error ? e.message : "Invalid request";
        return NextResponse.json({ error: errorMessage }, { status: 400 });
    }
}

// PUT
export async function PUT(req: Request) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get("id");
        if (!id) throw new Error("ID required");

        const data = servicesUpdateInputObjectSchema.parse(await req.json());

        const existing = await getService({ id: Number(id) });
        if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

        return NextResponse.json(await updateService(Number(id), data));
    } catch (e: unknown) {
        const errorMessage = e instanceof Error ? e.message : "Invalid update request";
        return NextResponse.json({ error: errorMessage }, { status: 400 });
    }
}

// DELETE
export async function DELETE(req: Request) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get("id");
        if (!id) throw new Error("ID required");

        await deleteService(Number(id));
        return NextResponse.json({ message: "Deleted" });
    } catch (e: unknown) {
        const errorMessage = e instanceof Error ? e.message : "Delete failed";
        return NextResponse.json({ error: errorMessage }, { status: 400 });
    }
}
