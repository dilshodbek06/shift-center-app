import { Button } from "@/components/ui/button";
import Logo from "./logo";

const Header = () => {
  return (
    <div className=" flex items-center justify-between">
      <Logo />
      <Button className="bg-[#31A8FF] py-5 hover:bg-[#219bf1] rounded-md">
        +998 94 124 00 41
      </Button>
    </div>
  );
};

export default Header;
