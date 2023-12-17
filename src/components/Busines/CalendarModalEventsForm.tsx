import * as yup from "yup";

import {
  Button,
  Box,
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Checkbox,
} from "@mui/material";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import TextInput from "components/UI/TextInput";
import classes from "../Pure/classes/ModalEvents.module.css";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateEventMutation } from "modules/logic/dashboard/mutations";
import { useState } from "react";

interface IFormInput {
  title: string;
  day: string;
  isAllDay: boolean;
  startTime: string;
  endTime: string;
  eventType: string;
  note?: string;
}

interface ICalendarModalEvents {
  defaultStartDate: string;
}

export default function CalendarModalEvents(props: ICalendarModalEvents) {
  const { defaultStartDate } = props;

  const mutation = useCreateEventMutation();

  const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());

  const handleTimeChange = (props: string) => {
    setCurrTime(props);
  };

  let userSchema = yup.object().shape({
    title: yup.string().required("Tytuł jest wymagany"),
    day: yup
      .string()
      .required("Data rozpoczęcia wydarzenia jest wymagana")
      .default(defaultStartDate),
    isAllDay: yup.boolean(),
    startTime: yup
      .string()
      .required("Data rozpoczęcia wydarzenia jest wymagana"),
    endTime: yup
      .string()
      .required("Data zakończenia wydarzenia jest wymagana"),
    eventType: yup.string().required("Typ jest wymagany"),
    note: yup.string(),
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
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextInput
            control={control}
            required
            type="date"
            label="Data rozpoczęcia"
            defaultValue={defaultStartDate}
            {...register("day", { required: true })}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            label="Cały dzień:"
            control={<Checkbox defaultChecked />}
            {...register("isAllDay", { required: false })}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <DesktopTimePicker
            label={"Godzina rozpoczęcia"}
            ampm={false}
            onChange={handleTimeChange}
            value={currTime}
            {...register("startTime", { required: false })}
          />
        </Grid>
        <Grid item xs={6}>
          <DesktopTimePicker
            label={"Godzina rozpoczęcia"}
            ampm={false}
            onChange={handleTimeChange}
            value={currTime}
            {...register("endTime", { required: false })}
          />
        </Grid>
      </Grid>
      <TextInput
        control={control}
        required
        type="date"
        label="Data zakończenia"
        defaultValue={defaultStartDate}
        {...register("endTime", { required: true })}
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
            {...register("eventType", { required: true })}
          />
          <FormControlLabel
            className={classes["form__radio-btn"]}
            value="business"
            control={<Radio />}
            label="Służbowe"
            {...register("eventType", { required: true })}
          />
        </RadioGroup>
      </FormControl>
      <TextInput
        control={control}
        label="Notatka (opcjonalnie)"
        type="text"
        multiline
        rows={4}
        {...register("note", { required: false })}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        className={classes["form__submit-btn"]}
      >
        Stwórz
      </Button>
    </Box>
  );
}
