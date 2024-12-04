"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="px-2">
      <div className="w-full min-w-[330px] sm:w-[390px] rounded-xl student-opinion-card p-[25px]">
        <div className="py-2 flex justify-center">
          <Image
            className="object-center"
            alt="logo"
            src={"/brand.svg"}
            width={160}
            height={100}
          />
        </div>
        <div className="py-7">
          <div>
            <label htmlFor="phone" className="text-white">
              Phone number
            </label>
            <Input
              className="placeholder:text-gray-300 text-white"
              id="phone"
              placeholder="enter your phone..."
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="text-white">
              Password
            </label>
            <Input
              type="password"
              className="placeholder:text-gray-300 text-white"
              id="password"
              placeholder="enter your password..."
            />
          </div>
          <Button className="bg-[#31A8FF] py-6 w-full mt-6 text-lg hover:bg-[#219bf1] rounded-md">
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
