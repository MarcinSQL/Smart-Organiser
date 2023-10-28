import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

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
            margin="normal"
            fullWidth
            disabled={disabled}
            {...field}
            type={type}
            size="medium"
            label={fieldState.error ? fieldState.error.message : label}
            error={!!fieldState.error}
          />
        </>
      )}
    />
  );
}