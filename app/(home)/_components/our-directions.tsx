import OurDirectionCard from "./our-direction-card";

const OurDirections = () => {
  return (
    <div className="min-h-[380px] rounded-[15px] hero-div relative py-6 pt-[42px] overflow-hidden mt-6 bg-[#D9D9D91A]">
      <div className="absolute w-[350px] h-[350px] left-div top-[-30%] left-[-370px] rounded-full "></div>
      <div className="absolute w-[350px] h-[350px] right-div -bottom-10 right-[-400px] rounded-full border rotate-45"></div>
      <div className="container max-w-6xl mx-auto px-3">
        <h1 className="text-white font-bold text-xl md:text-4xl">
          BIZNING YO’NALISHLAR
        </h1>
        <div className="mt-8 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <OurDirectionCard />
          <OurDirectionCard />
          <OurDirectionCard />
        </div>
      </div>
    </div>
  );
};

export default OurDirections;
