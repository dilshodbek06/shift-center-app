import prisma from "@/lib/db";
import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { timeTableId, students } = await req.json();

    const cookie = cookies().get("session")?.value;
    const session = await decrypt(cookie);

    if (!session?.userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Validate inputs
    if (!timeTableId || !students || !Array.isArray(students)) {
      return new NextResponse("Invalid input", { status: 400 });
    }

    // Check if timetable exists
    const timetable = await prisma.timeTable.findUnique({
      where: { id: timeTableId },
    });
    if (!timetable) {
      return new NextResponse("Timetable not found", { status: 404 });
    }

    // Create studentTimeTable entries
    const studentTimeTables = await prisma.studentTimeTable.createMany({
      data: students.map((studentId) => ({
        timetableId: timeTableId,
        studentId, // Ensure studentId exists in `students` list
      })),
    });

    if (studentTimeTables.count === 0) {
      return new NextResponse("Failed to create student time tables", {
        status: 500,
      });
    }

    // Retrieve lessons associated with the timetable
    const lessons = await prisma.lesson.findMany({
      where: {
        timeTableId: timeTableId,
      },
    });
    if (!lessons || lessons.length === 0) {
      throw new Error("No lessons found for the provided timetable ID.");
    }

    // Retrieve created studentTimeTable entries
    const createdTimeTables = await prisma.studentTimeTable.findMany({
      where: {
        timetableId: timeTableId,
        studentId: { in: students },
      },
    });

    // Prepare attendance records
    const studentAttendances = createdTimeTables.flatMap((studentTimeTable) =>
      lessons.map((lesson, lessonInd) => ({
        studentTimeTableId: studentTimeTable.id,
        lessonId: lesson.id,
        lessonOrder: lessonInd + 1,
      }))
    );

    // Bulk insert attendance records
    await prisma.studentAttendance.createMany({
      data: studentAttendances,
    });

    return NextResponse.json(createdTimeTables);
  } catch (error) {
    console.log("[ADD_STUDENT_TO_TIMETABLE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
