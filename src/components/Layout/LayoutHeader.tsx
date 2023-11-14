import {
  AppBar,
  Avatar,
  Container,
  IconButton,
  Popover,
  Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { navigationWidth } from "components/utils/sizes";
import { ILayoutHeader } from "modules/types/dashboard/layout.types";
import { SignInLink, UserProfileLink } from "links";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

export default function LayoutHeader(props: ILayoutHeader) {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const popoverOpen = Boolean(anchorEl);
  const popoverId = anchorEl ? anchorEl.id : "errorId";

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
      <IconButton onClick={() => navigate(UserProfileLink)}>
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
      <IconButton
        id="userManagment"
        onClick={handlePopoverClick}
        color="inherit"
      >
        <SettingsIcon />
      </IconButton>

      {popoverId === "userManagment" ? (
        <Popover
          id={popoverId}
          open={popoverOpen}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{ mt: 2 }}
        >
          <ListItemButton onClick={() => navigate(UserProfileLink)}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profil użytkownika" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate(SignInLink)}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Wyloguj się" />
          </ListItemButton>
        </Popover>
      ) : null}
    </AppBar>
  );
}
