"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  ChevronUp,
  FileUser,
  GraduationCap,
  Home,
  LayoutDashboard,
  LogOutIcon,
  Newspaper,
  Settings,
  SettingsIcon,
  User2,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const adminRoutes = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Teacher",
    url: "/admin/teacher",
    icon: FileUser,
  },
  {
    title: "Student",
    url: "/admin/student",
    icon: GraduationCap,
  },
  {
    title: "Groups",
    url: "/admin/group",
    icon: Users,
  },
  {
    title: "Blog",
    url: "/admin/blog",
    icon: Newspaper,
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
  {
    title: "Website",
    url: "/",
    icon: Home,
  },
];

const MainSidebar = () => {
  const location = usePathname();
  return (
    <Sidebar>
      <SidebarContent className="bg-[#31A8FF] text-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white font-bold text-lg">
            Shift Academy
          </SidebarGroupLabel>
          <hr className="mt-3 bg-gray-500" />
          <SidebarGroupContent className="mt-3">
            <SidebarMenu>
              {adminRoutes.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Link href={item.url}>
                    <SidebarMenuButton
                      isActive={location === item.url}
                      className="cursor-pointer hover:bg-white py-1"
                      asChild
                    >
                      <div className="flex items-center">
                        <item.icon size={24} className="size-7" />
                        <span className="text-lg">{item.title}</span>
                      </div>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-[#31A8FF] text-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                className="data-[state=closed]:ring-white"
                asChild
              >
                <SidebarMenuButton>
                  <User2 /> Admin
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem className="flex items-center justify-between">
                  <span>Settings</span>
                  <SettingsIcon className="size-5" />
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center justify-between">
                  <span>Log out</span>
                  <LogOutIcon className="size-5" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default MainSidebar;
