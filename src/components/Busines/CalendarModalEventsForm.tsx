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
  CircularProgress,
  Grid,
  Checkbox,
} from "@mui/material";
import TextInput from "components/UI/TextInput";
import classes from "../Pure/classes/ModalEvents.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateEventMutation } from "modules/logic/dashboard/mutations";
import { useState } from "react";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { useGetCalendarEventsQuery } from "modules/logic/dashboard/queries";

interface IFormInput {
  title: string;
  day: string;
  isAllDay?: boolean;
  startTime?: string;
  endTime?: string;
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
  const [isAllDay, setIsAllDay] = useState(true);

  const handleStartTimeChange = (props: Dayjs | null) => {
    setStartTime(props);
  };

  const handleEndTimeChange = (props: Dayjs | null) => {
    setEndTime(props);
  };

  const handleIsAllDayChange = (props: boolean) => {
    setIsAllDay(props);
  };

  const { isLoading } = useGetCalendarEventsQuery();

  let userSchema = yup.object().shape({
    title: yup.string().required("Tytuł jest wymagany"),
    day: yup
      .string()
      .required("Data rozpoczęcia wydarzenia jest wymagana")
      .default(defaultStartDate),
    isAllDay: yup.boolean(),
    startTime: yup.string(),
    endTime: yup.string(),
    eventType: yup.string().required("Typ jest wymagany"),
    note: yup.string(),
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (eventData) => {
    if (isAllDay === true) {
      mutation.mutate(eventData);
    } else {
      const startTimeString = `${startTime?.get("hours")}:${startTime?.get(
        "minutes"
      )}`;
      const endTimeString = `${endTime?.get("hours")}:${endTime?.get(
        "minutes"
      )}`;
      eventData = {
        ...eventData,
        startTime: startTimeString,
        endTime: endTimeString,
      };
      mutation.mutate(eventData);
    }
  };

  const startTimeField = register("startTime", { required: false });
  const endTimeField = register("endTime", { required: false });
  const isAllDayField = register("isAllDay", { required: true });

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
      <FormControlLabel
        label="Cały dzień:"
        labelPlacement="start"
        control={
          <Checkbox
            {...isAllDayField}
            onChange={(e) => {
              isAllDayField.onChange;
              handleIsAllDayChange(e.target.checked);
            }}
            defaultChecked
          />
        }
      />
      <Grid container spacing={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid item xs={6}>
            <Controller
              name="startTime"
              control={control}
              defaultValue=""
              render={() => (
                <>
                  <TimePicker
                    label={"Godzina rozpoczęcia"}
                    ampm={false}
                    {...startTimeField}
                    onChange={(e) => {
                      startTimeField.onChange;
                      handleStartTimeChange(e);
                    }}
                    value={startTime}
                    disabled={isAllDay ? true : false}
                  />
                </>
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="endTime"
              control={control}
              defaultValue=""
              render={() => (
                <>
                  <TimePicker
                    label={"Godzina zakończenia"}
                    ampm={false}
                    {...endTimeField}
                    onChange={(e) => {
                      endTimeField.onChange;
                      handleEndTimeChange(e);
                    }}
                    value={endTime}
                    disabled={isAllDay ? true : false}
                  />
                </>
              )}
            />
          </Grid>
        </LocalizationProvider>
      </Grid>
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
