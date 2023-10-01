import { Controller } from "react-hook-form";
import { Typography, TextField } from "@mui/material";

interface ITextInput {
  control: any;
  name: string;
  label: string;
  type: string;
  defaultValue?: string;
  disabled?: boolean;
}

export default function TextInput(props: ITextInput) {
  const { control, name, label, defaultValue, type, disabled } = props;
  return (
    <Controller
      name={name}
      defaultValue={defaultValue || ""}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <TextField
            disabled={disabled}
            {...field}
            type={type}
            placeholder={label}
            size="medium"
            error={!!fieldState.error}
          />
          {!!fieldState.error && (
            <Typography color="error" fontWeight="light" variant="caption">
              {fieldState.error.message}
            </Typography>
          )}
        </>
      )}
    />
  );
}