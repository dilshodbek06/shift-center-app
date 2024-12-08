import prisma from "@/lib/db";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { groupName, teacherId } = await req.json();

    const cookie = cookies().get("session")?.value;
    const session = await decrypt(cookie);

    if (!session?.userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const newGroup = await prisma.group.create({
      data: {
        name: groupName,
        teacherId,
      },
    });

    return NextResponse.json(newGroup);
  } catch (error) {
    console.log("[GROUP_ADD]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
