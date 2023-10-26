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
} from "@mui/material";
import Layout from "components/Layout";
import TextInput from "components/TextInput";
import useUserProfile from "modules/logic/dashboard/useUserProfile";
import Avatar1 from "react-avatar-edit";

export default function UserProfile() {
  const {
    editAvatarOpenHandler,
    editAvatarCloseHandler,
    editAvatarOpen,
    onCrop,
    onClose,
    saveImageHandler,
    img,
    handleSubmit,
    control,
    onSubmit,
    register
  } = useUserProfile();
  return (
    <Layout username={"User"}>
      <Toolbar />
      <Paper sx={{ p: 3 }}>
        <Container >
          <Avatar
            sx={{ width: 102, height: 102, mb: 3}}
            alt="User"
            src={img ? img : `error`}
          />
          <Button variant="outlined" onClick={editAvatarOpenHandler}>
            Zmień Avatar
          </Button>
          <Dialog onClose={editAvatarCloseHandler} open={editAvatarOpen}>
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
              <Button variant="outlined" onClick={saveImageHandler}>
                Zapisz nowy Avatar
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
        <Container component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
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
      </Paper>
    </Layout>
  );
}
