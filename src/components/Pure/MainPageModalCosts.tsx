import { Button, Box, Modal, Typography, Grid, Icon } from "@mui/material";
import classes from "./classes/Modal.module.css";
import MainPageModalCostsForm from "components/Busines/MainPageModalCostsForm";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

interface IModalCosts {
  open: boolean;
  onClose: () => void;
  title: string;
}

export default function ModalCosts(props: IModalCosts) {
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
        <MainPageModalCostsForm mutationOnSuccess={onClose} />
      </Box>
    </Modal>
  );
}
