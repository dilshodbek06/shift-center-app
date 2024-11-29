import Image from "next/image";

const CourseCard = () => {
  return (
    <div className="bg-[#D9D9D91A] max-w-[560px] min-h-[200px] rounded-xl why-use-div pl-[24px] pt-[25px]">
      <div className="flex items-center gap-[34px] ">
        <div className="w-[80px] h-[80px] rounded-xl border relative">
          <Image alt="logo" src="/brand.svg" fill />
        </div>
        <div>
          <h5 className="text-white font-bold text-2xl">FRONTEND</h5>
          <p className="text-white font-bold text-xl mt-1 -mb-1">10 OY</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
