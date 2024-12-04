import Image from "next/image";
import MessengerIcons from "./messenger-icons";

const Footer = () => {
  return (
    <div className="min-h-[160px] rounded-[15px] hero-div relative py-6 pt-[42px] overflow-hidden mt-6 bg-[#D9D9D91A]">
      <div className="absolute w-[350px] h-[350px] left-div top-[-30%] left-[-370px] rounded-full "></div>
      <div className="absolute w-[350px] h-[350px] right-div -bottom-10 right-[-400px] rounded-full border rotate-45"></div>
      <div className="container max-w-6xl mx-auto px-3 flex md:flex-row flex-col md:items-center md:justify-between">
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <Image alt="logo" src="./logo.svg" width={60} height={70} />
          <p className="text-white font-bold">
            © “SHIFT ACADEMY”, 2024 - Barcha huquqlar himoyalangan.
          </p>
        </div>
        <div className="flex flex-col md:items-end mt-5 md:mt-0">
          <MessengerIcons />
          <p className="text-white mt-4">+998 94 124 00 41</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
