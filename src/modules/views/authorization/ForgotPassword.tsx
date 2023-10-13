import React, { useContext } from "react";
import ReactDOM from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Copyright from "components/Copyright";
import TextInput from "components/TextInput";
import { Avatar } from "@mui/material";
import BlackboxStudioLogo from "assets/images/Blackbox_Studio_1.png";
import AuthContext from "store/auth-context";
import Toast from "./Toast";
import forgotPassword from "modules/logic/authorization/ForgotPassword";

export default function ForgotPassword() {
  const ctx = useContext(AuthContext);
  const {
    handleSubmit,
    register,
    onSubmit,
    control,
    goToSignUp,
    goToSignIn,
  } = forgotPassword();

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
        <Typography component="h1" variant="h5">
          Zmiana hasła
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <TextInput
            control={control}
            type="text"
            required
            label="Email"
            {...register("email", { required: true })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Wyślij
          </Button>
          <Grid container gap={2}>
            <Grid item xs>
              <Link onClick={goToSignIn} variant="body2">
                Posiadasz konto? Zaloguj się
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={goToSignUp} variant="body2">
                Nie masz konta? Zarejestruj się
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright />
      {ctx.isError && <Toast message={ctx.message} />}
    </Container>
  );
}
