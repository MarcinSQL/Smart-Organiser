import { Button, Box } from "@mui/material";

import TextInput from "components/UI/TextInput";
import useMainPageModalEventsForm from "modules/logic/dashboard/useMainPageModalEventsForm";

interface IMainPageModalEvents {
  defaultStartDate: string;
}

export default function MainPageModalEvents(props: IMainPageModalEvents) {
  const { defaultStartDate } = props;
  const { register, handleSubmit, onSubmit, control } =
    useMainPageModalEventsForm();
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
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
        label="Notatka"
        type="textarea"
        {...register("note", { required: false })}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Stwórz
      </Button>
    </Box>
  );
}
