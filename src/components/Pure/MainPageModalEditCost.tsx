import { Button, Box, Modal, Typography } from "@mui/material";
import classes from "./classes/Modal.module.css";
import { IModalEditCost } from "modules/types/dashboard/mainPage.types";
import MainPageEditModalCostForm from "components/Busines/MainPageEditModalCostForm";

export default function ModalEditCost(props: IModalEditCost) {
  const { open, onClose, title, costData } = props;

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
        <MainPageEditModalCostForm
          mutationOnSuccess={onClose}
          costData={costData}
        />
      </Box>
    </Modal>
  );
}
