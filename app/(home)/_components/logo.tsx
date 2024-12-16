import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        alt="brand-logo"
        src="/brand.svg"
        width={110}
        height={100}
        loading="lazy"
      />
    </Link>
  );
};

export default Logo;
