import { Container, Grid, Typography } from "@mui/material";
import classes from "./classes/BudgetCostsInfo.module.css";
import { useGetCostsQuery } from "modules/logic/dashboard/queries";
import {
  IBudgetCostInfo,
  IBudgetCosts,
} from "modules/types/dashboard/budget.types";

export default function BudgetCostsInfo(props: IBudgetCostInfo) {
  const { data } = useGetCostsQuery();
  const { givenDate } = props;

  let totalRevenues = 0;
  let totalExpenses = 0;

  const costsList: IBudgetCosts[] = [];

  // WHEN ENDPOINTS WILL BE CREATED
  // data?.forEach((element: IBudgetCosts) => {
  //   if (element.date.slice(5, 7) == givenDate.format("MM")) {
  //     costsList.push(element);
  //   }
  // });

  costsList?.forEach((element: IBudgetCosts) => {
    if (element.type === "revenues") {
      totalRevenues += element.amount;
    } else {
      totalExpenses += element.amount;
    }
  });

  let summary = totalRevenues - totalExpenses;

  return (
    <Container className={classes.container}>
      <Grid container columnSpacing={2}>
        <Grid item xs={6}>
          <Container
            className={classes["total-box"] + " " + classes["revenues"]}
          >
            <Typography component="h1" variant="h6">
              Całkowite przychody
            </Typography>
            <Typography component="p">{totalRevenues}</Typography>
          </Container>
        </Grid>
        <Grid item xs={6}>
          <Container
            className={classes["total-box"] + " " + classes["expenses"]}
          >
            <Typography component="h1" variant="h6">
              Całkowite wydatki
            </Typography>
            <Typography component="p">{totalExpenses}</Typography>
          </Container>
        </Grid>
      </Grid>
      <Container className={classes["total-box"] + " " + classes["summary"]}>
        <Typography component="h1" variant="h6">
          Podsumowanie
        </Typography>
        <Typography component="p">{summary}</Typography>
      </Container>
    </Container>
  );
}
