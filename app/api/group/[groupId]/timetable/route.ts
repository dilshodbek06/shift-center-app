import prisma from "@/lib/db";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { groupId: string } }
) {
  try {
    const { groupId } = params;
    const { price } = await req.json();

    const cookie = cookies().get("session")?.value;
    const session = await decrypt(cookie);

    if (!session?.userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const newTimeTable = await prisma.timeTable.create({
      data: {
        price: parseInt(price),
        groupId,
      },
    });

    const lessons = [];

    for (let i = 0; i < 12; i++) {
      lessons.push({
        name: `Lesson-${i + 1}`,
        description: ``,
        timeTableId: newTimeTable.id,
      });
    }

    await prisma.lesson.createMany({
      data: lessons,
    });

    return NextResponse.json(newTimeTable);
  } catch (error) {
    console.log("[GROUP_ID_TIMETABLE_ADD]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
