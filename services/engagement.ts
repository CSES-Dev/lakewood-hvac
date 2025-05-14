import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

export async function getEngagements() {
    return await prisma.engagements.findMany();
}

export async function getEngagement(where: Prisma.engagementsWhereUniqueInput) {
    return await prisma.engagements.findUnique({
        where,
    });
}

export async function updateEngagement(id: number, data: Prisma.engagementsUpdateInput) {
    return await prisma.engagements.update({
        where: { id },
        data,
    });
}

export async function addEngagement(newEngagement: Prisma.engagementsCreateInput) {
    return await prisma.engagements.create({
        data: newEngagement,
    });
}

// DON'T create this for tables that you don't actually need to potentially delete things from
// Could be used accidentally or misused maliciously to get rid of important data
export async function deleteEngagement(id: number) {
    return await prisma.engagements.delete({
        where: { id },
    });
}
