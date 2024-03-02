import { Button, Box, Modal, Typography } from "@mui/material";
import classes from "./classes/Modal.module.css";
import CalendarEditEventModalForm from "components/Busines/CalendarEditEventModalForm";
import { useGetCalendarEventsQuery } from "modules/logic/dashboard/queries";
import { IRawEvent } from "modules/types/dashboard/calendar.types";

interface IModalEvents {
  open: boolean;
  onClose: () => void;
  title: string;
  eventId: string;
  deleteModalBtnOnOpen: () => void;
}

export default function ModalEditEvent(props: IModalEvents) {
  const { open, onClose, title, eventId, deleteModalBtnOnOpen } = props;
  const { data } = useGetCalendarEventsQuery();

  let eventData = {
    id: "",
    title: "",
    day: "",
    isAllDay: true,
    startTime: "",
    endTime: "",
    eventType: "",
    note: "",
  };

  data?.forEach((element: IRawEvent) => {
    if (element.id === eventId) {
      eventData = {
        id: element.id,
        title: element.title,
        day: element.day,
        isAllDay: element.isAllDay,
        startTime: element.startTime,
        endTime: element.endTime,
        eventType: element.eventType,
        note: element.note ? element.note : "",
      };
    }
  });

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="child-modal-title">
      <Box className={classes.modal}>
        <Button
          variant="text"
          onClick={onClose}
          className={classes["modal__close-btn"]}
        >
          X
        </Button>
        <Typography component="h2" variant="h6">
          {title}
        </Typography>
        <CalendarEditEventModalForm
          eventData={eventData}
          deleteModalBtnOnOpen={deleteModalBtnOnOpen}
          mutationOnSuccess={onClose}
        />
      </Box>
    </Modal>
  );
}
