import React from "react";
import ReactDOM from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Copyright from "components/Copyright";
import { Avatar, Button } from "@mui/material";
import BlackboxStudioLogo from "assets/images/Blackbox_Studio_1.png";
import { useNavigate } from "react-router-dom";
import { SignInLink } from "links";

export default function ApprovedAccount() {
  const navigate = useNavigate();
  const goToSignIn = () => {
    navigate(SignInLink);
  };
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          src={BlackboxStudioLogo}
          alt="Blackbox Studio logo"
          variant="rounded"
          sx={{ width: 56, height: 56, m: 4, bgcolor: "secondary.main" }}
        />
        <Typography component="h1" variant="h5" textAlign={"center"}>
          Hasło zostało pomyślnie utworzone
        </Typography>
        <Button
          fullWidth
          onClick={goToSignIn}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Powróć na ekran logowania
        </Button>
      </Box>
      <Copyright />
    </Container>
  );
}
