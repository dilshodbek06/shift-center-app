"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Drawer } from "vaul";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Teacher } from "@prisma/client";
import { useRouter } from "next/navigation";

interface AddGroupModalProps {
  open: boolean;
  setIsOpen: () => void;
  handleClose: () => void;
  teachers: Teacher[];
}

const AddGroupModal = ({
  handleClose,
  open,
  setIsOpen,
  teachers,
}: AddGroupModalProps) => {
  //
  const router = useRouter();
  const [groupName, setGroupName] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (teacherId === "" || groupName === "") {
      toast.error("Please fill all the fields.");
      return;
    }
    try {
      setLoading(true);
      await axios.post("/api/group", { groupName, teacherId });
      router.push("/admin/group");
      router.refresh();
      toast.success("Created success.");
      handleClose();
    } catch (error) {
      toast.error("Something went wrong.", error!);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Drawer.Root open={open} onOpenChange={setIsOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-gray-100 flex flex-col items-center rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none z-[200]">
            <Drawer.Title className="hidden"></Drawer.Title>
            <Drawer.Description className="hidden"></Drawer.Description>

            <div className="w-full p-4 bg-white rounded-t-[10px]">
              {/* Handle Drawer */}
              <div
                aria-hidden
                className="mx-auto w-12 h-1.5 rounded-full bg-gray-300 mb-6"
              />
              <h2 className="font-bold text-center md:text-xl">
                Create new Group
              </h2>
              {/* Forms */}
              <div className="overflow-y-auto scrollbar-thin max-h-[20rem]">
                <div className="min-h-[60px] mt-4 max-w-md mx-auto">
                  <label htmlFor="name">Group name *</label>
                  <Input
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    id="name"
                    type="text"
                    placeholder="name of the group..."
                  />
                  <div className="my-4">
                    <label htmlFor="teacher">Teacher of this group *</label>

                    <Select onValueChange={(val) => setTeacherId(val)}>
                      <SelectTrigger id="teacher" className="min-w-[180px]">
                        <SelectValue placeholder="Select a teacher " />
                      </SelectTrigger>
                      <SelectContent className="z-[300]">
                        {teachers.map((teacher, ind) => (
                          <SelectItem key={ind} value={teacher.id}>
                            {teacher.firstname + " " + teacher.lastname}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <p className="mt-6 text-gray-600 text-center text-sm">
                    you can add students later.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end sm:justify-center gap-x-4 mt-4">
                <Button
                  onClick={handleClose}
                  variant="outline"
                  className="md:px-6"
                >
                  Cancel
                </Button>
                <Button
                  disabled={loading}
                  onClick={handleSave}
                  className="md:px-6"
                >
                  {loading ? "Loading..." : "Save"}
                </Button>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default AddGroupModal;
