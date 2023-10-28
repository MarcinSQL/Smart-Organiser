import ReactDOM from "react-dom";
import { Alert } from "@mui/material";
import { IErrorMessage } from "modules/types/authorization/authorization.types";
import { Fragment } from "react";

function ErrorToast(props: IErrorMessage) {
  return <Alert severity="error" sx={{position: "fixed", bottom: "0", width: "100vw" }}>{props.message}</Alert>;
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
