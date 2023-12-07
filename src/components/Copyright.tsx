import { Typography, Link } from "@mui/material";

export default function Copyright() {
  return (
    <>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mt: 8 }}
      >
        {"Copyright © "}
        <Link color="inherit" href="#">
          Smart Organiser
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Wersja: " + process.env.REACT_APP_VERSION}
      </Typography>
    </>
  );
}
