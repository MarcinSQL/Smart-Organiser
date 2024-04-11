import { Paper } from "@mui/material";
import Layout from "components/Layout/Layout";
import ModalEditEvent from "components/Pure/CalendarModalEditEvent";
import MainPageNewestEvents from "components/Pure/MainPageNewestEvents";
import ModalTrueFalse from "components/UI/ModalTrueFalse";
import useMainPage from "modules/logic/dashboard/useMainPage";

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
  } = useMainPage();
  return (
    <Layout>
      <Paper>
        <MainPageNewestEvents
          selectedEventId={handleGetEventId}
          showEditModal={handleShowEditModal}
        />
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
