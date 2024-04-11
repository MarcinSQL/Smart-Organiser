import { Button, Container, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import classes from "./classes/MainPageNewestEvents.module.css";
import { useGetCalendarEventsQuery } from "modules/logic/dashboard/queries";
import {
  IMainPageClosestEvents,
  IMainPageNewestEvents,
} from "modules/types/dashboard/mainPage.types";
import { IRawEvent } from "modules/types/dashboard/calendar.types";

export default function MainPageNewestEvents(props: IMainPageNewestEvents) {
  const { selectedEventId, showEditModal } = props;
  const { data } = useGetCalendarEventsQuery();

  const rowsList: IMainPageClosestEvents[] = [];

  const findClosestEvents = (events: IRawEvent[], count: number) => {
    if (events !== undefined) {
      const now = new Date();

      const timeDifference = (event: IRawEvent) => {
        return Math.abs(new Date(event.day).getTime() - now.getTime());
      };
      const sortedEvents = events.sort(
        (eventA, eventB) => timeDifference(eventA) - timeDifference(eventB)
      );
      return sortedEvents.slice(0, count);
    }
  };

  const closestEvents = findClosestEvents(data, 3);
  closestEvents?.forEach((event) => {
    if (!rowsList.some((element) => element.id === event.id)) {
      let noteValue = "---";
      if (event.note) {
        noteValue = event.note;
      }
      const modifiedEvent = {
        id: event.id,
        title: event.title,
        day: event.day.slice(0, 10),
        note: noteValue,
      };
      rowsList.push(modifiedEvent);
    }
  });

  const editBtnClick = (event: { id: string }) => {
    selectedEventId(event.id);
    showEditModal();
  };

  const columns: GridColDef[] = [
    { field: "title", headerName: "Tytuł", minWidth: 100, flex: 2 },
    {
      field: "day",
      headerName: "Data",
      type: "string",
      minWidth: 100,
      flex: 1,
    },
    { field: "note", headerName: "Notatka", minWidth: 100, flex: 2 },
  ];
  return (
    <Container className={classes["container"]}>
      <Typography
        component="h1"
        variant="h2"
        className={classes["table__heading"]}
      >
        Najbliższe wydarzenia
      </Typography>
      <DataGrid
        autoHeight
        rows={rowsList}
        columns={[
          ...columns,
          {
            field: "action",
            headerName: "",
            type: "action",
            sortable: false,
            width: 100,
            renderCell: (params) => (
              <Button onClick={() => editBtnClick(params.row)}>Edytuj</Button>
            ),
          },
        ]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 3 },
          },
        }}
        slots={{
          noRowsOverlay: () => (
            <Typography
              component="h1"
              variant="h2"
              className={classes["table__no-rows-text"]}
            >
              Brak danych
            </Typography>
          ),
        }}
      />
    </Container>
  );
}
