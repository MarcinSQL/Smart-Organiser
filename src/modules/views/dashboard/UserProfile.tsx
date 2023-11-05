import {
  Paper,
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Container,
  Box,
  Toolbar,
  Modal,
  Typography,
  Popover,
  Grid,
} from "@mui/material";
import Layout from "components/Layout/Layout";
import TextInput from "components/UI/TextInput";
import useUserProfile from "modules/logic/dashboard/useUserProfile";
import { useContext } from "react";
import Avatar1 from "react-avatar-edit";
import UserContext from "store/user-context";
import classes from "./classes/UserProfile.module.css";
import { TextFieldSize } from "components/UI/TextInput";

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
    onAvatarClose,
    handleSaveImage,
    img,
    handleSubmit,
    control,
    onSubmit,
    register,
    handleModalClose,
    handleModalOpen,
    modalOpen,
    handlePopoverClick,
    handlePopoverClose,
    popoverId,
    popoverOpen,
    anchorEl,
  } = useUserProfile();

  const ctx = useContext(UserContext);
  return (
    <Layout name={ctx.name} avatarSrc={ctx.img}>
      <Toolbar />
      <Paper sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 6,
          }}
        >
          <Box>
            <Typography component="h1" variant="h5">
              Konto użytkownika
            </Typography>
            <Button
              color="error"
              fullWidth
              variant="outlined"
              onClick={handleModalOpen}
              sx={{ mt: 2, mb: 3 }}
            >
              Usuń konto
            </Button>
          </Box>
          <Box sx={{ width: "60%", display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{ width: 102, height: 102, mb: 2 }}
                alt="User"
                src={img ? img : `error`}
              />
              <Button
                variant="outlined"
                onClick={handleEditAvatarOpen}
                sx={{ height: "50%" }}
              >
                Zmień Awatar
              </Button>
              <Dialog onClose={handleEditAvatarClose} open={editAvatarOpen}>
                <DialogContent>
                  <Avatar1
                    width={350}
                    height={350}
                    onCrop={onCrop}
                    onClose={onAvatarClose}
                    label={"Zmień awatar"}
                  />
                </DialogContent>
                <DialogActions>
                  <Button variant="outlined" onClick={handleSaveImage}>
                    Zapisz nowy Awatar
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Box className={classes["input-box"]}>
              <Typography component={"p"}>Imię i nazwisko: aaaaa</Typography>
              <Button
                aria-describedby={popoverId}
                variant="outlined"
                onClick={handlePopoverClick}
              >
                Zmień personalia
              </Button>
              <Popover
                id={popoverId}
                open={popoverOpen}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Grid container spacing={2} sx={{ p: 2 }}>
                  <Grid item xs={4}>
                    <TextInput
                      control={control}
                      type="text"
                      required
                      size={TextFieldSize.small}
                      label="Imię"
                      {...register("name", { required: true })}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextInput
                      control={control}
                      type="text"
                      required
                      size={TextFieldSize.small}
                      label="Nazwisko"
                      {...register("surname", { required: true })}
                    />
                  </Grid>
                </Grid>
                <Container
                  component="form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mb: 2 }}
                  >
                    Edytuj
                  </Button>
                </Container>
              </Popover>
            </Box>
            <Box className={classes["input-box"]}>
              <Typography component={"p"}>Hasło: ******</Typography>
              <Button variant="outlined">Zmień hasło</Button>
            </Box>
            {/* <Container
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 1 }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Edytuj
              </Button>
            </Container> */}
          </Box>
        </Box>

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
