import {
  Paper,
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Container,
  Box,
  Toolbar,
  Modal,
  Typography,
} from "@mui/material";
import Layout from "components/Layout/Layout";
import TextInput from "components/UI/TextInput";
import useUserProfile from "modules/logic/dashboard/useUserProfile";
import Avatar1 from "react-avatar-edit";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export default function UserProfile() {
  const {
    handleEditAvatarClose,
    handleEditAvatarOpen,
    editAvatarOpen,
    onCrop,
    onClose,
    handleSaveImage,
    img,
    handleSubmit,
    control,
    onSubmit,
    register,
    handleModalClose,
    handleModalOpen,
    modalOpen,
  } = useUserProfile();
  return (
    <Layout username={"User"}>
      <Toolbar />
      <Paper sx={{ p: 3 }}>
        <Container>
          <Avatar
            sx={{ width: 102, height: 102, mb: 2 }}
            alt="User"
            src={img ? img : `error`}
          />
          <Button variant="outlined" onClick={handleEditAvatarOpen}>
            Zmień Avatar
          </Button>
          <Dialog onClose={handleEditAvatarClose} open={editAvatarOpen}>
            <DialogTitle>Zaktualizuj swój avatar</DialogTitle>
            <DialogContent>
              <Avatar1
                width={400}
                height={400}
                onCrop={onCrop}
                onClose={onClose}
              />
            </DialogContent>
            <DialogActions>
              <Button variant="outlined" onClick={handleSaveImage}>
                Zapisz nowy Avatar
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
        <Container
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 1 }}
        >
          <TextInput
            control={control}
            type="text"
            required
            label="Imię"
            {...register("name", { required: false })}
          />
          <TextInput
            control={control}
            type="text"
            required
            label="Nazwisko"
            {...register("surname", { required: false })}
          />
          <TextInput
            control={control}
            required
            label="Hasło"
            type="password"
            {...register("password", { required: false })}
          />
          <Button
            color="error"
            fullWidth
            variant="outlined"
            onClick={handleModalOpen}
            sx={{ mt: 2, mb: 3 }}
          >
            Usuń konto
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Edytuj
          </Button>
        </Container>
        <Modal
          open={modalOpen}
          onClose={handleModalClose}
          aria-labelledby="child-modal-title"
        >
          <Box sx={modalStyle}>
            <Typography component="h2" variant="h6">
              Czy napewno chcesz usunąć konto?
            </Typography>
            <Container
              sx={{ display: "flex", justifyContent: "space-evenly", mt: 3 }}
            >
              <Button
                variant="outlined"
                sx={{ width: "40%" }}
                onClick={handleModalClose}
              >
                Nie
              </Button>
              <Button color="error" variant="outlined" sx={{ width: "40%" }}>
                Tak
              </Button>
            </Container>
          </Box>
        </Modal>
      </Paper>
    </Layout>
  );
}
