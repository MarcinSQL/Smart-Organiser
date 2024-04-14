import { Box, Typography } from "@mui/material";
import BudgetCostsInfo from "./BudgetCostsInfo";
import { IMainPageBudgetInfo } from "modules/types/dashboard/mainPage.types";
import classes from "./classes/MainPageBudgetInfo.module.css";

export default function MainPageBudgetInfo(props: IMainPageBudgetInfo) {
  const { currentDate } = props;
  return (
    <Box>
      <Typography component="h1" variant="h2" className={classes["heading"]}>
        Podsumowanie budżetu
      </Typography>
      <BudgetCostsInfo givenDate={currentDate} />
    </Box>
  );
}
