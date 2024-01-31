import { CircularProgress } from "@mui/material";
import classes from "./classes/TextCircularProgress.module.css";

interface ICircularProgress {
  isLoading: boolean;
  text: string;
}

export default function TextCircularProgress(props: ICircularProgress) {
  const { isLoading, text } = props;
  return isLoading ? (
    <CircularProgress size={"1.55rem"} className={classes["circular-progress"]} />
  ) : (
    <span>{text}</span>
  );
}
