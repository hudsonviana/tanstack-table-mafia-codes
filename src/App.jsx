import { useMemo } from "react";
import { DateTime } from "luxon";
import BasicTable from "./components/BasicTable";
import mData from "./MOCK_DATA.json";

const App = () => {
  const data = useMemo(() => mData, []);
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },
    // {
    //   header: "First Name",
    //   accessorKey: "first_name",
    //   footer: "First Name",
    // },
    // {
    //   header: "Last Name",
    //   accessorKey: "last_name",
    //   footer: "Last Name",
    // },
    {
      header: "Name",
      accessorFn: (row) => `${row.first_name} ${row.last_name}`,
      accessorKey: "name",
      footer: "Name",
    },
    {
      header: "Email",
      accessorKey: "email",
      footer: "Email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
      footer: "Gender",
    },
    {
      header: "Date of Birth",
      accessorKey: "dob",
      footer: "Date of Birth",
      cell: (info) =>
        DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
    },
  ];

  return (
    <>
      <h2>React Table</h2>
      <BasicTable data={data} columns={columns} />
    </>
  );
};

export default App;
