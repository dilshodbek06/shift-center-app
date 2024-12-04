import LessonsTable from "./_components/lessons-table";

const GroupIdPage = ({
  params: { groupId },
}: {
  params: { groupId: string };
}) => {
  return (
    <div className="text-white">
      <LessonsTable />
    </div>
  );
};

export default GroupIdPage;
