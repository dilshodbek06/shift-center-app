import "server-only";

import { cache } from "react";
import prisma from "./db";
import { cookies } from "next/headers";
import { decrypt } from "./session";

export const getUser = cache(async () => {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);
  if (!session) return null;

  try {
    let currentUser = null;
    if (session?.role === "ADMIN") {
      currentUser = await prisma.admin.findUnique({
        where: { id: session.userId as string },
      });
    } else if (session?.role === "TEACHER") {
      currentUser = await prisma.teacher.findUnique({
        where: { id: session.userId as string },
      });
    }
    currentUser!.password = "";

    return currentUser;
  } catch (error) {
    console.log("Failed to fetch user", error);
    return null;
  }
});
