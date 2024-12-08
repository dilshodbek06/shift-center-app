"use client";

import { ColumnDef } from "@tanstack/react-table";

import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Teacher } from "@prisma/client";
import { formatDateShort } from "@/helpers/date-format";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Teacher>[] = [
  {
    accessorKey: "id",
    header: "№",
    cell: ({ row }) => {
      return <div>{row.index + 1}</div>;
    },
  },
  {
    accessorKey: "profileImage",
    header: "Profile",
    cell: ({ row }) => {
      const profileImage = row.original.profileImage;
      return (
        <div className="rounded-full">
          <Image
            alt="logo"
            src={profileImage ?? "/avatar.svg"}
            width={40}
            height={40}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "firstname",
    header: "FirstName",
  },
  {
    accessorKey: "lastname",
    header: "LastName",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "profession",
    header: "Profession",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "createdAt",
    header: "Joining Date",
    cell: ({ row }) => {
      const currentDate = row.original.createdAt;
      return <div>{formatDateShort(currentDate)}</div>;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    id: "actions",
    cell: ({}) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="data-[state=closed]:ring-white"
          >
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Delete</DropdownMenuItem>
            <DropdownMenuItem>Update</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];