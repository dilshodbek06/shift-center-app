import prisma from "@/lib/db";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import FilterSettingsNavbar from "./_components/filter-settings-navbar";
import { getUserRole } from "@/lib/dal";

const StudentPage = async () => {
  const role = await getUserRole();
  const studentsData = await prisma.student.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="text-white">
      {role !== "TEACHER" && (
        <FilterSettingsNavbar isTeacher={role === "TEACHER"} />
      )}
      <div className="mt-2">
        <DataTable columns={columns} data={studentsData} />
      </div>
    </div>
  );
};

export default StudentPage;
