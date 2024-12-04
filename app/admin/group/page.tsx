import { StudentGroupCard } from "./_components/student-group-card";

const GroupPage = () => {
  return (
    <div className="text-white">
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3">
        <StudentGroupCard />
        <StudentGroupCard />
        <StudentGroupCard />
        <StudentGroupCard />
      </div>
    </div>
  );
};

export default GroupPage;
