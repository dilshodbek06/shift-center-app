"use client";

import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathName = usePathname();
  const fixedPath = pathName.replace("/admin/", "");

  return (
    <>
      <Separator orientation="vertical" className="mr-2 h-4 opacity-70" />
      <p className="text-gray-300">
        {fixedPath.charAt(0).toUpperCase() +
          fixedPath.slice(
            1,
            fixedPath.lastIndexOf("/") !== -1
              ? fixedPath.lastIndexOf("/")
              : undefined
          )}
      </p>
    </>
  );
};

export default Breadcrumb;
