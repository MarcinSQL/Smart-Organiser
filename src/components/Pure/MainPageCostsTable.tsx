import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetCostsQuery } from "modules/logic/dashboard/queries";
import { IMainPageCostsTable } from "modules/types/dashboard/mainPage.types";

export default function MainPageCostsTable(props: IMainPageCostsTable) {
  const { editBtnClick } = props;
  // ENDPOINTS MUST BE CREATED
  //   const { data } = useGetCostsQuery();

  // STATICDATA
  const data = [
    {
      id: "0",
      title: "Keyboard",
      amount: 222,
      description: "Typical keyboard",
      type: "expenses",
      date: "10-02-2024",
      category: "entertainment",
    },
    {
      id: "1",
      title: "Mouse",
      amount: 125,
      description: "Typical mouse",
      type: "expenses",
      date: "10-02-2024",
      category: "entertainment",
    },
    {
      id: "2",
      title: "Work",
      amount: 2111,
      description: "Typical work",
      type: "revenue",
      date: "12-02-2024",
      category: "job",
    },
    {
      id: "3",
      title: "Food",
      amount: 915,
      description: "Typical food description",
      type: "expenses",
      date: "15-02-2024",
      category: "home",
    },
  ];

  const columns: GridColDef[] = [
    { field: "category", headerName: "Kategoria", minWidth: 100, flex: 1 },
    { field: "description", headerName: "Opis", minWidth: 100, flex: 1 },
    {
      field: "amount",
      headerName: "Kwota",
      type: "number",
      minWidth: 100,
      flex: 1,
    },
  ];

  return (
    <DataGrid
      rows={data}
      columns={[
        ...columns,
        {
          field: "editCost",
          headerName: "",
          sortable: false,
          width: 120,
          renderCell: (params) => (
            <Button onClick={() => editBtnClick(params.row)}>Edytuj</Button>
          ),
        },
      ]}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
    />
  );
}
