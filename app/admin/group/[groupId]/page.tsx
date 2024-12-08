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
      lessons: true,
      studentTimeTables: {
        include: {
          attendances: {
            include: {
              lesson: true,
            },
          },
          student: true,
          timetable: true,
        },
      },
    },
  });

  return (
    <div className="text-white">
      <LessonsTable groupId={groupId} data={currentGroupTimeTables} />
    </div>
  );
};

export default GroupIdPage;
