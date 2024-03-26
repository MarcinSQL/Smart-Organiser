import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BudgetIcon from "@mui/icons-material/AccountBalanceWallet";
import { useNavigate } from "react-router-dom";
import { BudgetLink, CalendarLink, MainPageLink } from "links";
import classes from "./classes/Layout.module.css";

export default function ListItems() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <ListItemButton
        onClick={() => navigate(MainPageLink)}
        className={classes["layout__navigation__list__item"]}
      >
        <ListItemIcon
          className={classes["layout__navigation__list__item__icon"]}
        >
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Strona główna" />
      </ListItemButton>
      <ListItemButton
        onClick={() => navigate(BudgetLink)}
        className={classes["layout__navigation__list__item"]}
      >
        <ListItemIcon
          className={classes["layout__navigation__list__item__icon"]}
        >
          <BudgetIcon />
        </ListItemIcon>
        <ListItemText primary="Budżet" />
      </ListItemButton>
      <ListItemButton
        onClick={() => navigate(CalendarLink)}
        className={classes["layout__navigation__list__item"]}
      >
        <ListItemIcon
          className={classes["layout__navigation__list__item__icon"]}
        >
          <CalendarMonthIcon />
        </ListItemIcon>
        <ListItemText primary="Kalendarz" />
      </ListItemButton>
    </React.Fragment>
  );
}
