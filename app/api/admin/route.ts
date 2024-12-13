import bcrypt from "bcryptjs";
import prisma from "@/lib/db";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const { name, email, password, adminId } = await req.json();

    const cookie = cookies().get("session")?.value;
    const session = await decrypt(cookie);

    if (!session?.userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedAdmin = await prisma.admin.update({
      where: {
        id: adminId,
      },
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    return NextResponse.json(updatedAdmin);
  } catch (error) {
    console.log("[UPDATE_ADMIN]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
