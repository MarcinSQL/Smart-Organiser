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
import useGetCalendarEvents from "modules/logic/dashboard/useGetCalendarEvents";
import ModalEditEvent from "components/Pure/CalendarModalEditEvent";

export default function Calendar() {
  const {
    showModal,
    handleModalClose,
    eventData,
    handleModalShow,
    windowBreakpoint,
    windowWidth,
    handleEventClick,
    showEditEventModal,
    handleEditEventModalClose,
    eventId,
  } = useCalendar();

  const { eventsList } = useGetCalendarEvents();

  return (
    <Layout>
      <Paper className={classes["calendar-container"]}>
        <FullCalendar
          locale={plLocale}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={
            windowWidth <= windowBreakpoint ? "timeGridDay" : "dayGridMonth"
          }
          headerToolbar={{
            start: `${
              windowWidth <= windowBreakpoint ? "prev,next" : "prev,next today"
            }`,
            center: "title",
            end:
              windowWidth <= windowBreakpoint
                ? "today"
                : "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          contentHeight={460}
          events={eventsList}
          nowIndicator={true}
          selectable={true}
          editable={true}
          selectMirror={true}
          dateClick={(data) => {
            handleModalShow(data.dateStr);
          }}
          eventClick={handleEventClick}
        />
        <ModalEvents
          open={showModal}
          onClose={handleModalClose}
          title={"Dodaj nowe wydarzenie"}
          defaultStartDate={eventData}
        />
        <ModalEditEvent
          open={showEditEventModal}
          onClose={handleEditEventModalClose}
          title={"Edytuj wydarzenie"}
          eventId={eventId}
        />
      </Paper>
    </Layout>
  );
}
