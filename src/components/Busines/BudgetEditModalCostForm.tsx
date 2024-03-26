import * as yup from "yup";
import dayjs from "dayjs";
import { Box } from "@mui/material";
import TextInput from "components/UI/TextInput";
import classes from "../Pure/classes/Modal.module.css";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { IBudgetEditCostForm } from "modules/types/dashboard/budget.types";
import { useEditCostMutation } from "modules/logic/dashboard/mutations";

interface IFormInput {
  amount: number;
  date: string;
}

export default function BudgetEditModalCostForm(props: IBudgetEditCostForm) {
  const { mutationOnSuccess, costData } = props;
  const now = dayjs();
  now.locale("pl");
  const mutation = useEditCostMutation();
  const isLoading = mutation.isLoading;

  if (mutation.isSuccess) {
    mutationOnSuccess();
  }

  let userSchema = yup.object().shape({
    amount: yup
      .number()
      .typeError("Kwota musi być liczbą")
      .required("Kwota zakupów/zysków jest wymagana")
      .default(costData.amount),
    date: yup.string().default(now.format("YYYY-MM-DDTHH:mm:ss")),
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (editedData) => {
    let newCostData = {
      ...costData,
      amount: editedData.amount,
      date: editedData.date,
    };
    mutation.mutate(newCostData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className={classes["form"]}
    >
      <TextInput
        defaultValue={costData.amount}
        control={control}
        label="Kwota"
        type="number"
        {...register("amount", { required: true })}
      />
      <LoadingButton
        loading={isLoading}
        type="submit"
        fullWidth
        variant="contained"
        className={classes["form__submit-btn"]}
      >
        <span>Edytuj</span>
      </LoadingButton>
    </Box>
  );
}
