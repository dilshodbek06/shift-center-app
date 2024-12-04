import { FileUser, GraduationCap, Newspaper, UsersRound } from "lucide-react";
import AnalyticsCard from "./analytics-card";

const Analytics = () => {
  return (
    <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <AnalyticsCard count={4} icon={FileUser} name="Teachers" />
      <AnalyticsCard count={56} icon={GraduationCap} name="Students" />
      <AnalyticsCard count={6} icon={UsersRound} name="Groups" />
      <AnalyticsCard count={3} icon={Newspaper} name="Blogs" />
    </div>
  );
};

export default Analytics;
