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

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Student = {
  id: string;
  name: string;
  email: string;
  phone: string;
  profileImage: string;
  gender: "Male" | "Female";
  joiningDate: Date;
};

export const columns: ColumnDef<Student>[] = [
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
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "gender",
    header: "Gender",
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
    accessorKey: "joiningDate",
    header: "Joining Date",
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
