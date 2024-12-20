import Link from "next/link";
import { ShieldAlert } from "lucide-react";

const FloatingAdminButton = () => {
  return (
    <Link
      href="/admin/dashboard"
      title="Admin Page"
      className="fixed bottom-8 right-8  text-primary-foreground rounded-full bg-[#31A8FF] hover:bg-[#2b94df] p-3 shadow-lg hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 z-[20]"
      aria-label="Go to Admin Page"
    >
      <ShieldAlert className="w-6 h-6" />
    </Link>
  );
};

export default FloatingAdminButton;
