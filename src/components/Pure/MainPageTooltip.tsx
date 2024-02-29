import { Paper, Typography } from "@mui/material";
import classes from "./classes/MainPageTooltip.module.css";

export default function MainPageTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <Paper className={classes["tooltip"]}>
        <Typography
          component="p"
          className={classes["tooltip__label"]}
        >{`${payload[0].payload.title} : ${payload[0].value}`}</Typography>
        <Typography component="p" className={classes["tooltip__desc"]}>
          Opis: {`${payload[0].payload.description}`}
        </Typography>
      </Paper>
    );
  }
  return null;
}
