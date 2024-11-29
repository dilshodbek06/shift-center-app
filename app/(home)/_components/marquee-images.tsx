const MarqueeImages = () => {
  return (
    <div className="marquee-div-outer pt-[70px] pb-[40px]">
      <div className="relative overflow-hidden">
        {/* Marquee wrapper */}
        <div className="flex animate-marquee space-x-8">
          {/* Images */}
          {[...Array(10)].map((_, i) => (
            <div
              className="min-h-[300px] w-1/4 min-w-[300px] border rounded-md"
              key={i}
            >
              Image
            </div>
          ))}
        </div>
        {/* Duplicate marquee for seamless effect */}
        <div className="flex absolute top-0 animate-marquee space-x-8">
          {[...Array(10)].map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeImages;
