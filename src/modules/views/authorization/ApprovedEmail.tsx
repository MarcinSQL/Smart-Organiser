import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Copyright from "components/Copyright";
import { Avatar } from "@mui/material";
import BlackboxStudioLogo from "assets/images/Blackbox_Studio_1.png";
import { logoHeight, logoWidth } from "sizes";

export default function ApprovedEmail() {
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
        <Typography component="h1" variant="h5" textAlign={"center"}>
          Sprawdź swoją skrzynkę pocztową!
        </Typography>
        <Typography component="p" textAlign={"center"}>
          Wysłaliśmy na twojego e-maila linka ze zmianą hasła.
        </Typography>
      </Box>
      <Copyright />
    </Container>
  );
}
