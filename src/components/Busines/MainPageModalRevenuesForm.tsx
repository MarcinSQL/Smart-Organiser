import * as yup from "yup";
import dayjs from "dayjs";
import { Box, FormControl, MenuItem } from "@mui/material";
import TextInput from "components/UI/TextInput";
import classes from "../Pure/classes/Modal.module.css";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateRevenuesMutation } from "modules/logic/dashboard/mutations";
import { LoadingButton } from "@mui/lab";
import SelectInput from "components/UI/SelectInput";
import { IMainPageFormCosts } from "modules/types/dashboard/mainPage.types";

interface IFormInput {
  amount: number;
  type: string;
  note?: string;
  date: string;
}

export default function MainPageModalRevenuesForm(props: IMainPageFormCosts) {
  const { mutationOnSuccess } = props;
  const now = dayjs();
  now.locale("pl");
  const mutation = useCreateRevenuesMutation();
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
    mutation.mutate(costsData);
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
          <MenuItem value={"job"}>Praca stała</MenuItem>
          <MenuItem value={"additional-job"}>Praca dodatkowa</MenuItem>
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
        <span>Dodaj</span>
      </LoadingButton>
    </Box>
  );
}
