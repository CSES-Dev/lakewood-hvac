import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

export async function getUser(where: Prisma.UserWhereUniqueInput) {
    return await prisma.user.findUnique({
        where,
    });
}

export async function updateUser(id: string, data: Prisma.UserUpdateInput) {
    return await prisma.user.update({
        where: { id },
        data,
    });
}

export async function addUser(newUser: Prisma.UserCreateInput) {
    return await prisma.user.create({
        data: newUser,
    });
}

// DON'T create this for tables that you don't actually need to potentially delete things from
// Could be used accidentally or misused maliciously to get rid of important data
export async function deleteUser(id: number) {
    return await prisma.engagements.delete({
        where: { id },
    });
}
