import { Button } from "@/components/ui/button";
import Link from "next/link";

const FilterSettingsNavbar = () => {
  return (
    <div className="min-h-[60px]  flex items-center justify-end">
      {/* view types */}
      {/* <div className="flex items-center gap-x-2">
        <Button
          aria-label="list"
          size="icon"
          className="bg-[#31A8FF] text-white hover:bg-[#219bf1]"
        >
          <List className="size-5" />
        </Button>
        <Button
          aria-label="grid"
          size="icon"
          className="bg-white text-black hover:bg-[#219bf1]"
        >
          <LayoutGrid className="size-5" />
        </Button>
      </div> */}
      <div>
        <Link href="/admin/student/create">
          <Button className="bg-[#31A8FF]  hover:bg-[#219bf1]">
            + Add new
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FilterSettingsNavbar;
