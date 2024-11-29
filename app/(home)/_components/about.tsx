import AboutCard from "./about-card";

const About = () => {
  return (
    <div className="mt-6 relative min-h-[560px]">
      <div className="absolute w-[350px] h-[350px] left-div -bottom-1 left-[-400px] rounded-full "></div>
      <div className="container max-w-6xl mx-auto px-3">
        <h1 className="text-white font-bold text-4xl">“SHIFT ACADEMY” BU - </h1>
        <div className="mt-12 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </div>
      </div>
    </div>
  );
};

export default About;
