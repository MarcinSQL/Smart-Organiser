import { useContext } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Copyright from "components/Copyright";
import TextInput from "components/UI/TextInput";
import { Avatar } from "@mui/material";
import BlackboxStudioLogo from "assets/images/Blackbox_Studio_1.png";
import AuthContext from "store/auth-context";
import Toast from "../../../components/UI/Toast";
import useResetPassword from "modules/logic/authorization/useResetPassword";
import { logoHeight, logoWidth } from "sizes";

export default function ResetPassword() {
  const ctx = useContext(AuthContext);
  const { handleSubmit, register, onSubmit, control, goToSignUp, goToSignIn } =
    useResetPassword();

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
          mb: 6
        }}
      >
        <Avatar
          src={BlackboxStudioLogo}
          alt="Blackbox Studio logo"
          variant="rounded"
          sx={{ width: logoWidth, height: logoHeight, m: 4}}
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
              <Link onClick={goToSignIn} variant="body2" sx={{cursor: "pointer"}}>
                Posiadasz konto? Zaloguj się
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={goToSignUp} variant="body2" sx={{cursor: "pointer"}}>
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
