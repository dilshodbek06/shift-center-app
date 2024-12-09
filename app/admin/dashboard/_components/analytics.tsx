import { FileUser, GraduationCap, Newspaper, UsersRound } from "lucide-react";
import AnalyticsCard from "./analytics-card";
import prisma from "@/lib/db";

const Analytics = async () => {
  const teachersCount = await prisma.teacher.count();
  const studentsCount = await prisma.student.count();
  const groupsCount = await prisma.group.count();

  return (
    <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <AnalyticsCard count={teachersCount} icon={FileUser} name="Teachers" />
      <AnalyticsCard
        count={studentsCount}
        icon={GraduationCap}
        name="Students"
      />
      <AnalyticsCard count={groupsCount} icon={UsersRound} name="Groups" />
      <AnalyticsCard count={3} icon={Newspaper} name="Blogs" />
    </div>
  );
};

export default Analytics;
