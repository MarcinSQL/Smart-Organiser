import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import classes from "./classes/MainPageCostsNavigation.module.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface IMainPageCostsNavigation {
  modalOpen: () => void;
  monthPrev: () => void;
  monthNext: () => void;
}

export default function MainPageCostsNavigation(
  props: IMainPageCostsNavigation
) {
  const { modalOpen, monthNext, monthPrev } = props;
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
          className={classes["main-page-title"]}
        >
          Luty 2024
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
