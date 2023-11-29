import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateEventMutation } from "./mutations";

interface IFormInput {
  startDate: string;
  endDate: string;
  title: string;
  note?: string;
}

export default function useMainPageModalEventsForm() {
  const mutation = useCreateEventMutation();

  let userSchema = yup.object().shape({
    title: yup
      .string()
      .email("Niepoprawny typ maila")
      .required("Email jest wymagany"),
    startDate: yup.string().required("Data zaczęcia wydarzenia jest wymagana"),
    endDate: yup.string().required("Data zakończenia wydarzenia jest wymagana"),
    note: yup.string(),
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (eventData) => {
    mutation.mutate(eventData);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    control,
  };
}
