import { getUser } from "@/lib/dal";
import SettingsForm from "./_components/settings-form";

const SettingsPage = async () => {
  const user = await getUser();

  return (
    <div className="text-white">
      <SettingsForm user={user!} />
    </div>
  );
};

export default SettingsPage;
