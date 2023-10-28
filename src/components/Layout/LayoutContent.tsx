import { Container, Toolbar, Box } from "@mui/material";
import Copyright from "../Copyright";
import { ILayoutContent } from "modules/types/dashboard/layout.types";

export default function LayoutContent(props: ILayoutContent) {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) => theme.palette.grey[100],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {props.children}
        <Copyright />
      </Container>
    </Box>
  );
}
