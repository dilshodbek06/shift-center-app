import { getUser, getUserRole } from "@/lib/dal";
import SettingsForm from "./_components/settings-form";
import { redirect } from "next/navigation";

const SettingsPage = async () => {
  const user = await getUser();
  const role = await getUserRole();

  if (role !== "ADMIN") {
    return redirect("/admin");
  }

  return (
    <div className="text-white">
      <SettingsForm user={user!} />
    </div>
  );
};

export default SettingsPage;
