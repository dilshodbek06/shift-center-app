import { Button } from "@/components/ui/button";
import Header from "./header";

const Hero = () => {
  return (
    <div className="min-h-[580px] rounded-[15px] hero-div relative py-6 overflow-hidden">
      <div className="absolute w-[350px] h-[350px] left-div top-[30%] left-[-400px] rounded-full "></div>
      <div className="absolute w-[350px] h-[350px] right-div -bottom-1 right-[-400px] rounded-full border rotate-45"></div>
      <div className="container max-w-6xl mx-auto px-3">
        <Header />
        <div className=" pt-16 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-6xl max-w-[730px] font-bold uppercase text-white">
              10 oyda yangi kasb o’rganing!
            </h1>
            <h3 className="text-gray-50 text-3xl uppercase mt-[90px] max-w-[760px]">
              Buxorodagi eng sifatli dasturlash va kompyuter kurslari!
            </h3>
            <Button className="bg-[#31A8FF] py-7 px-8 mt-[50px] text-lg hover:bg-[#219bf1] rounded-md">
              BEPUL KONSULTATSIYA!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
