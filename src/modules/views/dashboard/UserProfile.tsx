import {
  Paper,
  Button,
  Container,
  Box,
  Toolbar,
  Popover,
  Grid,
} from "@mui/material";
import Layout from "components/Layout/Layout";
import TextInput from "components/UI/TextInput";
import useUserProfile from "modules/logic/dashboard/useUserProfile";

import classes from "./classes/UserProfile.module.css";
import { TextFieldSize } from "components/UI/TextInput";
import ModalTrueFalse from "components/UI/ModalTrueFalse";
import UserProfileAvatar from "./UserProfileAvatar";
import UserProfileInput from "./UserProfileInput";
import UserProfileTitle from "./UserProfileTitle";
import AuthContext from "store/auth-context";
import { useContext } from "react";
import Toast from "components/UI/Toast";

export default function UserProfile() {
  const ctx = useContext(AuthContext);
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
    handleModalClick,
    data
  } = useUserProfile();
  return (
    <Layout name={!!data === undefined ? data.name : null} avatarSrc={!!data === undefined ? data.img : null}>
      <Toolbar />
      <Paper className={classes.container}>
        <UserProfileTitle onClick={handleModalOpen} />
        <Box className={classes["user-information"]}>
          <UserProfileAvatar
            img={img}
            onAvatarClose={onAvatarClose}
            onCrop={onCrop}
            onDialogClose={handleEditAvatarClose}
            onSave={handleSaveImage}
            open={editAvatarOpen}
            onDialogOpen={handleEditAvatarOpen}
          />
          <UserProfileInput
            title={`Imię i nazwisko: ${!!data === undefined ? data.name : "ERROR_DATA"}`}
            id="editPersonalInformationBtn"
            btnText="Zmień personalia"
            onClick={handlePopoverClick}
          />
          <UserProfileInput
            title="Hasło: ******"
            id="editPasswordBtn"
            btnText="Zmień hasło"
            onClick={handlePopoverClick}
          />
        </Box>

        <ModalTrueFalse
          open={modalOpen}
          onClose={handleModalClose}
          title={"Czy napewno chcesz usunąć konto?"}
          onClick={handleModalClick}
        />

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
                type="password"
                required
                size={TextFieldSize.small}
                label="Nowe hasło"
                {...register("password", { required: true })}
              />
              <TextInput
                control={control}
                type="password"
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
          null
        )}
      </Paper>
      {ctx.isError && <Toast message={ctx.message} />}
    </Layout>
  );
}
