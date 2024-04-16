import { Container, Paper, Typography } from "@mui/material";
import Layout from "components/Layout/Layout";
import BudgetCostsInfo from "components/Pure/BudgetCostsInfo";
import ModalEditEvent from "components/Pure/CalendarModalEditEvent";
import MainPageNewestEvents from "components/Pure/MainPageNewestEvents";
import ModalTrueFalse from "components/UI/ModalTrueFalse";
import useMainPage from "modules/logic/dashboard/useMainPage";
import classes from "./classes/MainPage.module.css";
import MainPageBudgetInfo from "components/Pure/MainPageBudgetInfo";

export default function MainPage() {
  const {
    selectedEventId,
    showEditEventModal,
    handleEditEventModalClose,
    handleDeleteModalOpen,
    handleGetEventId,
    handleShowEditModal,
    deleteModalOpen,
    handleDeleteModalClose,
    handleDeleteModalOnClick,
    currentDate,
  } = useMainPage();
  return (
    <Layout>
      <Paper>
        <Container className={classes["container"]}>
          <MainPageNewestEvents
            selectedEventId={handleGetEventId}
            showEditModal={handleShowEditModal}
          />
          <MainPageBudgetInfo currentDate={currentDate} />
        </Container>
        <ModalEditEvent
          open={showEditEventModal}
          onClose={handleEditEventModalClose}
          title={"Edytuj wydarzenie"}
          eventId={selectedEventId}
          deleteModalBtnOnOpen={handleDeleteModalOpen}
        />
        <ModalTrueFalse
          title="Czy napewno chcesz usunąć wydarzenie?"
          onClose={handleDeleteModalClose}
          onClick={handleDeleteModalOnClick}
          open={deleteModalOpen}
        />
      </Paper>
    </Layout>
  );
}
