import { Button, Box, Modal, Typography } from "@mui/material";
import classes from "./classes/Modal.module.css";
import { IModalCostTypeChoose } from "modules/types/dashboard/mainPage.types";
import MainPageModalExpensesForm from "components/Busines/MainPageModalExpensesForm";
import MainPageModalRevenuesForm from "components/Busines/MainPageModalRevenuesForm";

export default function ModalCost(props: IModalCostTypeChoose) {
  const { open, onClose, title, choosedType } = props;

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
        {choosedType === "expenses" ? (
          <MainPageModalExpensesForm mutationOnSuccess={onClose} />
        ) : (
          <MainPageModalRevenuesForm mutationOnSuccess={onClose} />
        )}
      </Box>
    </Modal>
  );
}
