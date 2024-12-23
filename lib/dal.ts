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
    let currentRole = null;
    if (session?.role === "ADMIN") {
      currentRole = await prisma.admin.findUnique({
        where: { id: session.userId as string },
      });
    } else if (session?.role === "TEACHER") {
      currentRole = await prisma.teacher.findUnique({
        where: { id: session.userId as string },
      });
    }
    currentRole!.password = "";

    return currentRole;
  } catch (error) {
    console.log("Failed to fetch user", error);
    return null;
  }
});

export const getUserRole = cache(async () => {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);
  if (!session) return null;

  try {
    const currentRole: string | null = session?.role as string;
    return currentRole;
  } catch (error) {
    console.log("Failed to fetch user", error);
    return null;
  }
});
