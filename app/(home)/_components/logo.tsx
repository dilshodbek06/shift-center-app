import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      alt="brand-logo"
      src="/brand.svg"
      width={110}
      height={100}
      loading="lazy"
    />
  );
};

export default Logo;
