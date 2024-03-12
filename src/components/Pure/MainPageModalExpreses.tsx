import { Button, Box, Modal, Typography } from "@mui/material";
import classes from "./classes/Modal.module.css";
import { IModalCosts } from "modules/types/dashboard/mainPage.types";
import MainPageModalExpresesForm from "components/Busines/MainPageModalExpresesForm";

export default function ModalExpreses(props: IModalCosts) {
  const { open, onClose, title } = props;

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
        <MainPageModalExpresesForm mutationOnSuccess={onClose} />
      </Box>
    </Modal>
  );
}
