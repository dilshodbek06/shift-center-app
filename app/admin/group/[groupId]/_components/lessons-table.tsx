import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

const LessonsTable = () => {
  return (
    <div className="min-h-[30rem]">
      <div className="overflow-x-auto ">
        <table className="min-w-full border border-gray-300 bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 border border-gray-300 text-center text-sm font-bold text-gray-700">
                Students=13
              </th>
              {Array.from({ length: 12 }, (_, index) => (
                <th
                  key={index}
                  className="px-6 py-3 border border-gray-300 text-left text-sm font-medium text-gray-700"
                >
                  <div className="text-center gap-y-2 flex flex-col items-center">
                    <b className="block">{`Lesson-${index + 1}`}</b>
                    <label
                      htmlFor={`imtihon-${index + 1}`}
                      className="flex items-center gap-x-1"
                    >
                      <span className="select-none">imtihon</span>
                      <input id={`imtihon-${index + 1}`} type="checkbox" />
                    </label>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 text-sm text-gray-600">
                <div className="relative h-[70px] flex justify-center items-center">
                  <button className="w-[20px] h-[20px] rounded-md bg-red-500 hover:bg-red-600 absolute top-1 right-1 text-white ">
                    x
                  </button>
                  <h2 className="font-bold">Rustam Tursunov</h2>
                </div>
              </td>
              {Array.from({ length: 12 }, (_, index) => (
                <td
                  key={index}
                  className="border border-gray-300 text-sm text-gray-600"
                >
                  <div className="h-[70px] min-w-[160px] flex justify-center items-center relative">
                    <div className="space-y-1">
                      <div className="flex items-center gap-x-1">
                        <p>homework=</p>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block ">
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="1">2</option>
                          <option value="1">3</option>
                          <option value="1">4</option>
                        </select>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <label
                          htmlFor="isCome"
                          className="flex items-center gap-x-1"
                        >
                          <span>Kelganmi</span>
                          <input id="isCome" type="checkbox" />
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
            <tr>
              <td className="border border-gray-300 text-sm text-gray-600">
                <div className="relative h-[70px] flex justify-center items-center">
                  <button className="w-[20px] h-[20px] rounded-md bg-red-500 hover:bg-red-600 absolute top-1 right-1 text-white ">
                    x
                  </button>
                  <h2 className="font-bold">Alisher Karimov</h2>
                </div>
              </td>
              {Array.from({ length: 12 }, (_, index) => (
                <td
                  key={index}
                  className="border border-gray-300 text-sm text-gray-600"
                >
                  <div className="h-[70px] min-w-[160px] flex justify-center items-center relative">
                    <div className="space-y-1">
                      <div className="flex items-center gap-x-1">
                        <p>homework=</p>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block ">
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="1">2</option>
                          <option value="1">3</option>
                          <option value="1">4</option>
                        </select>
                      </div>
                      <div className="flex items-center gap-x-1">
                        <label
                          htmlFor="isCome"
                          className="flex items-center gap-x-1"
                        >
                          <span>Kelganmi</span>
                          <input id="isCome" type="checkbox" />
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LessonsTable;
