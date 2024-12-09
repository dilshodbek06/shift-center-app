"use client";
import { Button } from "@/components/ui/button";
import { Student } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { Drawer } from "vaul";

interface AddStudentModalProps {
  data: Student[];
  open: boolean;
  groupId: string;
  timeTableId: string;
  addedStudents: string[];
  setIsOpen: () => void;
  handleClose: () => void;
}

const AddStudentModal = ({
  handleClose,
  open,
  setIsOpen,
  data,
  groupId,
  timeTableId,
  addedStudents,
}: AddStudentModalProps) => {
  //
  const router = useRouter();
  const [selectedStudents, setSelectedStudents] = useState<Set<string>>(
    new Set()
  );

  const [loading, setLoading] = useState(false);

  // Handle checkbox change
  const handleCheckboxChange = (studentId: string, isChecked: boolean) => {
    setSelectedStudents((prev) => {
      const updated = new Set(prev);
      if (isChecked) {
        updated.add(studentId);
      } else {
        updated.delete(studentId);
      }
      return updated;
    });
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const selected = Array.from(selectedStudents).map(String);
      await axios.post(`/api/group/${groupId}/timetable/add-student`, {
        timeTableId,
        students: selected,
      });
      router.refresh();
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
                Choose Students
              </h2>
              {/* Forms */}
              <div className="overflow-y-auto scrollbar-thin max-h-[20rem]">
                <div className="max-w-sm mt-3 mx-auto">
                  {data.map((student, index) => (
                    <div
                      key={student.id}
                      className="flex items-center gap-x-2 p-1 cursor-pointer"
                    >
                      <label
                        htmlFor={index.toString()}
                        className="flex items-center gap-x-2 cursor-pointer"
                      >
                        <input
                          onChange={(e) =>
                            handleCheckboxChange(student.id, e.target.checked)
                          }
                          id={index.toString()}
                          type="checkbox"
                          className="-mt-1"
                          disabled={addedStudents.includes(student.id)}
                          checked={
                            addedStudents.includes(student.id) ||
                            selectedStudents.has(student.id)
                          }
                        />
                        <p className="font-semibold">{student.name}</p>
                      </label>
                    </div>
                  ))}
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

export default AddStudentModal;
