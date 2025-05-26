import { Prisma } from "@prisma/client";
import prisma from "../lib/prisma";

export async function getServices() {
    return prisma.services.findMany();
}

export async function getService(
    where: Prisma.servicesWhereUniqueInput
) {
    return prisma.services.findUnique({ where });
}

export async function addService(
    newService: Prisma.servicesCreateInput
) {
    return prisma.services.create({ data: newService });
}

export async function updateService(
    id: number,
    data: Prisma.servicesUpdateInput
) {
    return prisma.services.update({
        where: { id },
        data,
    });
}

export async function deleteService(id: number) {
    return prisma.services.delete({ where: { id } });
}
