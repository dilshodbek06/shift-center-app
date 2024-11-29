import About from "./_components/about";
import Hero from "./_components/hero";
import MarqueeImages from "./_components/marquee-images";
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
      {/* our directions */}
      {/* courses */}
      {/* CONSULTATION */}
      {/* our location */}
      {/* footer */}
    </div>
  );
}
