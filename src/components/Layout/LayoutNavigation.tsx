import { Avatar, List, Box } from "@mui/material";
import ListItems from "./ListItems";
import { logoHeight, logoWidth } from "components/utils/sizes";
import BlackboxStudioLogo from "assets/images/Blackbox_Studio_1.png";

import classes from "./classes/Layout.module.css";
import { useNavigate } from "react-router-dom";
import { MainPageLink } from "links";
import { grey } from "@mui/material/colors";

export default function LayoutNavigation() {
  const navigate = useNavigate();
  return (
    <Box className={classes["layout__navigation"]}>
      <Avatar
        className={classes["layout__navigation__icon"]}
        src={BlackboxStudioLogo}
        alt="Blackbox Studio logo"
        variant="rounded"
        sx={{ bgcolor: grey[900], width: logoWidth, height: logoHeight }}
        onClick={() => navigate(MainPageLink)}
      />
      <List className={classes["layout__navigation__list"]} component="nav">
        <ListItems />
      </List>
    </Box>
  );
}
