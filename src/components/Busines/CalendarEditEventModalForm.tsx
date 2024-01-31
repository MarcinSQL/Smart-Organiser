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

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEditEventMutation } from "modules/logic/dashboard/mutations";
import { useState } from "react";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import TextCircularProgress from "components/UI/TextCircularProgress";

interface IFormInput {
  id: string;
  title: string;
  day: string;
  isAllDay: boolean;
  startTime: string;
  endTime: string;
  eventType: string;
  note?: string;
}

interface ICalendarEditEventModalForm {
  eventData: {
    id: string;
    title: string;
    day: string;
    isAllDay: boolean;
    startTime: string;
    endTime: string;
    eventType: string;
    note: string;
  };
  deleteModalBtnOnOpen: () => void;
  mutationOnSuccess: () => void;
}

export default function CalendarEditEventModalForm(
  props: ICalendarEditEventModalForm
) {
  const { eventData, deleteModalBtnOnOpen, mutationOnSuccess } = props;
  const now = dayjs();
  now.locale("pl");
  const mutation = useEditEventMutation();
  const editIsLoading = mutation.isLoading;

  if (mutation.isSuccess) {
    mutationOnSuccess();
  }

  const [startTime, setStartTime] = useState<Dayjs | null>(
    eventData.isAllDay === false
      ? now
          .hour(parseInt(eventData.startTime.split(":")[0]))
          .minute(parseInt(eventData.startTime.split(":")[1]))
      : now.hour(0).minute(0)
  );
  const [endTime, setEndTime] = useState<Dayjs | null>(
    eventData.isAllDay === false
      ? now
          .hour(parseInt(eventData.endTime.split(":")[0]))
          .minute(parseInt(eventData.endTime.split(":")[1]))
      : now.hour(0).minute(0)
  );

  const [isAllDay, setIsAllDay] = useState(eventData.isAllDay);

  const handleStartTimeChange = (props: Dayjs | null) => {
    setStartTime(props);
  };

  const handleEndTimeChange = (props: Dayjs | null) => {
    setEndTime(props);
  };

  const handleIsAllDayChange = (props: boolean) => {
    setIsAllDay(props);
  };

  let userSchema = yup.object().shape({
    id: yup.string().default(eventData.id),
    title: yup
      .string()
      .trim()
      .required("Tytuł jest wymagany")
      .max(64, "Maksymalnie 64 znaki!")
      .default(eventData.title),
    day: yup
      .string()
      .required("Data rozpoczęcia wydarzenia jest wymagana")
      .default(eventData.day),
    isAllDay: yup.boolean().default(eventData.isAllDay),
    startTime: yup.string().default(eventData.startTime ?? "00:00"),
    endTime: yup.string().default(eventData.endTime ?? "00:00"),
    eventType: yup.string().required("Typ jest wymagany"),
    note: yup.string().trim(),
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (editedEvent) => {
    if (isAllDay === true) {
      mutation.mutate(editedEvent);
    } else {
      const startTimeString = `${startTime?.format("HH")}:${startTime?.format(
        "mm"
      )}`;

      const endTimeString = `${endTime?.format("HH")}:${endTime?.format("mm")}`;
      editedEvent = {
        ...editedEvent,
        startTime: startTimeString,
        endTime: endTimeString,
      };

      mutation.mutate(editedEvent);
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
        defaultValue={eventData.title}
      />
      <FormControlLabel
        label="Cały dzień:"
        labelPlacement="start"
        control={
          <Checkbox
            {...isAllDayField}
            defaultChecked={eventData.isAllDay}
            onChange={(e) => {
              isAllDayField.onChange(e);
              handleIsAllDayChange(e.target.checked);
            }}
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
          defaultValue={eventData.eventType}
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
        defaultValue={eventData.note}
        {...register("note", { required: false })}
      />
      <Box className={classes["form__control-btn-container"]}>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="error"
          className={classes["form__remove-btn"]}
          onClick={deleteModalBtnOnOpen}
        >
          {"Usuń"}
        </Button>
        <Button
          disabled={editIsLoading}
          type="submit"
          fullWidth
          variant="contained"
          className={classes["form__submit-btn"]}
        >
          <TextCircularProgress isLoading={editIsLoading} text="Edytuj" />
        </Button>
      </Box>
    </Box>
  );
}
