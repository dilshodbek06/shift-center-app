import CourseCard from "./course-card";

const Courses = () => {
  return (
    <div className="mt-2 md:mt-10 relative py-6 pb-[20px]">
      <div className="absolute w-[350px] h-[350px] left-div -bottom-1 left-[-400px] rounded-full "></div>
      <div className="container max-w-6xl mx-auto px-2 md:px-3">
        <h1 className="text-white font-bold text-2xl md:text-4xl">KURSLAR</h1>
        <div className="mt-6 md:mt-12 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default Courses;
