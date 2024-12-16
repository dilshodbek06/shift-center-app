import StudentOpinionCard from "./student-opinion-card";

const StudentOpinion = () => {
  return (
    <div className="mt-6 relative min-h-[560px] py-2">
      <div className="absolute w-[350px] h-[350px] left-div -bottom-1 left-[-400px] rounded-full "></div>
      <div className="container max-w-6xl mx-auto px-2 md:px-3">
        <h1 className="text-white font-bold text-xl md:text-4xl">
          O’QUVCHILARNING FIKRLARI
        </h1>
        <div className="mt-8 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <StudentOpinionCard />
          <StudentOpinionCard />
          <StudentOpinionCard />
        </div>
      </div>
    </div>
  );
};

export default StudentOpinion;
