import { Button, Box, Modal, Typography } from "@mui/material";
import classes from "../UI/classes/Modal.module.css";
import MainPageModalEvents from "components/Busines/MainPageModalEventsForm";

interface IModalEvents {
  open: boolean;
  onClose: any;
  title: string;
  defaultStartDate: string;
}

export default function ModalEvents(props: IModalEvents) {
  const { open, onClose, title, defaultStartDate } = props;

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="child-modal-title">
      <Box className={classes.modal}>
        <Button variant="text" onClick={onClose}>
          X
        </Button>
        <Typography component="h2" variant="h6">
          {title}
        </Typography>
        <MainPageModalEvents defaultStartDate={defaultStartDate} />
      </Box>
    </Modal>
  );
}
