"use client";

import { loginAdmin, loginTeacher } from "@/app/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, ShieldAlert } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [role, setRole] = useState<"admin" | "teacher">("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (email === "" || password === "") {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      setLoading(true);
      let errorCode: number;
      if (role === "admin") {
        const res = await loginAdmin({ email, password });
        errorCode = res.status;
      } else {
        const res = await loginTeacher({ email, password });
        errorCode = res.status;
      }
      if (errorCode === 403) {
        toast.error("Password is incorrect.");
      } else if (errorCode === 404) {
        toast.error("Email not found.");
      }
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong.", error!);
    } finally {
      setLoading(false);
    }
  };

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
              Email
            </label>
            <Input
              className="placeholder:text-gray-300 text-white"
              id="phone"
              placeholder="enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="text-white">
              Select your role
            </label>
            <div className="mt-[2px] flex items-center gap-2">
              <div
                onClick={() => setRole("admin")}
                className={`cursor-pointer p-2 rounded-md border flex items-center justify-center gap-x-2 transition w-1/2 ${
                  role === "admin" ? "bg-[#31A8FF]" : ""
                }`}
              >
                <ShieldAlert className="size-5 text-white" />
                <span className="text-white">admin</span>
              </div>
              <div
                onClick={() => setRole("teacher")}
                className={`cursor-pointer p-2 rounded-md border flex items-center justify-center gap-x-2 transition w-1/2 ${
                  role === "teacher" ? "bg-[#31A8FF]" : ""
                }`}
              >
                <GraduationCap className="size-5 text-white" />
                <span className="text-white">teacher</span>
              </div>
            </div>
          </div>

          <Button
            disabled={loading}
            onClick={handleLogin}
            className="bg-[#31A8FF] py-6 w-full mt-6 text-lg hover:bg-[#219bf1] rounded-md"
          >
            {loading ? "Loading..." : "Sign In"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
