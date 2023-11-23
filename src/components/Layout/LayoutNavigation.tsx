import { Container, Avatar, List } from "@mui/material";
import ListItems from "./ListItems";
import { logoHeight, logoWidth} from "components/utils/sizes";
import BlackboxStudioLogo from "assets/images/Blackbox_Studio_1.png";

import classes from "./classes/Layout.module.css";

export default function LayoutNavigation() {
  return (
    <Container className={classes["layout__navigation"]}>
      <Avatar
        className={classes["layout__navigation__icon"]}
        src={BlackboxStudioLogo}
        alt="Blackbox Studio logo"
        variant="rounded"
        sx={{ width: logoWidth, height: logoHeight }}
      />
      <List className={classes["layout__navigation__list"]} component="nav">
        <ListItems />
      </List>
    </Container>
  );
}
