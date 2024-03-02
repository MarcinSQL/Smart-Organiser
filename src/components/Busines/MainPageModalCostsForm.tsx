import * as yup from "yup";
import dayjs, { Dayjs } from "dayjs";
import {
  Box,
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Checkbox,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import TextInput from "components/UI/TextInput";
import classes from "../Pure/classes/Modal.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateEventMutation } from "modules/logic/dashboard/mutations";
import { useState } from "react";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { LoadingButton } from "@mui/lab";
import SelectInput from "components/UI/SelectInput";

interface IFormInput {
  //   amount: number;
  type: string;
  note?: string;
}

interface ICalendarModalEvents {
  mutationOnSuccess: () => void;
}

export default function MainPageModalCostsForm(props: ICalendarModalEvents) {
  const { mutationOnSuccess } = props;
  const now = dayjs();
  now.locale("pl");
  const mutation = useCreateEventMutation();
  const isLoading = mutation.isLoading;

  if (mutation.isSuccess) {
    mutationOnSuccess();
  }

  let userSchema = yup.object().shape({
    // amount: yup.number().required("Kwota zakupów/zysków jest wymagana"),
    type: yup.string().required("Kategoria jest wymagana"),
    note: yup.string().trim(),
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });

  const [type, setType] = useState("");

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const onSubmit: SubmitHandler<IFormInput> = (costsData) => {
    console.log(costsData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className={classes["form"]}
    >
      <FormControl>
        {/* <Controller
          name={"type"}
          defaultValue={""}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <InputLabel htmlFor={"aaa"} id="type-label" error={!!fieldState.error}>
                {fieldState.error ? fieldState.error.message : "Kategoria"}
              </InputLabel>
              <Select
                labelId="type-label"
                id="type-select"
                value={type}
                onChange={handleTypeChange}
                label={fieldState.error ? fieldState.error.message : "Kategoria"}
                error={!!fieldState.error}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </>
          )}
        /> */}
        <SelectInput
          name="type"
          control={control}
          label="Kategorie"
          labelId="type-label"
          id="type"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </SelectInput>
        <TextInput
          control={control}
          label="Notatka (opcjonalnie)"
          type="text"
          multiline
          rows={4}
          {...register("note", { required: false })}
        />
      </FormControl>
      <LoadingButton
        loading={isLoading}
        type="submit"
        fullWidth
        variant="contained"
        className={classes["form__submit-btn"]}
      >
        <span>Stwórz</span>
      </LoadingButton>
    </Box>
  );
}
