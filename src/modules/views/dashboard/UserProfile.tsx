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
import ModalTrueFalse from "components/UI/ModalTrueFalse";

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
    handleModalClick
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
                id="editPersonalInformationBtn"
                variant="outlined"
                onClick={handlePopoverClick}
              >
                Zmień personalia
              </Button>
            </Box>
            <Box className={classes["input-box"]}>
              <Typography component={"p"}>Hasło: ******</Typography>
              <Button
                id="editPasswordBtn"
                variant="outlined"
                onClick={handlePopoverClick}
              >
                Zmień hasło
              </Button>
            </Box>
          </Box>
        </Box>

       <ModalTrueFalse open={modalOpen} onClose={handleModalClose} title={"Czy napewno chcesz usunąć konto?"} onClick={handleModalClick} />

        {popoverId === "editPersonalInformationBtn" ? (
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
            <Container component="form" onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2} sx={{ pt: 2, pb: 2 }}>
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
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mb: 2 }}
              >
                Edytuj
              </Button>
            </Container>
          </Popover>
        ) : popoverId === "editPasswordBtn" ? (
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
            <Container component="form" onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                control={control}
                type="text"
                required
                size={TextFieldSize.small}
                label="Nowe hasło"
                {...register("password", { required: true })}
              />
              <TextInput
                control={control}
                type="text"
                required
                size={TextFieldSize.small}
                label="Powtórz nowe hasło"
                {...register("confirmPassword", { required: true })}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mb: 2, mt: 2 }}
              >
                Edytuj
              </Button>
            </Container>
          </Popover>
        ) : (
          ""
        )}
      </Paper>
    </Layout>
  );
}
