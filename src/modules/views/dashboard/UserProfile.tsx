import { Paper, Box } from "@mui/material";
import Layout from "components/Layout/Layout";
import useUserProfile from "modules/logic/dashboard/useUserProfile";

import classes from "./classes/UserProfile.module.css";
import ModalTrueFalse from "components/UI/ModalTrueFalse";
import UserProfileAvatar from "components/Busines/UserProfileAvatar";
import UserProfileInput from "components/Pure/UserProfileInput";
import UserProfileTitle from "components/Pure/UserProfileTitle";
import UserProfileFormPersonalINformation from "components/Busines/UserProfileFormPersonalInformation";
import UserProfileFormPassword from "components/Busines/UserProfileFormPassword";

export default function UserProfile() {
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
    avatar,
    isError,
    avatarIsError,
    isLoading,
    avatarIsLoading,
    editAvatarIsLoading,
  } = useUserProfile();
  return (
    <Layout>
      {isLoading || avatarIsLoading ? null : (
        <Paper className={classes.container}>
          <UserProfileTitle onClick={handleModalOpen} />
          <Box className={classes["user-information"]}>
            <UserProfileAvatar
              img={img === "" ? (avatarIsError ? "ERROR" : avatar) : img}
              onAvatarClose={onAvatarClose}
              onCrop={onCrop}
              onDialogClose={handleEditAvatarClose}
              onSave={handleSaveImage}
              open={editAvatarOpen}
              onDialogOpen={handleEditAvatarOpen}
              userName={isError ? "ERROR" : data.name}
              isLoading={editAvatarIsLoading}
            />
            <UserProfileInput
              title={`Imię i nazwisko: ${
                isError ? "ERROR_DATA" : `${data.name} ${data.surname}`
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
      )}
    </Layout>
  );
}
