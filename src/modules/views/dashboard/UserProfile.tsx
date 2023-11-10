import {
  Paper,
  Button,
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

import UserContext from "store/user-context";
import classes from "./classes/UserProfile.module.css";
import { TextFieldSize } from "components/UI/TextInput";
import ModalTrueFalse from "components/UI/ModalTrueFalse";
import UserProfileAvatar from "./UserProfileAvatar";
import UserProfileInput from "./UserProfileInput";
import UserProfileTitle from "./UserProfileTitle";

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
    handleModalClick,
  } = useUserProfile();

  const ctx = useContext(UserContext);
  return (
    <Layout name={ctx.name} avatarSrc={ctx.img}>
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
            title="Imię i nazwisko: aaaa"
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
          ""
        )}
      </Paper>
    </Layout>
  );
}
