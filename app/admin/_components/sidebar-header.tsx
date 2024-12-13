/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserProfile } from "./user-profile";
import Breadcrumb from "./breadcrumb";
import ScreenElements from "./screen-elements";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Admin, Teacher } from "@prisma/client";

interface SidebarHeaderProps {
  elementRef: React.RefObject<HTMLDivElement>;
}

const SidebarHeader = ({ elementRef }: SidebarHeaderProps) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const fetchCurrentUser = async () => {
    try {
      const { data } = await axios.get(`/api/user/me`);
      setUser(data);
    } catch (error) {
      setUser(null);
      toast.error("Something went wrong with fetch user.");
    }
  };

  return (
    <div
      ref={elementRef}
      className="min-h-[52.5px] border-b shadow-md w-full flex items-center"
    >
      <div className="container mx-auto px-2 max-w-[90rem] flex items-center justify-between ">
        <div className="flex items-center gap-3">
          <SidebarTrigger className="text-white hover:bg-slate-700 hover:text-white size-8" />
          <Breadcrumb />
        </div>
        <div className="flex gap-x-2 items-center md:gap-x-9">
          <ScreenElements elementRef={elementRef} />
          <div className="pr-1 relative top-1">
            <UserProfile user={user || null} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
