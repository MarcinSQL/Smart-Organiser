import { Button, Box, Typography } from "@mui/material";
import classes from "./classes/UserProfile.module.css";

interface IUserProfileTitle {
  onClick: any;
}

export default function UserProfileTitle(props: IUserProfileTitle) {
  const { onClick } = props;
  return (
    <Box>
      <Typography component="h1" variant="h5">
        Konto użytkownika
      </Typography>
      <Button
        color="error"
        fullWidth
        variant="outlined"
        onClick={onClick}
        className={classes["title__btn"]}
      >
        Usuń konto
      </Button>
    </Box>
  );
}
