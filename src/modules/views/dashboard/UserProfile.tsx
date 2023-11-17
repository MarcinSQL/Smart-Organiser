import { Paper, Box, Toolbar } from "@mui/material";
import Layout from "components/Layout/Layout";
import useUserProfile from "modules/logic/dashboard/useUserProfile";

import classes from "./classes/UserProfile.module.css";
import ModalTrueFalse from "components/UI/ModalTrueFalse";
import UserProfileAvatar from "components/Busines/UserProfileAvatar";
import UserProfileInput from "components/Pure/UserProfileInput";
import UserProfileTitle from "components/Pure/UserProfileTitle";
import AuthContext from "store/auth-context";
import { useContext } from "react";
import Toast from "components/UI/Toast";
import UserProfileFormPersonalINformation from "components/Busines/UserProfileFormPersonalInformation";
import UserProfileFormPassword from "components/Busines/UserProfileFormPassword";

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
    handleModalClose,
    handleModalOpen,
    modalOpen,
    handlePopoverClick,
    handlePopoverClose,
    popoverId,
    popoverOpen,
    anchorEl,
    handleModalClick,
    data,
  } = useUserProfile();
  return (
    <Layout
      name={!!data === undefined ? data.name : null}
      avatarSrc={!!data === undefined ? data.img : null}
    >
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
            title={`Imię i nazwisko: ${
              !!data === undefined ? data.name : "ERROR_DATA"
            }`}
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
          <UserProfileFormPersonalINformation
            popoverId={popoverId}
            open={popoverOpen}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
          />
        ) : popoverId === "editPasswordBtn" ? (
          <UserProfileFormPassword
            popoverId={popoverId}
            open={popoverOpen}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
          />
        ) : null}
      </Paper>
      {ctx.isError && <Toast message={ctx.message} />}
    </Layout>
  );
}
