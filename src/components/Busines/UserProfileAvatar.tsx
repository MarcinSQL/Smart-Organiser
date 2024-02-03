import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Box,
  Container,
} from "@mui/material";
import Avatar1 from "react-avatar-edit";
import classes from "modules/views/dashboard/classes/UserProfile.module.css";
import useUserProfileFormAvatar from "modules/logic/dashboard/useUserProfileFormAvatar";
import { useGetProfileAvatarQuery } from "modules/logic/dashboard/queries";

interface IUserProfileAvatar {
  img: string;
  onDialogClose: () => void;
  open: boolean;
  onCrop: any;
  onDialogOpen: () => void;
  onSave: any;
  onAvatarClose: () => void;
  userName: string;
}

export default function UserProfileAvatar(props: IUserProfileAvatar) {
  const {
    img,
    onDialogClose,
    open,
    onCrop,
    onDialogOpen,
    onSave,
    onAvatarClose,
    userName,
  } = props;
  const { data: avatar } = useGetProfileAvatarQuery();

  const { handleSubmit, onSubmit } = useUserProfileFormAvatar();
  return (
    <Container component="form" onSubmit={handleSubmit(onSubmit)}>
      <Box className={classes["user-information__avatar"]}>
        <Avatar
          className={classes["user-information__avatar--icon"]}
          alt={userName}
          src={typeof(img) !== "string" ? avatar.avatar : img}
        />
        <Button
          variant="outlined"
          onClick={onDialogOpen}
          className={classes["user-information__avatar--button"]}
        >
          Zmień Awatar
        </Button>
        <Dialog onClose={onDialogClose} open={open}>
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
            <Button type="submit" variant="outlined" fullWidth onClick={onSave}>
              Zapisz nowy Awatar
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
}
