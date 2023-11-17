import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import Avatar1 from "react-avatar-edit";
import classes from "modules/views/dashboard/classes/UserProfile.module.css";

interface IUserProfileAvatar {
  img: string;
  onDialogClose: () => void;
  open: boolean;
  onCrop: any;
  onDialogOpen: () => void;
  onSave: any;
  onAvatarClose: () => void;
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
  } = props;
  return (
    <Box className={classes["user-information__avatar"]}>
      <Avatar
        className={classes["user-information__avatar--icon"]}
        alt="User"
        src={img ? img : `error`}
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
          <Button variant="outlined" fullWidth onClick={onSave}>
            Zapisz nowy Awatar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
