import {PrismaPg} from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

const globalFromPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

function createPrismaClient() {
    const url = process.env.DATABASE_URL;
    if (!url) {
        throw new Error("DATABASE_URL is not defined in the environment variables.");
    }

    const adapter = new PrismaPg({connectionString: url});
    return new PrismaClient({adapter});

}

export const prisma = globalFromPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalFromPrisma.prisma = prisma;
}
