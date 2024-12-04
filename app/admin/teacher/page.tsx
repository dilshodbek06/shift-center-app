import { columns, Teacher } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import FilterSettingsNavbar from "./_components/filter-settings-navbar";

const data: Teacher[] = [
  {
    id: "728ed52f",
    email: "m@example.com",
    gender: "Male",
    joiningDate: new Date().toLocaleDateString() as unknown as Date,
    name: "Salom",
    phone: "",
    profession: "",
    profileImage: "",
  },
  // ...
];

const TeacherPage = () => {
  return (
    <div className="text-white">
      <FilterSettingsNavbar />
      <div className="mt-2">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default TeacherPage;
