"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import MainSidebar from "./_components/main-sidebar";
import SidebarHeader from "./_components/sidebar-header";
import { useRef } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  return (
    <SidebarProvider ref={elementRef}>
      <MainSidebar />
      <main className="w-full bg-[#001E36]">
        <SidebarHeader elementRef={elementRef} />
        <div className="p-3 bg-[#001E36]">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default MainLayout;
