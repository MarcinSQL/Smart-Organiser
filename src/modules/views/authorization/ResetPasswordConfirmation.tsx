import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Copyright from "components/Copyright";
import TextInput from "components/UI/TextInput";
import { Avatar } from "@mui/material";
import BlackboxStudioLogo from "assets/images/Blackbox_Studio_1.png";
import useResetPasswordConfirm from "modules/logic/authorization/useResetPasswordConfirmation";
import { logoHeight, logoWidth } from "components/utils/sizes";
import { Toaster } from "react-hot-toast";
import { LoadingButton } from "@mui/lab";
import { grey } from "@mui/material/colors";

export default function ResetPasswordConfirmation() {
  const { handleSubmit, register, onSubmit, control, isLoading } =
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
          <LoadingButton
            loading={isLoading}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            <span>Zmień hasło</span>
          </LoadingButton>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
}
