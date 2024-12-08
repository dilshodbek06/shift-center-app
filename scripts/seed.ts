import { generateAdmin } from "@/app/actions/auth-actions";
import { PrismaClient } from "@prisma/client";
const database = new PrismaClient();

export async function main() {
  try {
    await generateAdmin();
    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database admin", error);
  } finally {
    await database.$disconnect();
  }
}

main();
