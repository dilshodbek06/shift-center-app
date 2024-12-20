import bcrypt from "bcryptjs";
import prisma from "@/lib/db";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { firstname, lastname, email, password, phone, gender, profession } =
      await req.json();

    const cookie = cookies().get("session")?.value;
    const session = await decrypt(cookie);

    if (!session?.userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newTeacher = await prisma.teacher.create({
      data: {
        email,
        password: hashedPassword,
        gender,
        phone,
        firstname,
        lastname,
        profession,
      },
    });

    return NextResponse.json(newTeacher);
  } catch (error) {
    console.log("[CREATE_TEACHER]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
