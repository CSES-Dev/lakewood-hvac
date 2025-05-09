import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

export async function getReviews() {
    return await prisma.reviews.findMany();
}

export async function getReview(where: Prisma.reviewsWhereUniqueInput) {
    return await prisma.reviews.findUnique({
        where,
    });
}

export async function updateReview(id: number, data: Prisma.reviewsUpdateInput) {
    return await prisma.reviews.update({
        where: { id },
        data,
    });
}

export async function addReview(newReview: Prisma.reviewsCreateInput) {
    return await prisma.reviews.create({
        data: newReview,
    });
}

// DON'T create this for tables that you don't actually need to potentially delete things from
// Could be used accidentally or misused maliciously to get rid of important data
export async function deleteReview(id: number) {
    return await prisma.reviews.delete({
        where: { id },
    });
}
