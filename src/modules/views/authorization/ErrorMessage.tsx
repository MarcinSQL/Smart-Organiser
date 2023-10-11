import { Typography } from "@mui/material";
import { IErrorMessage } from "modules/types/authorization/authorization.types";

export function ErrorMessage(props: IErrorMessage) {
    return <Typography component="p" sx={{ mt: 2, textAlign: "center", color: "red"}} >[{props.status}] {props.message}</Typography>
};