"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CalendarClock, MoreVertical, Pencil } from "lucide-react";
import TimeTableModal from "./time-table-modal";
import { useState } from "react";
import AddStudentModal from "./add-student-modal";
import { Lesson, Student } from "@prisma/client";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import PageLoader from "@/components/shared/page-loader";

type CustomGroupTimeTables = {
  id: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  group: {
    id: string;
    name: string;
    teacherId: string;
    createdAt: Date;
    updatedAt: Date;
  };
  lessons: Lesson[];
  studentTimeTables: Array<{
    id: string;
    studentId: string | null;
    paid: boolean;
    createdAt: Date;
    updatedAt: Date;
    timetableId: string;
    timetable: {
      id: string;
      price: number;
      createdAt: Date;
      updatedAt: Date;
      groupId: string;
    };
    student: {
      id: string;
      name: string;
      email: string;
      phone: string;
      profileImage: string;
      gender: "Female" | "Male";
      parentsTelegramId: string | null;
      createdAt: Date;
      updatedAt: Date;
    } | null; // student can be null
    attendances: Array<{
      id: string;
      studentTimeTableId: string;
      month: number | null;
      mark: number | null;
      isComing: boolean;
      lessonId: string;
      createdAt: Date;
      updatedAt: Date;
      lesson: {
        id: string;
        name: string;
        file: string | null;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
      };
    }>;
  }>;
};

