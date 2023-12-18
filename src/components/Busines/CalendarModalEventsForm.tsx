import * as yup from "yup";
import dayjs, { Dayjs } from "dayjs";
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
import TextInput from "components/UI/TextInput";
import classes from "../Pure/classes/ModalEvents.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateEventMutation } from "modules/logic/dashboard/mutations";
import { ChangeEvent, useState } from "react";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";

interface IFormInput {
  title: string;
  day: string;
  // isAllDay: boolean;
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
  const now = dayjs();
  now.locale("pl");
  const mutation = useCreateEventMutation();

  const [startTime, setStartTime] = useState<Dayjs | null>(now);
  const [endTime, setEndTime] = useState<Dayjs | null>(now.add(1, "hour"));

  const handleStartTimeChange = (props: Dayjs | null) => {
    setStartTime(props);
  };

  const handleEndTimeChange = (props: Dayjs | null) => {
    setEndTime(props);
  };

  const handleIsAllDayChange = (props: ChangeEvent<HTMLInputElement>) => {
    console.log(props);
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
    endTime: yup.string().required("Data zakończenia wydarzenia jest wymagana"),
    eventType: yup.string().required("Typ jest wymagany"),
    note: yup.string(),
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (eventData) => {
    console.log(eventData);

    mutation.mutate(eventData);
  };

  const startTimeField = register("startTime", { required: false });
  const endTimeField = register("endTime", { required: false });
  // const isAllDayField = register("isAllDay", { required: true });

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
          {/* <FormControlLabel
            label="Cały dzień:"
            control={
              <Checkbox
                {...isAllDayField}
                onChange={(e) => {
                  isAllDayField.onChange;
                  handleIsAllDayChange;
                }}
                name={"isAllDay"}
                defaultChecked
              />
            }
          /> */}
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid item xs={6}>
            <TimePicker
              label={"Godzina rozpoczęcia"}
              ampm={false}
              {...startTimeField}
              onChange={(e) => {
                console.log(e);
                startTimeField.onChange;
                handleStartTimeChange(e);
              }}
              value={startTime}
            />
          </Grid>
          <Grid item xs={6}>
            <TimePicker
              label={"Godzina zakończenia"}
              ampm={false}
              {...endTimeField}
              onChange={(e) => {
                console.log(e);
                endTimeField.onChange;
                handleEndTimeChange(e);
              }}
              value={endTime}
            />
          </Grid>
        </LocalizationProvider>
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
