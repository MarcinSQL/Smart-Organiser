import {
  Paper,
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Layout from "components/Layout";
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
  } = useUserProfile();
  return (
    <Layout username={"User"}>
      <Paper sx={{ p: 6 }}>
        <Avatar
          sx={{ width: 102, height: 102, mb: 3 }}
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
      </Paper>
    </Layout>
  );
}
