import { Grid, Paper } from "@mui/material";
import Layout from "components/Layout/Layout";
import classes from "./classes/MainPage.module.css";
import useMainPage from "modules/logic/dashboard/useMainPage";
import MainPageCostsInfo from "components/Pure/MainPageCostsInfo";
import MainPageCostsNavigation from "components/Pure/MainPageCostsNavigation";
import ModalChoose from "components/Pure/MainPageModalChoose";
import ModalEditCost from "components/Pure/MainPageModalEditCost";
import ModalCost from "components/Pure/MainPageModalCost";
import MainPagePieChart from "components/Pure/MainPagePieChart";
import MainPageCostsTable from "components/Pure/MainPageCostsTable";

export default function MainPage() {
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
        <MainPageCostsTable editBtnClick={handleEditCostBtnClick} />
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
