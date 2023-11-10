import { Button, Typography, Box } from "@mui/material";
import classes from "./classes/UserProfile.module.css";

interface IUserProfileInput {
  onClick: any;
  title: string;
  id: string;
  btnText: string;
}

export default function UserProfileInput(props: IUserProfileInput) {
  const { onClick, title, id, btnText } = props;
  return (
    <Box className={classes["input-box"]}>
      <Typography component={"p"}>{title}</Typography>
      <Button id={id} variant="outlined" onClick={onClick}>
        {btnText}
      </Button>
    </Box>
  );
}
