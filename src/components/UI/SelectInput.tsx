import { InputLabel, Select } from "@mui/material";
import { Controller } from "react-hook-form";

interface ISelectInput {
  control: any;
  name: string;
  label: string;
  type?: string;
  defaultValue?: string;
  children: React.ReactNode;
  labelId: string;
  id: string;
}

export default function SelectInput(props: ISelectInput) {
  const {
    control,
    name,
    label,
    defaultValue,
    type,
    labelId,
    id
  } = props;
  return (
    <Controller
      name={name}
      defaultValue={defaultValue || ""}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <InputLabel
            id={labelId}
            error={!!fieldState.error}
          >
            {fieldState.error ? fieldState.error.message : label}
          </InputLabel>
          <Select
            type={type}
            labelId={labelId}
            id={id}
            label={fieldState.error ? fieldState.error.message : label}
            error={!!fieldState.error}
            {...field}
          >
            {props.children}
          </Select>
        </>
      )}
    />
  );
}
