import { AppBar, Avatar, IconButton, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { navigationWidth } from "components/utils/sizes";
import { ILayoutHeader } from "modules/types/dashboard/layout.types";

export default function LayoutHeader(props: ILayoutHeader) {
  return (
    <AppBar
      sx={{
        p: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        ml: `${navigationWidth}px`,
        width: `calc(100vw - ${navigationWidth}px)`,
      }}
    >
      <IconButton>
        <Avatar
          alt={props.name}
          src={props.avatarSrc ? props.avatarSrc : "error"}
        />
      </IconButton>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ pr: 2, pl: 2 }}
      >
        Witaj {props.name}
      </Typography>
      <IconButton color="inherit">
        <SettingsIcon />
      </IconButton>
    </AppBar>
  );
}
