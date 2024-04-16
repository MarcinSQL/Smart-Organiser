import { Grid, Paper } from "@mui/material";
import Layout from "components/Layout/Layout";
import classes from "./classes/Budget.module.css";
import useBudget from "modules/logic/dashboard/useBudget";
import BudgetCostsInfo from "components/Pure/BudgetCostsInfo";
import BudgetCostsNavigation from "components/Pure/BudgetCostsNavigation";
import ModalChoose from "components/Pure/BudgetModalChoose";
import ModalEditCost from "components/Pure/BudgetModalEditCost";
import ModalCost from "components/Pure/BudgetModalCost";
import BudgetCostsTable from "components/Pure/BudgetCostsTable";
import ModalTrueFalse from "components/UI/ModalTrueFalse";
import BudgetPieChart from "components/Pure/BudgetPieChart";

export default function Budget() {
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
    displayedDate,
    handleDeleteCostBtnClick,
    deleteModalOpen,
    handleDeleteModalOnClick,
    handleDeleteModalClose,
  } = useBudget();

  return (
    <Layout>
      <Paper className={classes.container}>
        <BudgetCostsNavigation
          date={displayedDate}
          modalOpen={handleModalChooseOpen}
          monthNext={handleMonthNext}
          monthPrev={handleMonthPrev}
        />
        <BudgetCostsTable
          editBtnClick={handleEditCostBtnClick}
          displayedDate={displayedDate}
          deleteBtnClick={handleDeleteCostBtnClick}
        />
        <Grid container spacing={2} className={classes["info-container"]}>
          <Grid item md={6} xs={12}>
            <BudgetPieChart />
          </Grid>
          <Grid item md={6} xs={12}>
            <BudgetCostsInfo givenDate={displayedDate} />
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
        <ModalTrueFalse
          title="Czy napewno chcesz usunąć kwotę?"
          onClose={handleDeleteModalClose}
          onClick={handleDeleteModalOnClick}
          open={deleteModalOpen}
        />
      </Paper>
    </Layout>
  );
}
