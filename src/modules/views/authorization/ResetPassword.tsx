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
import useResetPassword from "modules/logic/authorization/useResetPassword";
import { logoHeight, logoWidth } from "components/utils/sizes";
import { Toaster } from "react-hot-toast";
import { LoadingButton } from "@mui/lab";
import { grey } from "@mui/material/colors";

export default function ResetPassword() {
  const {
    handleSubmit,
    register,
    onSubmit,
    control,
    goToSignUp,
    goToSignIn,
    isLoading,
  } = useResetPassword();

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
      <Toaster position={"bottom-right"} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 6,
        }}
      >
        <Avatar
          src={BlackboxStudioLogo}
          alt="Blackbox Studio logo"
          variant="rounded"
          sx={{
            bgcolor: grey[900],
            width: logoWidth,
            height: logoHeight,
            m: 4,
          }}
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
          <LoadingButton
            loading={isLoading}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            <span>Wyślij</span>
          </LoadingButton>
          <Grid container gap={2}>
            <Grid item xs>
              <Link
                onClick={goToSignIn}
                variant="body2"
                sx={{ cursor: "pointer" }}
              >
                Posiadasz konto? Zaloguj się
              </Link>
            </Grid>
            <Grid item>
              <Link
                onClick={goToSignUp}
                variant="body2"
                sx={{ cursor: "pointer" }}
              >
                Nie masz konta? Zarejestruj się
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
}
