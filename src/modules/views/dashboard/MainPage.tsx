import Layout from "components/Layout/Layout";
import useMainPage from "modules/logic/dashboard/useMainPage";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import plLocale from "@fullcalendar/core/locales/pl";
import { Paper } from "@mui/material";
import classes from "./classes/MainPage.module.css";
import ModalEvents from "components/Pure/MainPageModalEvents";

export default function MainPage() {
  const {
    data,
    isLoading,
    avatar,
    avatarIsLoading,
    showModal,
    handleModalClose,
    eventData,
    handleModalShow,
  } = useMainPage();

  return (
    <Layout
      name={isLoading ? null : data.name}
      avatarSrc={avatarIsLoading ? null : avatar}
    >
      <Paper className={classes["calendar-container"]}>
        <FullCalendar
          locale={plLocale}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "prev,next today",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          contentHeight={460}
          events={{}}
          nowIndicator={true}
          selectable={true}
          editable={true}
          selectMirror={true}
          dateClick={(data) => {
            handleModalShow(data.dateStr);
          }}
        />
        <ModalEvents
          open={showModal}
          onClose={handleModalClose}
          title={"Dodaj nowe wydarzenie"}
          defaultStartDate={eventData}
        />
      </Paper>
    </Layout>
  );
}
