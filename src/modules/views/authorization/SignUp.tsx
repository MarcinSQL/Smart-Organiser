import { useContext } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Copyright from "components/Copyright";
import TextInput from "components/TextInput";
import { Avatar } from "@mui/material";
import BlackboxStudioLogo from "assets/images/Blackbox_Studio_1.png";
import Toast from "./Toast";
import AuthContext from "store/auth-context";
import useSignUp from "modules/logic/authorization/useSignUp";

export default function SignUp() {
  const ctx = useContext(AuthContext);
  const { handleSubmit, register, onSubmit, control, goToSignIn } = useSignUp();

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
          Zarejestruj się
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextInput
                control={control}
                type="text"
                required
                label="Imię"
                {...register("name", { required: true })}
              />
            </Grid>
            <Grid item xs={8}>
              <TextInput
                control={control}
                type="text"
                required
                label="Nazwisko"
                {...register("surname", { required: true })}
              />
            </Grid>
          </Grid>
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
            Zarejestruj się
          </Button>
          <Link onClick={goToSignIn} variant="body2">
            {"Posiadasz konto? Zaloguj się"}
          </Link>
        </Box>
      </Box>
      <Copyright />
      {ctx.isError && <Toast message={ctx.message} />}
    </Container>
  );
}
