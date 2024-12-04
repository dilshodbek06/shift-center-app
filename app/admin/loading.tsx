import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="h-[20rem] flex flex-col justify-center items-center gap-y-2">
      <Loader className="size-8 text-white animate-spin" />
      <h1 className="text-white text-xl">Loading...</h1>
    </div>
  );
};

export default Loading;
