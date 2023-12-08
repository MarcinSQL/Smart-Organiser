import { CssBaseline, Box } from "@mui/material";
import LayoutHeader from "./LayoutHeader";
import LayoutNavigation from "./LayoutNavigation";
import { ILayout } from "modules/types/dashboard/layout.types";
import LayoutContent from "./LayoutContent";

import classes from "./classes/Layout.module.css";
import { useNavigate } from "react-router-dom";
import { SignInLink } from "links";
import { useGetProfileDataQuery } from "modules/logic/dashboard/queries";

export default function Layout(props: ILayout) {
  const navigate = useNavigate();
  const { data, isLoading } = useGetProfileDataQuery();
  if (!localStorage.getItem("token")) navigate(SignInLink);
  return (
    <Box className={classes.layout}>
      <CssBaseline />
      <LayoutHeader
        name={
          isLoading ? "User" : data !== undefined || null ? data.name : "User"
        }
        avatarSrc={
          isLoading ? "ERROR" : data !== undefined || null ? data.img : "ERROR"
        }
      />
      <LayoutNavigation />
      <LayoutContent children={props.children} />
    </Box>
  );
}
