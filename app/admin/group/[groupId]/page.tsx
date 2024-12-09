import prisma from "@/lib/db";
import LessonsTable from "./_components/lessons-table";

const GroupIdPage = async ({
  params: { groupId },
}: {
  params: { groupId: string };
}) => {
  const currentGroupTimeTables = await prisma.timeTable.findMany({
    where: {
      groupId,
    },
    include: {
      group: true,
      lessons: {
        orderBy: {
          name: "asc",
        },
      },
      studentTimeTables: {
        include: {
          attendances: {
            include: {
              lesson: true,
            },
            orderBy: {
              lessonOrder: "asc",
            },
          },
          student: true,
          timetable: true,
        },
      },
    },
  });

  const allStudents = await prisma.student.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="text-white">
      <LessonsTable
        studentsData={allStudents}
        groupId={groupId}
        data={currentGroupTimeTables}
      />
    </div>
  );
};

export default GroupIdPage;
