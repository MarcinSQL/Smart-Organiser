import { CssBaseline, Box, Drawer } from "@mui/material";
import LayoutHeader from "./LayoutHeader";
import LayoutNavigation from "./LayoutNavigation";
import { ILayout } from "modules/types/dashboard/layout.types";
import LayoutContent from "./LayoutContent";

import classes from "./classes/Layout.module.css";
import { useNavigate } from "react-router-dom";
import { SignInLink } from "links";
import { useState } from "react";

export default function Layout(props: ILayout) {
  const navigate = useNavigate();
  const [mobiNavOpen, setMobiNavOpen] = useState(false);

  if (!localStorage.getItem("token")) navigate(SignInLink);

  const handleMobileNavigationOpen = (props: boolean) => {
    setMobiNavOpen(props);
  };

  const handleClosingMobileNavigation = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if(event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')){
      return;
    }
    setMobiNavOpen(open);
  }

  return (
    <Box className={classes.layout}>
      <CssBaseline />
      <LayoutHeader mobiNav={handleMobileNavigationOpen} />
      <Drawer
        anchor="left"
        open={mobiNavOpen}
        onClose={handleClosingMobileNavigation(false)}
      >
        <LayoutNavigation />
      </Drawer>
      <LayoutContent children={props.children} />
    </Box>
  );
}
