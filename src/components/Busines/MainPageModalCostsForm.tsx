import * as yup from "yup";
import dayjs from "dayjs";
import { Box, FormControl, MenuItem } from "@mui/material";
import TextInput from "components/UI/TextInput";
import classes from "../Pure/classes/Modal.module.css";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateEventMutation } from "modules/logic/dashboard/mutations";
import { LoadingButton } from "@mui/lab";
import SelectInput from "components/UI/SelectInput";

interface IFormInput {
  amount: number;
  type: string;
  note?: string;
  date: string;
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
    amount: yup
      .number()
      .typeError("Kwota musi być liczbą")
      .required("Kwota zakupów/zysków jest wymagana"),
    type: yup.string().required("Kategoria jest wymagana"),
    note: yup.string().trim(),
    date: yup.string().default(now.format("YYYY-MM-DDTHH:mm:ss")),
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (costsData) => {
    console.log(costsData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className={classes["form"]}
    >
      <TextInput
        control={control}
        label="Kwota"
        type="number"
        {...register("amount", { required: true })}
      />
      <FormControl className={classes["form__select-container"]}>
        <SelectInput
          control={control}
          label="Kategorie"
          labelId="type-label"
          id="type"
          {...register("type", { required: true })}
        >
          <MenuItem value={"house"}>Dom</MenuItem>
          <MenuItem value={"entertainment"}>Rozrywka</MenuItem>
          <MenuItem value={"subscriptions"}>Subskrypcje</MenuItem>
          <MenuItem value={"gym"}>Siłownia</MenuItem>
          <MenuItem value={"transportation"}>Transport</MenuItem>
          <MenuItem value={"healthcare"}>Opieka zdrowotna</MenuItem>
          <MenuItem value={"insurance"}>Ubezpieczenie</MenuItem>
          <MenuItem value={"pets"}>Zwierzęta</MenuItem>
          <MenuItem value={"utilities"}>Nieokreślone</MenuItem>
        </SelectInput>
      </FormControl>
      <TextInput
        control={control}
        label="Notatka (opcjonalnie)"
        type="text"
        multiline
        rows={4}
        {...register("note", { required: false })}
      />
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
