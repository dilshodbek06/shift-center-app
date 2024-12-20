import prisma from "@/lib/db";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import FilterSettingsNavbar from "./_components/filter-settings-navbar";
import { getUserRole } from "@/lib/dal";
import { redirect } from "next/navigation";

const TeacherPage = async () => {
  const role = await getUserRole();
  if (role !== "ADMIN") {
    return redirect("/admin/dashboard");
  }
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
