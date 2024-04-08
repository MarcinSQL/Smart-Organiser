import { Button, Grid, IconButton, Typography } from "@mui/material";
import classes from "./classes/BudgetCostsNavigation.module.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { IBudgetCostsNavigation } from "modules/types/dashboard/budget.types";
import { monthsPL } from "components/utils/months";

export default function BudgetCostsNavigation(props: IBudgetCostsNavigation) {
  const { modalOpen, monthNext, monthPrev, date } = props;

  let displayedDate = date.format("YYYY");

  const monthNumber = parseInt(date.format("MM")) - 1;
  displayedDate = monthsPL[monthNumber] + " " + displayedDate;

  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"space-between"}
      className={classes.container}
    >
      <Grid item xs={2} md={2} className={classes["prev-next-btns"]}>
        <IconButton onClick={monthPrev}>
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton onClick={monthNext}>
          <NavigateNextIcon />
        </IconButton>
      </Grid>
      <Grid item xs={6} md={8}>
        <Typography
          component="h1"
          variant="h2"
          className={classes["budget-title"]}
        >
          {displayedDate}
        </Typography>
      </Grid>
      <Grid item xs={4} md={2} textAlign={"right"}>
        <Button
          variant="contained"
          color="info"
          onClick={modalOpen}
          className={classes["modal-btn"]}
        >
          Dodaj kwotę
        </Button>
      </Grid>
    </Grid>
  );
}
