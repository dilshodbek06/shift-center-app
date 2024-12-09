import prisma from "@/lib/db";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { attendanceId, mark } = await req.json();

    const cookie = cookies().get("session")?.value;
    const session = await decrypt(cookie);

    if (!session?.userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const updatedAttandance = await prisma.studentAttendance.update({
      where: {
        id: attendanceId,
      },
      data: {
        mark,
      },
    });

    // Validate inputs

    return NextResponse.json(updatedAttandance);
  } catch (error) {
    console.log("[UPDATE_LESSON_TIMETABLE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
