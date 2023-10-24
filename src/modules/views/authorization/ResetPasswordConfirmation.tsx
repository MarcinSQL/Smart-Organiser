import { useContext } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Copyright from "components/Copyright";
import TextInput from "components/TextInput";
import { Avatar } from "@mui/material";
import BlackboxStudioLogo from "assets/images/Blackbox_Studio_1.png";
import Toast from "./Toast";
import AuthContext from "store/auth-context";
import useResetPasswordConfirm from "modules/logic/authorization/useResetPasswordConfirmation";
import { logoHeight, logoWidth } from "sizes";

export default function ResetPasswordConfirmation() {
  const ctx = useContext(AuthContext);
  const { handleSubmit, register, onSubmit, control } =
    useResetPasswordConfirm();
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
          Utwórz nowe hasło
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <TextInput
            control={control}
            required
            label="Nowe hasło"
            type="password"
            {...register("password", { required: true })}
          />
          <TextInput
            control={control}
            required
            label="Potwierdź nowe hasło"
            type="password"
            {...register("confirmPassword", { required: true })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Zmień hasło
          </Button>
        </Box>
      </Box>
      <Copyright />
      {ctx.isError && <Toast message={ctx.message} />}
    </Container>
  );
}
