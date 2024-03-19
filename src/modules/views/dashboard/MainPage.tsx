import { Button, Grid, Paper } from "@mui/material";
import Layout from "components/Layout/Layout";
import classes from "./classes/MainPage.module.css";
import useMainPage from "modules/logic/dashboard/useMainPage";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import MainPageCostsInfo from "components/Pure/MainPageCostsInfo";
import MainPageCostsNavigation from "components/Pure/MainPageCostsNavigation";
import ModalChoose from "components/Pure/MainPageModalChoose";
import ModalEditCost from "components/Pure/MainPageModalEditCost";
import ModalCost from "components/Pure/MainPageModalCost";
import MainPagePieChart from "components/Pure/MainPagePieChart";

export default function MainPage() {
  // STATICDATA
  const rows = [
    {
      id: "0",
      title: "Keyboard",
      amount: -222,
      description: "Typical keyboard",
      type: "expenses",
      date: "10-02-2024",
      category: "entertainment",
    },
    {
      id: "1",
      title: "Mouse",
      amount: -125,
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
      amount: -915,
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
  const {
    showModalChoose,
    handleModalChooseClose,
    handleModalChooseOpen,
    handleMonthNext,
    handleMonthPrev,
    handleEditCostBtnClick,
    selectedCellData,
    showEditModalCost,
    handleEditModalCostClose,
    handleModalCostOpen,
    handleModalCostClose,
    choosedType,
    showModalCost,
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
            <MainPagePieChart />
          </Grid>
          <Grid item md={6} xs={12}>
            <MainPageCostsInfo />
          </Grid>
        </Grid>
        <ModalChoose
          open={showModalChoose}
          onClose={handleModalChooseClose}
          choosedType={handleModalCostOpen}
        />
        <ModalCost
          open={showModalCost}
          onClose={handleModalCostClose}
          title="Dodaj kwotę"
          choosedType={choosedType}
        />
        <ModalEditCost
          open={showEditModalCost}
          onClose={handleEditModalCostClose}
          title="Edytuj kwotę"
          costData={selectedCellData}
        />
      </Paper>
    </Layout>
  );
}
