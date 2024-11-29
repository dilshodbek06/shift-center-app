import Image from "next/image";

const StudentOpinionCard = () => {
  return (
    <div className="w-full sm:max-w-[390px] min-h-[429px] rounded-xl student-opinion-card p-[25px]">
      <p className="text-lg font-normal text-white max-w-[320px] whitespace-normal line-clamp-6">
        lorem imsom lorem ipsom lorem imsom lorem ipsom lorem imsom lorem ipsom
        lorem imsom lorem ipsom lorem imsom lorem ipsom lorem imsom lorem ipsom
        lorem imsom lorem ipsom lorem imsom lorem ipsom lorem imsom lorem ipsom
      </p>
      <hr className="bg-white py-[1.2px] mt-7 rounded" />
      <div className="mt-7">
        <div className="w-[60px] h-[60px] rounded-full border relative">
          <Image alt="logo" src="/brand.svg" fill />
        </div>
        <p className="text-white font-bold text-lg mt-2">DALER AXTAMOV</p>
        <p className="text-white font-normal text-base ">SMM MENEJER</p>
      </div>
    </div>
  );
};

export default StudentOpinionCard;
