import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetCostsQuery } from "modules/logic/dashboard/queries";
import {
  IBudgetCosts,
  IBudgetCostsTable,
} from "modules/types/dashboard/budget.types";
import classes from "./classes/BudgetCostsTable.module.css";

export default function BudgetCostsTable(props: IBudgetCostsTable) {
  const { editBtnClick, displayedDate, deleteBtnClick } = props;
  // ENDPOINTS MUST BE CREATED
  //   const { data } = useGetCostsQuery();

  // STATICDATA
  const data = [
    {
      id: "0",
      amount: 222,
      description: "aaaaaaaaaaaa",
      type: "expenses",
      date: "2024-03-12T12:53:36",
      category: "entertainment",
    },
    {
      id: "1",
      amount: 53,
      description: "ddddddddddd",
      type: "expenses",
      date: "2024-03-12T12:53:36",
      category: "entertainment",
    },
    {
      id: "2",
      amount: 42,
      description: " hg hdf hg hf",
      type: "expenses",
      date: "2024-03-12T12:53:36",
      category: "entertainment",
    },

    {
      id: "3",
      amount: 222,
      description: "fvsfsdfsd",
      type: "expenses",
      date: "2024-04-12T12:53:36",
      category: "entertainment",
    },
    {
      id: "4",
      amount: 222,
      description: "nnghnhg",
      type: "expenses",
      date: "2024-05-12T12:53:36",
      category: "entertainment",
    },
    {
      id: "5",
      amount: 222,
      description: "aaaaa",
      type: "expenses",
      date: "2024-06-12T12:53:36",
      category: "entertainment",
    },
    {
      id: "6",
      amount: 222,
      description: "dsada",
      type: "expenses",
      date: "2024-07-12T12:53:36",
      category: "entertainment",
    },
  ];

  const rowsList: IBudgetCosts[] = [];

  data?.forEach((element: IBudgetCosts) => {
    if (element.date.slice(5, 7) == displayedDate.format("MM")) {
      rowsList.push(element);
    }
  });

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
      autoHeight
      rows={rowsList}
      columns={[
        ...columns,
        {
          field: "actions",
          headerName: "",
          type: "actions",
          sortable: false,
          width: 200,
          renderCell: (params) => (
            <Box className={classes["table__row-actions-container"]}>
              <Button onClick={() => editBtnClick(params.row)}>Edytuj</Button>
              <Button color="error" onClick={() => deleteBtnClick(params.row)}>
                Usuń
              </Button>
            </Box>
          ),
        },
      ]}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      slots={{
        noRowsOverlay: () => (
          <Typography
            component="h1"
            variant="h2"
            className={classes["table__no-rows-text"]}
          >
            Brak danych
          </Typography>
        ),
      }}
    />
  );
}
