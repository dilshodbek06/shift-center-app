import prisma from "@/lib/db";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import FilterSettingsNavbar from "./_components/filter-settings-navbar";


const TeacherPage = async () => {
  const teachersData = await prisma.teacher.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="text-white">
      <FilterSettingsNavbar />
      <div className="mt-2">
        <DataTable columns={columns} data={teachersData} />
      </div>
    </div>
  );
};

export default TeacherPage;
