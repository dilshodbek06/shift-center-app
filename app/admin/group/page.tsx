import { StudentGroupCard } from "./_components/student-group-card";
import AddGroupForm from "./_components/add-group-form";
import prisma from "@/lib/db";

const GroupPage = async () => {
  const teachers = await prisma.teacher.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const groups = await prisma.group.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      name: true,
      id: true,
      createdAt: true,
      teacher: true,
      timeTables: {
        select: {
          studentTimeTables: true,
        },
      },
    },
  });

  return (
    <div className="text-white">
      <AddGroupForm teachers={teachers} />
      {groups.length <= 0 && (
        <div className="min-h-[40px] text-center">
          <h3>Group hasn&apos;t been created yet</h3>
        </div>
      )}
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3">
        {groups.map((group) => {
          const totalStudents = group.timeTables.reduce(
            (count, timeTable) =>
              count + (timeTable.studentTimeTables?.length || 0),
            0
          );

          return (
            <StudentGroupCard
              key={group.id}
              name={group.name}
              id={group.id}
              totalStudents={totalStudents}
              teacherName={
                group.teacher.firstname + " " + group.teacher.lastname
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default GroupPage;
