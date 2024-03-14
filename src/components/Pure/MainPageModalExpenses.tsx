import { Button, Box, Modal, Typography } from "@mui/material";
import classes from "./classes/Modal.module.css";
import { IModalCosts } from "modules/types/dashboard/mainPage.types";
import MainPageModalExpensesForm from "components/Busines/MainPageModalExpensesForm";

export default function ModalExpenses(props: IModalCosts) {
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
        <MainPageModalExpensesForm mutationOnSuccess={onClose} />
      </Box>
    </Modal>
  );
}
