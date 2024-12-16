import prisma from "@/lib/db";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cookie = cookies().get("session")?.value;
    const session = await decrypt(cookie);
    if (!session?.userId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

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

    if (!currentUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    currentUser.password = "";

    return NextResponse.json({ ...currentUser, role: session?.role });
  } catch (err) {
    console.error("Error fetching user:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
