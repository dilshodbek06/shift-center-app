import About from "./_components/about";
import Consultation from "./_components/consultation";
import Courses from "./_components/courses";
import Hero from "./_components/hero";
import MarqueeImages from "./_components/marquee-images";
import OurDirections from "./_components/our-directions";
import OurLocation from "./_components/our-location";
import StudentOpinion from "./_components/student-opinion";
import WhyUs from "./_components/why-us";

export default function Home() {
  return (
    <div>
      {/* Hero includes Header */}
      <div className="p-2 md:p-3">
        <Hero />
      </div>
      {/* About */}
      <div>
        <About />
      </div>
      {/* Slider images */}
      <div className="mt-4">
        <MarqueeImages />
      </div>
      {/* why us */}
      <div className="mt-[80px]">
        <WhyUs />
      </div>
      {/* students opinion */}
      <div>
        <StudentOpinion />
      </div>
      {/* our directions */}
      <div className="p-2 md:p-3">
        <OurDirections />
      </div>
      {/* courses */}
      <div>
        <Courses />
      </div>
      {/* CONSULTATION */}
      <div className="mt-10">
        <Consultation />
      </div>
      {/* our location */}
      <div className="mt-20">
        <OurLocation />
      </div>
      {/* footer */}
    </div>
  );
}
