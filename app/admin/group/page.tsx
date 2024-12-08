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
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3">
        {groups.map((group, ind) => (
          <StudentGroupCard
            key={ind}
            name={group.name}
            id={group.id}
            totalStudents={
              group?.timeTables.length > 0
                ? group.timeTables[group.timeTables.length - 1]
                    ?.studentTimeTables?.length
                : 0
            }
          />
        ))}
      </div>
    </div>
  );
};

export default GroupPage;
