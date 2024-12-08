"use client";

import { Button } from "@/components/ui/button";
import AddGroupModal from "./add-group-modal";
import { useState } from "react";
import { Teacher } from "@prisma/client";

interface AddGroupFormProps {
  teachers: Teacher[];
}

const AddGroupForm = ({ teachers }: AddGroupFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="my-2 flex justify-end">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-[#31A8FF]  hover:bg-[#219bf1]"
        >
          + Add new
        </Button>
      </div>
      <div>
        <AddGroupModal
          teachers={teachers}
          handleClose={() => setIsOpen(false)}
          open={isOpen}
          setIsOpen={() => setIsOpen(false)}
        />
      </div>
    </>
  );
};

export default AddGroupForm;
