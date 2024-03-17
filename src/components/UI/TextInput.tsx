import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

interface ITextInput {
  control: any;
  name: string;
  label: string;
  type: string;
  defaultValue?: string | number;
  disabled?: boolean;
  size?: TextFieldSize;
  multiline?: boolean;
  rows?: number;
}

export enum TextFieldSize {
  small = "small",
  medium = "medium",
}

export default function TextInput(props: ITextInput) {
  const {
    control,
    name,
    label,
    defaultValue,
    type,
    disabled,
    size,
    multiline,
    rows,
  } = props;
  return (
    <Controller
      name={name}
      defaultValue={defaultValue || ""}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <TextField
            margin="normal"
            fullWidth
            disabled={disabled}
            {...field}
            type={type}
            multiline={multiline}
            rows={multiline ? rows : ""}
            size={size || "medium"}
            label={fieldState.error ? fieldState.error.message : label}
            error={!!fieldState.error}
          />
        </>
      )}
    />
  );
}
