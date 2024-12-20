import About from "./_components/about";
import Blogs from "./_components/blogs";
import Consultation from "./_components/consultation";
import Courses from "./_components/courses";
import FloatingAdminButton from "./_components/floating-admin-button";
import Footer from "./_components/footer";
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
      <FloatingAdminButton />
      <div className="p-2 md:p-3">
        <Hero />
      </div>
      {/* About */}
      <div>
        <About />
      </div>
      {/* Slider images */}
      <div className="mt-7">
        <MarqueeImages />
      </div>
      {/* why us */}
      <div className=" mt-[30px] md:mt-[80px]">
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
      {/* blogs and news */}
      <div>
        <Blogs />
      </div>
      {/* CONSULTATION */}
      <div id="consultation-section" className="mt-6 md:mt-28 pt-6">
        <Consultation />
      </div>
      {/* our location */}
      <div className="mt-4 md:mt-20">
        <OurLocation />
      </div>
      {/* footer */}
      <div className="p-2 md:p-3">
        <Footer />
      </div>
    </div>
  );
}
