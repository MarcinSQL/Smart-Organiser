import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Copyright from "components/Copyright";
import TextInput from "components/UI/TextInput";
import { Avatar } from "@mui/material";
import BlackboxStudioLogo from "assets/images/Blackbox_Studio_1.png";
import useConfirmAccount from "modules/logic/authorization/useConfirmAccount";
import { logoHeight, logoWidth } from "components/utils/sizes";
import { Toaster } from "react-hot-toast";
import TextCircularProgress from "components/UI/TextCircularProgress";

export default function ConfirmAccount() {
  const { handleSubmit, register, onSubmit, control, isLoading } =
    useConfirmAccount();
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
          sx={{ width: logoWidth, height: logoHeight, m: 4 }}
        />
        <Typography component="h1" variant="h5">
          Utwórz hasło do potwierdzenia konta
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <TextInput
            control={control}
            required
            label="Hasło"
            type="password"
            {...register("password", { required: true })}
          />
          <TextInput
            control={control}
            required
            label="Potwierdź hasło"
            type="password"
            {...register("confirmPassword", { required: true })}
          />
          <Button
            disabled={isLoading}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            <TextCircularProgress
              isLoading={isLoading}
              text="Potwierdź konto"
            />
          </Button>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
}
