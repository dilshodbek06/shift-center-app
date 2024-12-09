import prisma from "@/lib/db";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import FilterSettingsNavbar from "./_components/filter-settings-navbar";

const StudentPage = async () => {
  const studentsData = await prisma.student.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="text-white">
      <FilterSettingsNavbar />
      <div className="mt-2">
        <DataTable columns={columns} data={studentsData} />
      </div>
    </div>
  );
};

export default StudentPage;
