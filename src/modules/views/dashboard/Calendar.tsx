import Layout from "components/Layout/Layout";
import useCalendar from "modules/logic/dashboard/useCalendar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import plLocale from "@fullcalendar/core/locales/pl";
import { Paper } from "@mui/material";
import classes from "./classes/Calendar.module.css";
import ModalEvents from "components/Pure/CalendarModalEvents";

export default function Calendar() {
  const { showModal, handleModalClose, eventData, handleModalShow } =
    useCalendar();

  return (
    <Layout>
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
