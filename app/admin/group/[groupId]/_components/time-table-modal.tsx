"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { Drawer } from "vaul";

interface TimeTableModalProps {
  open: boolean;
  setIsOpen: () => void;
  handleClose: () => void;
  groupId: string;
}

const TimeTableModal = ({
  handleClose,
  open,
  setIsOpen,
  groupId,
}: TimeTableModalProps) => {
  //
  const router = useRouter();

  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSave = async () => {
    if (price === "") {
      toast.error("Please enter the price.");
      return;
    }
    try {
      setLoading(true);
      await axios.post(`/api/group/${groupId}/timetable`, { price });
      handleClose();
      router.refresh();
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
                Create new Time Table
              </h2>
              {/* Forms */}
              <div className="overflow-y-auto scrollbar-thin max-h-[20rem]">
                <div className="min-h-[60px] mt-4 max-w-md mx-auto">
                  <Input
                    min={0}
                    value={price}
                    onChange={(e) => {
                      const inputValue = Number(e.target.value);
                      if (inputValue >= 0) {
                        setPrice(e.target.value);
                      }
                    }}
                    type="number"
                    placeholder="price of time table..."
                  />
                  {price !== "" && (
                    <p className="mt-2 text-gray-800 text-sm">
                      Your Time Table price is{" "}
                      {parseInt(price).toLocaleString()} UZS
                    </p>
                  )}

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

export default TimeTableModal;
