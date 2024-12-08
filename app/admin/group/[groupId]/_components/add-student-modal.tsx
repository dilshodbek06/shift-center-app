"use client";
import { Button } from "@/components/ui/button";
import { Drawer } from "vaul";

interface AddStudentModalProps {
  open: boolean;
  setIsOpen: () => void;
  handleClose: () => void;
}

const AddStudentModal = ({
  handleClose,
  open,
  setIsOpen,
}: AddStudentModalProps) => {
  //
  const handleSave = () => {};

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
                Create new Student
              </h2>
              {/* Forms */}
              <div className="overflow-y-auto scrollbar-thin max-h-[20rem]">
                <div className="min-h-[420px] mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 overflow-y-auto">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Asperiores, enim?
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
                <Button onClick={handleSave} className="md:px-6">
                  Save
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
