import { NextResponse } from "next/server";

import { z } from "zod";
import { engagementsCreateInputObjectSchema } from "@/prisma/generated/schemas/objects/engagementsCreateInput.schema";
import { engagementsUpdateInputObjectSchema } from "@/prisma/generated/schemas/objects/engagementsUpdateInput.schema";
import {
    addEngagement,
    deleteEngagement,
    getEngagement,
    getEngagements,
    updateEngagement,
} from "@/services/engagement";

// GET: Fetch all engagements or a single engagement by ID
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
        // There was an id in the search, so find the engagement that corresponds to it
        const engagement = await getEngagement({ id: Number(id) });
        if (!engagement) {
            return NextResponse.json({ message: "Engagement not found" }, { status: 404 });
        }

        return NextResponse.json(engagement, { status: 200 });
    }

    // There was no id in the get request, so return all of the engagements
    const engagements = await getEngagements();

    return NextResponse.json(engagements, { status: 200 });
}

// POST: Add a new engagement
export async function POST(request: Request) {
    try {
        const body: unknown = await request.json();
        const newEngagement = engagementsCreateInputObjectSchema.parse(body);
        const createdEngagement = await addEngagement(newEngagement);

        return NextResponse.json(createdEngagement, { status: 201 });
    } catch {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}

// PUT: Update a engagement
export async function PUT(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ error: "ID is required" }, { status: 400 });
        }

        const existingEngagement = await getEngagement({ id: Number(id) });
        if (!existingEngagement) {
            return NextResponse.json({ error: "Engagement not found" }, { status: 404 });
        }

        const body: unknown = await request.json();
        const validator = z.object({
            update: engagementsUpdateInputObjectSchema,
        });
        const { update: updatedData } = validator.parse(body);

        const updatedEngagement = await updateEngagement(Number(id), updatedData);
        return NextResponse.json(updatedEngagement, { status: 200 });
    } catch {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}

// DELETE: Delete a engagement
export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ error: "ID is required" }, { status: 400 });
        }

        const deletedEngagement = await deleteEngagement(Number(id));
        if (!deletedEngagement) {
            return NextResponse.json({ error: "Engagement not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Engagement deleted" }, { status: 200 });
    } catch {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}
