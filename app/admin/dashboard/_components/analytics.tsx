import { FileUser, GraduationCap, Newspaper, UsersRound } from "lucide-react";
import AnalyticsCard from "./analytics-card";
import prisma from "@/lib/db";
import dynamic from "next/dynamic";
// import ChartDiagram from "./chart-diagram";

const ChartDiagram = dynamic(() => import("./chart-diagram"), { ssr: false });

const Analytics = async () => {
  const teachersCount = await prisma.teacher.count();
  const studentsCount = await prisma.student.count();
  const groupsCount = await prisma.group.count();
  const blogsCount = await prisma.blog.count();

  return (
    <div>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <AnalyticsCard count={teachersCount} icon={FileUser} name="Teachers" />
        <AnalyticsCard
          count={studentsCount}
          icon={GraduationCap}
          name="Students"
        />
        <AnalyticsCard count={groupsCount} icon={UsersRound} name="Groups" />
        <AnalyticsCard count={blogsCount} icon={Newspaper} name="Blogs" />
      </div>
      <div className="grid place-items-center">
        <ChartDiagram
          blogVal={blogsCount}
          groupVal={groupsCount}
          studentVal={studentsCount}
          teacherVal={teachersCount}
        />
      </div>
    </div>
  );
};

export default Analytics;
