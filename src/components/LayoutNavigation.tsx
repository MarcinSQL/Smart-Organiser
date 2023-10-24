import { Container, Avatar, List } from "@mui/material";
import { mainListItems } from "./ListItems";
import { navigationWidth } from "sizes";
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
        sx={{ width: 56, height: 56, m: 4 }}
      />
      <List
        component="nav"
        sx={{
          width: "100%",
        }}
      >
        {mainListItems}
      </List>
    </Container>
  );
}
