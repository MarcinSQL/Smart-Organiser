import {
  Button,
  Box,
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import TextInput from "components/UI/TextInput";
import useMainPageModalEventsForm from "modules/logic/dashboard/useMainPageModalEventsForm";
import classes from "../Pure/classes/ModalEvents.module.css";

interface IMainPageModalEvents {
  defaultStartDate: string;
}

export default function MainPageModalEvents(props: IMainPageModalEvents) {
  const { defaultStartDate } = props;
  const { register, handleSubmit, onSubmit, control } =
    useMainPageModalEventsForm();
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
        {...register("endDate", { required: true })}
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
