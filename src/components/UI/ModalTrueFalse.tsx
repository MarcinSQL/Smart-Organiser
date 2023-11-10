import {
  Button,
  Container,
  Box,
  Modal,
  Typography,
} from "@mui/material";
import classes from "./classes/modal.module.css";

interface IModalTrueFalse {
  open: boolean;
  onClose: any;
  title: string;
  onClick: any;
}

export default function ModalTrueFalse(props: IModalTrueFalse) {
    const { open, onClose, title, onClick } = props;
    return (
        <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="child-modal-title"
      >
        <Box className={classes.modal}>
          <Typography component="h2" variant="h6">
            {title}
          </Typography>
          <Container
            sx={{ display: "flex", justifyContent: "space-evenly", mt: 3 }}
          >
            <Button
              variant="outlined"
              sx={{ width: "40%" }}
              onClick={onClose}
            >
              Nie
            </Button>
            <Button color="error" variant="outlined" sx={{ width: "40%" }} onClick={onClick}>
              Tak
            </Button>
          </Container>
        </Box>
      </Modal>
    );
}