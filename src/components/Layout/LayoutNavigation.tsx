import { Container, Avatar, List } from "@mui/material";
import ListItems from "./ListItems";
import { logoHeight, logoWidth } from "components/utils/sizes";
import BlackboxStudioLogo from "assets/images/Blackbox_Studio_1.png";

import classes from "./classes/Layout.module.css";
import { useNavigate } from "react-router-dom";
import { MainPageLink } from "links";

export default function LayoutNavigation() {
  const navigate = useNavigate();
  return (
    <Container className={classes["layout__navigation"]}>
      <Avatar
        className={classes["layout__navigation__icon"]}
        src={BlackboxStudioLogo}
        alt="Blackbox Studio logo"
        variant="rounded"
        sx={{ width: logoWidth, height: logoHeight }}
        onClick={() => navigate(MainPageLink)}
      />
      <List className={classes["layout__navigation__list"]} component="nav">
        <ListItems />
      </List>
    </Container>
  );
}
