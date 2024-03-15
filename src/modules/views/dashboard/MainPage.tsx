import { Button, Grid, Paper } from "@mui/material";
import Layout from "components/Layout/Layout";
import classes from "./classes/MainPage.module.css";
import ModalRevenues from "components/Pure/MainPageModalRevenues";
import useMainPage from "modules/logic/dashboard/useMainPage";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { PieChart } from "@mui/x-charts";
import MainPageCostsInfo from "components/Pure/MainPageCostsInfo";
import MainPageCostsNavigation from "components/Pure/MainPageCostsNavigation";
import ModalChoose from "components/Pure/MainPageModalChoose";
import ModalExpenses from "components/Pure/MainPageModalExpenses";

export default function MainPage() {
  // STATICDATA
  const rows = [
    {
      id: 0,
      title: "Keyboard",
      amount: -222,
      description: "Typical keyboard",
      type: "expenses",
      date: "10-02-2024",
      category: "entertainment",
    },
    {
      id: 1,
      title: "Mouse",
      amount: -125,
      description: "Typical mouse",
      type: "expenses",
      date: "10-02-2024",
      category: "entertainment",
    },
    {
      id: 2,
      title: "Work",
      amount: 2111,
      description: "Typical work",
      type: "revenue",
      date: "12-02-2024",
      category: "job",
    },
    {
      id: 3,
      title: "Food",
      amount: -915,
      description: "Typical food description",
      type: "expenses",
      date: "15-02-2024",
      category: "home",
    },
  ];

  const data = [
    {
      id: 0,
      label: "Keyboard",
      value: 222,
      description: "Typical keyboard",
      type: "expenses",
      date: "10-02-2024",
      category: "entertainment",
    },
    {
      id: 1,
      label: "Mouse",
      value: 125,
      description: "Typical mouse",
      type: "expenses",
      date: "10-02-2024",
      category: "entertainment",
    },
    {
      id: 2,
      label: "Work",
      value: 2111,
      description: "Typical work",
      type: "revenue",
      date: "12-02-2024",
      category: "job",
    },
    {
      id: 3,
      label: "Food",
      value: 915,
      description: "Typical food description",
      type: "expenses",
      date: "15-02-2024",
      category: "home",
    },
  ];

  const columns: GridColDef[] = [
    { field: "title", headerName: "Tytuł", minWidth: 100, flex: 1 },
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
  const {
    showModalChoose,
    handleModalChooseClose,
    handleModalChooseOpen,
    handleMonthNext,
    handleMonthPrev,
    showModalExpenses,
    showModalRevenues,
    handleModalExpensesClose,
    handleModalExpensesOpen,
    handleModalRevenuesClose,
    handleModalRevenuesOpen,
    handleEditCostBtnClick,
  } = useMainPage();
  return (
    <Layout>
      <Paper className={classes.container}>
        <MainPageCostsNavigation
          modalOpen={handleModalChooseOpen}
          monthNext={handleMonthNext}
          monthPrev={handleMonthPrev}
        />
        <DataGrid
          rows={rows}
          columns={[
            ...columns,
            {
              field: "editCost",
              headerName: "",
              sortable: false,
              width: 120,
              renderCell: (params) => (
                <Button onClick={() => handleEditCostBtnClick(params.row)}>
                  Edytuj
                </Button>
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
        <Grid container spacing={2} className={classes["info-container"]}>
          <Grid item md={6} xs={12}>
            <PieChart
              series={[
                {
                  data,
                  highlightScope: { faded: "global", highlighted: "item" },
                  faded: {
                    innerRadius: 30,
                    additionalRadius: -10,
                    color: "gray",
                  },
                  innerRadius: 20,
                  paddingAngle: 5,
                  cornerRadius: 5,
                },
              ]}
              height={200}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <MainPageCostsInfo />
          </Grid>
        </Grid>
        <ModalChoose
          open={showModalChoose}
          onClose={handleModalChooseClose}
          openRevenues={handleModalRevenuesOpen}
          openExpreses={handleModalExpensesOpen}
        />
        <ModalRevenues
          open={showModalRevenues}
          onClose={handleModalRevenuesClose}
          title="Dodaj kwotę"
        />
        <ModalExpenses
          open={showModalExpenses}
          onClose={handleModalExpensesClose}
          title="Dodaj kwotę"
        />
      </Paper>
    </Layout>
  );
}
