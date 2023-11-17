import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";
import { MainPageLink } from "links";
import classes from "./classes/Layout.module.css";

export default function ListItems() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <ListItemButton onClick={() => navigate(MainPageLink)} className={classes["layout__navigation__list__item"]}>
        <ListItemIcon className={classes["layout__navigation__list__item__icon"]}>
          <CalendarMonthIcon />
        </ListItemIcon>
        <ListItemText primary="Kalendarz" />
      </ListItemButton>
    </React.Fragment>
  );
}
