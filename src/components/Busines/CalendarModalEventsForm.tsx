import * as yup from "yup";

import {
  Button,
  Box,
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  CircularProgress,
} from "@mui/material";

import TextInput from "components/UI/TextInput";
import classes from "../Pure/classes/ModalEvents.module.css";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateEventMutation } from "modules/logic/dashboard/mutations";
import { useGetCalendarEventsQuery } from "modules/logic/dashboard/queries";

interface IFormInput {
  startDate: string;
  endDate: string;
  title: string;
  note?: string;
  type: string;
}

interface ICalendarModalEvents {
  defaultStartDate: string;
}

export default function CalendarModalEvents(props: ICalendarModalEvents) {
  const { defaultStartDate } = props;

  const mutation = useCreateEventMutation();

  const { isLoading } = useGetCalendarEventsQuery();

  let userSchema = yup.object().shape({
    title: yup.string().required("Tytuł jest wymagany"),
    startDate: yup
      .string()
      .required("Data rozpoczęcia wydarzenia jest wymagana")
      .default(defaultStartDate),
    endDate: yup
      .string()
      .required("Data zakończenia wydarzenia jest wymagana")
      .default(defaultStartDate),
    note: yup.string(),
    type: yup.string().required("Typ jest wymagany"),
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (eventData) => {
    mutation.mutate(eventData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className={classes["form"]}
    >
      <TextInput
        control={control}
        type="text"
        required
        label="Tytuł"
        {...register("title", { required: true })}
      />
      <TextInput
        control={control}
        required
        type="date"
        label="Data rozpoczęcia"
        defaultValue={defaultStartDate}
        {...register("startDate", { required: true })}
      />
      <TextInput
        control={control}
        required
        type="date"
        label="Data zakończenia"
        defaultValue={defaultStartDate}
        {...register("endDate", { required: false })}
      />
      <TextInput
        control={control}
        label="Notatka (opcjonalnie)"
        type="text"
        multiline
        rows={4}
        {...register("note", { required: false })}
      />
      <FormControl>
        <FormLabel id="event-type-label">Typ wydarzenia</FormLabel>
        <RadioGroup
          row
          defaultValue="private"
          aria-labelledby="event-type-label"
          className={classes["form__radio-container"]}
        >
          <FormControlLabel
            className={classes["form__radio-btn"]}
            value="private"
            control={<Radio />}
            label="Prywatne"
            {...register("type", { required: true })}
          />
          <FormControlLabel
            className={classes["form__radio-btn"]}
            value="business"
            control={<Radio />}
            label="Służbowe"
            {...register("type", { required: true })}
          />
        </RadioGroup>
      </FormControl>
      <Button
        disabled={isLoading}
        type="submit"
        fullWidth
        variant="contained"
        className={classes["form__submit-btn"]}
      >
        {isLoading ? <CircularProgress /> : "Stwórz"}
      </Button>
    </Box>
  );
}
