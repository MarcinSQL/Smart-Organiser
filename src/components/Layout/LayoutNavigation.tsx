import { Container, Avatar, List } from "@mui/material";
import ListItems from "./ListItems";
import { logoHeight, logoWidth, navigationWidth } from "components/utils/sizes";
import BlackboxStudioLogo from "assets/images/Blackbox_Studio_1.png";

export default function LayoutNavigation() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: navigationWidth,
      }}
    >
      <Avatar
        src={BlackboxStudioLogo}
        alt="Blackbox Studio logo"
        variant="rounded"
        sx={{ width: logoWidth, height: logoHeight, m: 4 }}
      />
      <List
        component="nav"
        sx={{
          width: "100%",
        }}
      >
        <ListItems />
      </List>
    </Container>
  );
}
