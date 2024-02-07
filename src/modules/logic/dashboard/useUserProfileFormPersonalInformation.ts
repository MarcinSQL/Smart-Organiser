import { yupResolver } from "@hookform/resolvers/yup";
import { IEditPersonalInformation } from "modules/types/dashboard/userProfile.types";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { useEditPersonalInformationMutation } from "./mutations";

interface IFormInput {
  name: string;
  surname: string;
}

export default function useUserProfileFormPersonalInformation() {
  const mutation = useEditPersonalInformationMutation();
  const isLoading = mutation.isLoading;

  let userSchema = yup.object().shape({
    name: yup.string().required("Imię jest wymagane"),
    surname: yup.string().required("Nazwisko jest wymagane"),
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IEditPersonalInformation> = (editedData) => {
    mutation.mutate(editedData);
  };

  return { register, handleSubmit, control, onSubmit, isLoading };
}
