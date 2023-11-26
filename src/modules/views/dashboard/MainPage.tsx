import Layout from "components/Layout/Layout";
import useMainPage from "modules/logic/dashboard/useMainPage";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import plLocale from "@fullcalendar/core/locales/pl";
import { Paper } from "@mui/material";
import classes from "./classes/MainPage.module.css";

export default function MainPage() {
  const { data, isLoading } = useMainPage();
  return (
    <Layout
      name={isLoading ? null : data.name}
      avatarSrc={isLoading ? null : data.img}
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
          height={"60vh"}
        />
      </Paper>
    </Layout>
  );
}
