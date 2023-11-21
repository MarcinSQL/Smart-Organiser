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
  if(!localStorage.getItem("userId")) navigate(SignInLink);
  return (
    <Box className={classes.layout}>
      <CssBaseline />
      <LayoutHeader
        name={typeof props.name === "string" ? props.name : "User"}
        avatarSrc={
          typeof props.avatarSrc === "string" ? props.avatarSrc : "ERROR_SRC"
        }
      />
      <LayoutNavigation />
      <LayoutContent children={props.children} />
    </Box>
  );
}
