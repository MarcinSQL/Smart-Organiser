import { CssBaseline, Box } from "@mui/material";
import LayoutHeader from "./LayoutHeader";
import LayoutNavigation from "./LayoutNavigation";
import { ILayout } from "modules/types/dashboard/layout.types";
import LayoutContent from "./LayoutContent";

import classes from "./classes/Layout.module.css";
import { useNavigate } from "react-router-dom";
import { SignInLink } from "links";

export default function Layout(props: ILayout) {
  const navigate = useNavigate();
  // if (!localStorage.getItem("token")) navigate(SignInLink);
  return (
    <Box className={classes.layout}>
      <CssBaseline />
      <LayoutHeader
      />
      <LayoutNavigation />
      <LayoutContent children={props.children} />
    </Box>
  );
}
