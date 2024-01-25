import { Button, Box, Modal, Typography } from "@mui/material";
import classes from "./classes/ModalEvents.module.css";
import CalendarModalEvents from "components/Busines/CalendarModalEventsForm";

interface IModalEvents {
  open: boolean;
  onClose: () => void;
  title: string;
  defaultStartDate: string;
}

export default function ModalEvents(props: IModalEvents) {
  const { open, onClose, title, defaultStartDate } = props;

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
        <CalendarModalEvents
          defaultStartDate={defaultStartDate}
          mutationOnSuccess={onClose}
        />
      </Box>
    </Modal>
  );
}
