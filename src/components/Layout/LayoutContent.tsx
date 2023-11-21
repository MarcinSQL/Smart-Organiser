import { Container, Toolbar, Box } from "@mui/material";
import Copyright from "../Copyright";
import { ILayoutContent } from "modules/types/dashboard/layout.types";

import classes from "./classes/Layout.module.css";

export default function LayoutContent(props: ILayoutContent) {
  return (
    <Box component="main" className={classes["layout__content"]}>
      <Toolbar />
      <Container>
        {props.children}
        <Copyright />
      </Container>
    </Box>
  );
}
