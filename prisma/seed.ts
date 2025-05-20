import bcrypt from 'bcryptjs';
import prisma from "@/lib/prisma";
import { UserCreateInputObjectSchema } from "@/prisma/generated/schemas/objects/UserCreateInput.schema";
import { addUser } from "@/services/users";

async function main() {
    const hashedPassword = await bcrypt.hash("password123", 10);

    const user = {
        email: "admin@example.com",
        password: hashedPassword,
        createdAt: new Date(),
    };
    
    const createdUser = UserCreateInputObjectSchema.parse(user);
    await addUser(createdUser);

    console.log('Admin user created');
}

main()
  .catch((e: unknown) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

