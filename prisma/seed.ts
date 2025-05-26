import bcrypt from 'bcryptjs';
import prisma from "../lib/prisma";
import { addUser, getUser } from "../services/users";
import { UserCreateInputObjectSchema } from "./generated/schemas/objects/UserCreateInput.schema";

async function main() {
    const userEmail = process.env.ADMIN_EMAIL;
    const userPassword = process.env.ADMIN_PASSWORD;

    if (!userEmail || !userPassword) throw new Error("ADMIN_EMAIL and ADMIN_PASSWORD must be defined in environment variables.");

    const hashedPassword = await bcrypt.hash(userPassword, 10);

    const existingAdmin = await getUser({ email: userEmail });
    if (existingAdmin) {
        console.log(`Admin ${userEmail} already exists.`);
        return;
    }

    const adminUser = {
        email: userEmail,
        password: hashedPassword,
        createdAt: new Date(),
    };
    
    const admin = UserCreateInputObjectSchema.parse(adminUser);
    await addUser(admin);

    console.log('Admin user created');
}

main()
  .catch((e: unknown) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

