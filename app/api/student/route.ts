import prisma from "@/lib/db";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, profileImage, phone, gender, parentsTelegramId } =
      await req.json();

    const cookie = cookies().get("session")?.value;
    const session = await decrypt(cookie);

    if (!session?.userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const newStudent = await prisma.student.create({
      data: {
        email,
        gender,
        name,
        phone,
        profileImage,
        parentsTelegramId,
      },
    });

    return NextResponse.json(newStudent);
  } catch (error) {
    console.log("[CREATE_STUDENT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
