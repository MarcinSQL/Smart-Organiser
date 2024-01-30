import { CssBaseline, Box, Drawer } from "@mui/material";
import LayoutHeader from "./LayoutHeader";
import LayoutNavigation from "./LayoutNavigation";
import { ILayout } from "modules/types/dashboard/layout.types";
import LayoutContent from "./LayoutContent";

import classes from "./classes/Layout.module.css";
import { useNavigate } from "react-router-dom";
import { SignInLink } from "links";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Layout(props: ILayout) {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const windowBreakpoint = 1000;

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  const [mobiNavOpen, setMobiNavOpen] = useState(false);

  if (!localStorage.getItem("token")) navigate(SignInLink);

  const handleMobileNavigationOpen = (props: boolean) => {
    setMobiNavOpen(props);
  };

  const handleClosingMobileNavigation =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setMobiNavOpen(open);
    };

  const drawer = (
    <Drawer
      anchor="left"
      open={mobiNavOpen}
      onClose={handleClosingMobileNavigation(false)}
    >
      <LayoutNavigation />
    </Drawer>
  );

  return (
    <Box className={classes.layout}>
      <CssBaseline />
      <Toaster position={'bottom-right'} />
      <LayoutHeader mobiNav={handleMobileNavigationOpen} />
      {windowWidth <= windowBreakpoint ? drawer : <LayoutNavigation />}
      <LayoutContent children={props.children} />
    </Box>
  );
}
