import Image from "next/image";
import React from "react";

const AboutCard = () => {
  return (
    <div className="max-w-[380px] mx-auto w-full min-h-[250px] rounded-2xl about-div pt-[25px] pl-[20px]">
      <div>
        <div className="w-[60px] h-[60px] rounded-full border relative">
          <Image alt="logo" src="/brand.svg" fill />
        </div>
      </div>
      <div className="mt-[14px]">
        <p className="text-white max-w-[320px] font-normal">
          Akademiyamiz maqsadi zamonaviy kasblarga qiziqadigan va o&apos;zini IT
          sohasida rivojlantirmoqchi bo&apos;lgan yoshlar uchun sifatli
          ta&apos;lim berish!
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
