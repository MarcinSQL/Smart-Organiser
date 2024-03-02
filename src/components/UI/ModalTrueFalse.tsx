import { Button, Container, Box, Modal, Typography } from "@mui/material";
import classes from "./classes/ModalTrueFalse.module.css";

interface IModalTrueFalse {
  open: boolean;
  onClose: any;
  title: string;
  onClick: any;
}

export default function ModalTrueFalse(props: IModalTrueFalse) {
  const { open, onClose, title, onClick } = props;
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="child-modal-title">
      <Box className={classes.modal}>
        <Typography component="h2" variant="h6">
          {title}
        </Typography>
        <Container className={classes["modal__btn-container"]}>
          <Button variant="outlined" onClick={onClose}>
            Nie
          </Button>
          <Button color="error" variant="outlined" onClick={onClick}>
            Tak
          </Button>
        </Container>
      </Box>
    </Modal>
  );
}
