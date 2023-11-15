import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import Avatar1 from "react-avatar-edit";
import classes from "./classes/UserProfile.module.css";

interface IUserProfileAvatar {
  img: string;
  onDialogClose: any;
  open: boolean;
  onCrop: any;
  onDialogOpen: any;
  onSave: any;
  onAvatarClose: any;
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
        sx={{ width: 102, height: 102, mb: 2 }}
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
          <Button variant="outlined" onClick={onSave}>
            Zapisz nowy Awatar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
