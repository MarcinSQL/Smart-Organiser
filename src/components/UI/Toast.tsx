import ReactDOM from "react-dom";
import { Alert } from "@mui/material";
import { IErrorMessage } from "modules/types/authorization/authorization.types";
import { Fragment } from "react";

import classes from "./classes/Toast.module.css";

function ErrorToast(props: IErrorMessage) {
  return (
    <Alert severity="error" className={classes.toast}>
      {props.message}
    </Alert>
  );
}

export default function Toast(props: IErrorMessage) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ErrorToast message={props.message} />,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </Fragment>
  );
}
