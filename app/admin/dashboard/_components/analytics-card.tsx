import { LucideIcon } from "lucide-react";

interface AnalyticsCardProps {
  name: string;
  count: number;
  icon: LucideIcon;
}

const AnalyticsCard = ({ count, icon: Icon, name }: AnalyticsCardProps) => {
  return (
    <div className="max-w-[260px] md:min-h-[80px] rounded-md why-use-div md:p-4 p-3">
      <div className="flex items-center gap-[15px]">
        <h1 className="text-white text-sm md:text-base font-normal uppercase">
          Total {name}
        </h1>
      </div>
      <div className="md:p-1 mt-1">
        <p className="text-xl md:text-2xl text-white font-bold">{count}x</p>
      </div>
      <div className="flex justify-end">
        <Icon className="size-6 md:size-8" />
      </div>
    </div>
  );
};

export default AnalyticsCard;
