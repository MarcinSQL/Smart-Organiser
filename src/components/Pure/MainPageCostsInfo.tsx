import { Container, Grid, Typography } from "@mui/material";
import classes from "./classes/MainPageCostsInfo.module.css";

export default function MainPageCostsInfo() {
  return (
    <Container className={classes.container}>
      <Grid container columnSpacing={2}>
        <Grid item xs={6}>
          <Container className={classes["total-box"] + " " + classes["revenues"]}>
            <Typography component="h1" variant="h6">
              Całkowite przychody
            </Typography>
            <Typography component="p">552523</Typography>
          </Container>
        </Grid>
        <Grid item xs={6}>
          <Container className={classes["total-box"] + " " + classes["expenses"]}>
            <Typography component="h1" variant="h6">
              Całkowite wydatki
            </Typography>
            <Typography component="p">41114</Typography>
          </Container>
        </Grid>
      </Grid>
      <Container className={classes["total-box"] + " " + classes["summary"]}>
        <Typography component="h1" variant="h6">
          Podsumowanie
        </Typography>
        <Typography component="p">5331</Typography>
      </Container>
    </Container>
  );
}
