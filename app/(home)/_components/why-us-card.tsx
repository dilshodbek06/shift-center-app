import Image from "next/image";

const WhyUsCard = () => {
  return (
    <div className="max-w-[560px] min-h-[200px] rounded-xl why-use-div pl-[19px] pt-[25px]">
      <div className="flex items-center gap-[15px]">
        <div className="w-[50px] h-[50px] rounded-full border relative">
          <Image alt="logo" src="/brand.svg" fill />
        </div>
        <h5 className="text-white font-bold text-2xl">LOREM IPSOM</h5>
      </div>
      <div className="mt-[24px]">
        <p className="text-white font-normal ml-[20px] text-xl max-w-[340px] md:max-w-[370px]">
          Lorem ipsom lorem ipsom lorem imsom
        </p>
      </div>
    </div>
  );
};

export default WhyUsCard;
