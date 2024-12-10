import { sendMessageToBot } from "@/helpers/telegram";
import prisma from "@/lib/db";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { lessonId, timeTableId } = await req.json();

    const cookie = cookies().get("session")?.value;
    const session = await decrypt(cookie);

    if (!session?.userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const updatedLesson = await prisma.lesson.update({
      where: {
        id: lessonId,
      },
      data: {
        isClose: true,
      },
    });

    const currentTimeTable = await prisma.timeTable.findUnique({
      where: {
        id: timeTableId,
      },
      include: {
        lessons: true,
        studentTimeTables: {
          include: {
            student: true,
            attendances: true,
          },
        },
      },
    });

    if (!currentTimeTable) {
      console.error(`Timetable not found for ID: ${timeTableId}`);
      return new NextResponse("Timetable not found", { status: 404 });
    }

    if (currentTimeTable.studentTimeTables) {
      const messagePromises = currentTimeTable.studentTimeTables.map(
        async (studentTimeTable) => {
          const parentTelegramId = studentTimeTable.student?.parentsTelegramId;
          const studentName = studentTimeTable.student?.name;

          // Find the current attendance for the lesson
          const currentAttendance = studentTimeTable.attendances?.find(
            (attendance) => attendance.lessonId === lessonId
          );

          const mark = currentAttendance?.mark;

          if (parentTelegramId && studentName && mark !== undefined) {
            const message = `Asalom alekum! Bugun farzandingiz ${studentName} darsga ${
              currentAttendance?.isComing ? "keldi" : "kelmadi"
            }. Vazifa uchun olgan bahosi: ${mark}`;
            return sendMessageToBot(parentTelegramId, message);
          } else {
            console.warn(
              "Incomplete data for sending message:",
              studentTimeTable
            );
          }
        }
      );

      // Wait for all messages to be sent
      await Promise.all(messagePromises);
    }

    return NextResponse.json(updatedLesson);
  } catch (error) {
    console.log("[UPDATE_LESSON_TIMETABLE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
