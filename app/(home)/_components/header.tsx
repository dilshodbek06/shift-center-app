"use client";

import { Button } from "@/components/ui/button";
import Logo from "./logo";
import Link from "next/link";

const Header = () => {
  const phoneNumber = "+998941240041";
  return (
    <div className=" flex items-center justify-between">
      <Logo />
      <Link href={`tel:${phoneNumber}`}>
        <Button className="bg-[#31A8FF] text-sm md:text-base px-3 md:px-4 py-2 md:py-5 hover:bg-[#219bf1] rounded-md">
          +998 94 124 00 41
        </Button>
      </Link>
    </div>
  );
};

export default Header;
