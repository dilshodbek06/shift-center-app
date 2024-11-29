import About from "./_components/about";
import Hero from "./_components/hero";
import MarqueeImages from "./_components/marquee-images";

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
      <div></div>
      {/* students opinion */}
      {/* our directions */}
      {/* courses */}
      {/* CONSULTATION */}
      {/* our location */}
      {/* footer */}
    </div>
  );
}
