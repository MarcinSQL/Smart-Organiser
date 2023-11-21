import { AppBar, Avatar, IconButton, Popover, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { ILayoutHeader } from "modules/types/dashboard/layout.types";
import { SignInLink, UserProfileLink } from "links";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

import classes from "./classes/Layout.module.css";

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
    <AppBar className={classes["layout__header"]}>
      <IconButton onClick={() => navigate(UserProfileLink)}>
        <Avatar
          alt={props.name}
          src={props.avatarSrc ? props.avatarSrc : "error"}
        />
      </IconButton>
      <Typography component="h1" variant="h6" color="inherit" noWrap>
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
          className={classes["layout__header__popover"]}
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
