import { Button, Box, Modal, Typography, Grid } from "@mui/material";
import classes from "./classes/Modal.module.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

interface IModalChoose {
  open: boolean;
  onClose: () => void;
  openRevenues: () => void;
  openExpreses: () => void;
}

export default function ModalChoose(props: IModalChoose) {
  const { open, onClose, openExpreses, openRevenues } = props;

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="child-modal-title">
      <Box className={classes.modal + " " + classes["modal--choose"]}>
        <Button
          variant="text"
          onClick={onClose}
          className={classes["modal__close-btn"]}
        >
          X
        </Button>
        <Grid container>
          <Grid item xs={6} className={classes["modal__choose-btn-container"]}>
            <Button
              className={classes["modal__choose-btn"]}
              onClick={openRevenues}
            >
              <TrendingUpIcon />
              <Typography component={"p"}>Przychody</Typography>
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              className={classes["modal__choose-btn"]}
              onClick={openExpreses}
            >
              <TrendingDownIcon />
              <Typography component={"p"}>Wydatki</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
