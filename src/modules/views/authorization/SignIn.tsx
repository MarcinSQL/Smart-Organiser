import * as React from "react";
import ReactDOM from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Copyright from "../../../components/Copyright";
import signIn from "modules/logic/authorization/SignIn";
import TextInput from "components/TextInput";

export default function SignIn() {
  const { handleSubmit, register, onSubmit, control, goToSignUp , goToResetPassword } = signIn();

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
        <Typography component="h1" variant="h5">
          Zaloguj się
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <TextInput
            control={control}
            type="text"
            required
            label="Email"
            {...register("email", { required: true })}
          />
          <TextInput
            control={control}
            required
            label="Hasło"
            type="password"
            {...register("password", { required: true })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Zaloguj się
          </Button>
          <Grid container>
            <Grid item xs>
              <Link onClick={goToSignUp} variant="body2">
                Zapomniałeś hasła?
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={goToResetPassword} variant="body2">
                {"Nie masz konta? Zarejestruj się"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
}
