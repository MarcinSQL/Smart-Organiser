import { CssBaseline, Box, Typography, Container, Button } from "@mui/material";
import Copyright from "components/Copyright";
import { Avatar } from "@mui/material";
import BlackboxStudioLogo from "assets/images/Blackbox_Studio_1.png";
import { logoHeight, logoWidth } from "components/utils/sizes";
import { useNavigate } from "react-router-dom";
import { SignInLink } from "links";
import { grey } from "@mui/material/colors";

export default function SignUpInfo() {
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
          Sprawdź swoją skrzynkę pocztową!
        </Typography>
        <Typography component="p" textAlign={"center"}>
          Wysłaliśmy na twojego e-maila linka z dokończeniem rejestracji konta.
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