interface LessonsTableProps {
  groupId: string;
  studentsData: Student[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: CustomGroupTimeTables[];
}

const LessonsTable = ({ groupId, data, studentsData }: LessonsTableProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [studentModalOpen, setStudentModalOpen] = useState(false);
  const [examLoading, setExamLoading] = useState(false);
  const [selectedTimeTableId, setSelectedTimeTableId] = useState<string>(
    data[0]?.id || ""
  );

  // check lesson is Exam
  const handleCheckLessonIsExam = async (check: boolean, lessonId: string) => {
    try {
      setExamLoading(true);
      await axios.patch(`/api/lesson/${lessonId}/exam`, {
        isExam: check,
      });
      router.refresh();
      toast.success("Updated success.");
    } catch (error) {
      toast.error("Something went wrong.", error!);
    } finally {
      setExamLoading(false);
    }
  };

  // mark is come student
  const handleStudentIsCome = async (
    studentId: string | undefined,
    attendanceId: string,
    isCome: boolean
  ) => {
    try {
      setExamLoading(true);
      await axios.post(`/api/lesson/exam`, {
        attendanceId,
        studentId,
        isCome,
      });
      router.refresh();
      toast.success("Updated success.");
    } catch (error) {
      toast.error("Something went wrong.", error!);
    } finally {
      setExamLoading(false);
    }
  };

  // mark student
  const handleChangeStudentMark = async (
    mark: string,
    studentId: string | undefined,
    attendanceId: string
  ) => {
    try {
      setExamLoading(true);
      await axios.post(`/api/lesson/mark`, {
        attendanceId,
        studentId,
        mark: parseInt(mark),
      });
      router.refresh();
      toast.success("Updated success.");
    } catch (error) {
      toast.error("Something went wrong.", error!);
    } finally {
      setExamLoading(false);
    }
  };

  if (examLoading) {
    return (
      <div>
        <PageLoader />
      </div>
    );
  }

  return (
    <div className="min-h-[30rem]">
      {/* time table list */}
      <div className="my-2 flex items-center">
        <div className="flex min-h-[60px] items-center gap-x-1 overflow-x-auto">
          {data.map((item, ind) => (
            <div
              onClick={() => setSelectedTimeTableId(item.id)}
              key={ind}
              className={` ${
                item.id === selectedTimeTableId && "bg-[#31A8FF]"
              } cursor-pointer border border-[#31A8FF] text-white select-none rounded-md   px-3 py-1 hover:bg-[#2499ec] flex flex-col items-center`}
            >
              <div className="flex justify-center my-1 cursor-pointer">
                <Pencil className="size-5" />
              </div>
              <p>{ind + 1}-Month</p>
              <p className="text-sm">Price:{item.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <Button
          onClick={() => setOpen(true)}
          className="py-[30px] h-full ml-1 bg-[#31A8FF] hover:bg-[#2499ec]"
        >
          Add
        </Button>
      </div>
      {/* [add student or close day] form */}
      <div className="my-1 flex items-center gap-1">
        <Button
          onClick={() => setStudentModalOpen(true)}
          className="bg-transparent border px-4 text-white hover:bg-[#31A8FF] "
        >
          Add Student
        </Button>
        <Button className="bg-transparent border  text-white hover:bg-[#31A8FF] flex items-center gap-x-2">
          <span className="mt-[2px]">Close day</span>{" "}
          <CalendarClock className="size-5" />
        </Button>
      </div>
      {/* students data table */}
      {data.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 border border-gray-300 text-center text-sm font-bold text-gray-700">
                  Students=
                  {
                    data.filter((d) => d.id === selectedTimeTableId)[0]
                      ?.studentTimeTables?.length
                  }
                </th>
                {data
                  .filter((t) => t.id === selectedTimeTableId)[0]
                  ?.lessons.slice()
                  .sort((a, b) => {
                    const numA = parseInt(a.name.split("-")[1], 10);
                    const numB = parseInt(b.name.split("-")[1], 10);
                    return numA - numB;
                  })
                  .map((lesson, index) => (
                    <th
                      key={index}
                      className={`px-6 py-3 border border-gray-300 text-left text-sm font-medium text-gray-700 ${
                        lesson.isExam && "text-white bg-slate-700"
                      }`}
                    >
                      <div className="text-center gap-y-2 flex flex-col items-center">
                        <b className="block">{lesson.name}</b>
                        <label
                          htmlFor={`imtihon-${index + 1}`}
                          className="flex items-center gap-x-1"
                        >
                          <span className="select-none">imtihon</span>
                          <input
                            onChange={(e) =>
                              handleCheckLessonIsExam(
                                e.target.checked,
                                lesson.id
                              )
                            }
                            checked={lesson.isExam}
                            id={`imtihon-${index + 1}`}
                            type="checkbox"
                          />
                        </label>
                      </div>
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {data
                .filter((d) => d.id === selectedTimeTableId)[0]
                ?.studentTimeTables?.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 text-sm text-gray-600">
                      <div className="relative h-[70px] flex justify-center items-center">
                        <button className="w-[20px] h-[20px] rounded-md bg-red-500  hover:bg-red-600 absolute top-1 right-1 text-white ">
                          x
                        </button>
                        <h2 className="font-bold text-center">
                          {item?.student?.name}
                        </h2>
                      </div>
                    </td>
                    {item?.attendances?.map((atten, ind) => (
                      <td
                        key={ind}
                        className="border border-gray-300 text-sm text-gray-600"
                      >
                        <div className="h-[70px] min-w-[160px] flex justify-center items-center relative">
                          <div className="space-y-1">
                            <div className="flex items-center gap-x-1">
                              <p>homework=</p>
                              <select
                                id={atten.id}
                                onChange={(e) =>
                                  handleChangeStudentMark(
                                    e.target.value,
                                    item.student?.id,
                                    atten.id
                                  )
                                }
                                value={atten.mark?.toString()}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block "
                              >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </div>
                            <div className="flex items-center gap-x-1">
                              <label
                                htmlFor={`isCome-${atten.id}`}
                                className="flex items-center gap-x-1"
                              >
                                <span>Kelganmi</span>
                                <input
                                  onChange={(e) =>
                                    handleStudentIsCome(
                                      item?.student?.id,
                                      atten.id,
                                      e.target.checked
                                    )
                                  }
                                  id={`isCome-${atten.id}`}
                                  type="checkbox"
                                  checked={atten.isComing}
                                />
                              </label>
                            </div>
                          </div>
                          <div className="absolute top-1 right-1">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-4 w-4 p-0">
                                  <span className="sr-only">Open menu</span>
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Copy link</DropdownMenuItem>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      <div>
        <TimeTableModal
          handleClose={() => setOpen(false)}
          open={open}
          setIsOpen={() => setOpen(false)}
          groupId={groupId}
        />
        <AddStudentModal
          addedStudents={
            data
              .find((d) => d?.id === selectedTimeTableId)
              ?.studentTimeTables?.map((item) => item.student?.id || "")
              .filter((id): id is string => id !== "") || []
          }
          data={studentsData}
          groupId={groupId}
          timeTableId={selectedTimeTableId}
          handleClose={() => setStudentModalOpen(false)}
          open={studentModalOpen}
          setIsOpen={() => setStudentModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default LessonsTable;
