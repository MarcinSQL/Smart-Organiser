import { CssBaseline, Box } from "@mui/material";
import LayoutHeader from "./LayoutHeader";
import LayoutNavigation from "./LayoutNavigation";
import { ILayout } from "modules/types/dashboard/layout.types";
import LayoutContent from "./LayoutContent";

export default function Layout(props: ILayout) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <LayoutHeader username={props.username} avatarSrc={props.avatarSrc} />
      <LayoutNavigation />
      <LayoutContent children={props.children} />
    </Box>
  );
}
