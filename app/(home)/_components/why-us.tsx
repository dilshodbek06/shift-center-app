import WhyUsCard from "./why-us-card";

const WhyUs = () => {
  return (
    <div className="md:mt-6 relative py-6">
      <div className="absolute w-[350px] h-[350px] left-div -bottom-1 left-[-400px] rounded-full "></div>
      <div className="container max-w-6xl mx-auto px-2 md:px-3">
        <h1 className="text-white font-bold text-xl md:text-4xl">
          NIMA UCHUN “SHIFT ACADEMY”DA O&apos;QISH KERAK?
        </h1>
        <div className="mt-7 md:mt-12 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <WhyUsCard />
          <WhyUsCard />
          <WhyUsCard />
          <WhyUsCard />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
