import { NextResponse } from "next/server";

import { z } from "zod";
import { reviewsCreateInputObjectSchema } from "@/prisma/generated/schemas/objects/reviewsCreateInput.schema";
import { reviewsUpdateInputObjectSchema } from "@/prisma/generated/schemas/objects/reviewsUpdateInput.schema";
import { addReview, deleteReview, getReview, getReviews, updateReview } from "@/services/review";

// GET: Fetch all reviews or a single review by ID
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
        // There was an id in the search, so find the review that corresponds to it
        const review = await getReview({ id: Number(id) });
        if (!review) {
            return NextResponse.json({ message: "Review not found" }, { status: 404 });
        }

        return NextResponse.json(review, { status: 200 });
    }

    // There was no id in the get request, so return all of the reviews
    const reviews = await getReviews();

    return NextResponse.json(reviews, { status: 200 });
}

// POST: Add a new review
export async function POST(request: Request) {
    try {
        const body: unknown = await request.json();
        const newReview = reviewsCreateInputObjectSchema.parse(body);
        const createdReview = await addReview(newReview);

        return NextResponse.json(createdReview, { status: 201 });
    } catch {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}

// PUT: Update a review
export async function PUT(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ error: "ID is required" }, { status: 400 });
        }

        const existingReview = await getReview({ id: Number(id) });
        if (!existingReview) {
            return NextResponse.json({ error: "Review not found" }, { status: 404 });
        }

        const body: unknown = await request.json();
        const validator = z.object({
            update: reviewsUpdateInputObjectSchema,
        });
        const { update: updatedData } = validator.parse(body);

        const updatedReview = await updateReview(Number(id), updatedData);
        return NextResponse.json(updatedReview, { status: 200 });
    } catch {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}

// DELETE: Delete a review
export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ error: "ID is required" }, { status: 400 });
        }

        const deletedReview = await deleteReview(Number(id));
        if (!deletedReview) {
            return NextResponse.json({ error: "Review not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Review deleted" }, { status: 200 });
    } catch {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}
