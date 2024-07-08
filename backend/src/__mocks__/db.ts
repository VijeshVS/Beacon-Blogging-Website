import { PrismaClient } from "@prisma/client/extension";
import { mockDeep } from "vitest-mock-extended";

export const prisma = mockDeep<PrismaClient>()