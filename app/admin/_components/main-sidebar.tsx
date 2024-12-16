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
import axios from "axios";

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
import { useEffect, useState } from "react";

const adminRoutes = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Teachers",
    url: "/admin/teacher",
    icon: FileUser,
  },
  {
    title: "Students",
    url: "/admin/student",
    icon: GraduationCap,
  },
  {
    title: "Groups",
    url: "/admin/group",
    icon: Users,
  },
  {
    title: "Blogs",
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

const teacherRoutes = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Students",
    url: "/admin/student",
    icon: GraduationCap,
  },
  {
    title: "Groups",
    url: "/admin/group",
    icon: Users,
  },
  {
    title: "Blogs",
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

const useUserRole = () => {
  const [role, setRole] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const fetchCurrentUser = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/user/me");
        if (isMounted) {
          setRole(data?.role || "");
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchCurrentUser();

    return () => {
      isMounted = false; // Clean up to avoid state updates on unmounted components
    };
  }, []);

  return { role, loading };
};

const MainSidebar = () => {
  const location = usePathname();
  const { role, loading } = useUserRole();
  const routes = role === "ADMIN" ? adminRoutes : teacherRoutes;

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
              {loading && <p className="text-center mb-4">Loading...</p>}
              {routes.map((item) => (
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
                  <User2 className="-mt-1" />{" "}
                  {!loading && (role === "ADMIN" ? "Admin" : "Teacher")}
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
