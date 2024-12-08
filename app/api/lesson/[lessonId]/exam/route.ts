import prisma from "@/lib/db";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { lessonId: string } }
) {
  try {
    const { isExam } = await req.json();

    const cookie = cookies().get("session")?.value;
    const session = await decrypt(cookie);

    if (!session?.userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const updatedLesson = await prisma.lesson.update({
      where: {
        id: params.lessonId,
      },
      data: {
        isExam,
      },
    });

    return NextResponse.json(updatedLesson);
  } catch (error) {
    console.log("[LESSON_CHANGE_IS_EXAM]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
