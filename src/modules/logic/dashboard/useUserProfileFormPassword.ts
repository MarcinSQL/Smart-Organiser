import { yupResolver } from "@hookform/resolvers/yup";
import { IEditPassword } from "modules/types/dashboard/userProfile.types";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { useEditPasswordMutation } from "./mutations";

interface IFormInput {
  password: string;
  confirmPassword: string;
}

export default function useUserProfileFormPassword() {
  const mutation = useEditPasswordMutation();

  let userSchema = yup.object().shape({
    password: yup
      .string()
      .min(6, "Wymagane min 6 znaków")
      .required("Nowe hasło nie może być puste"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Hasła muszą być identyczne")
      .required("Potwierdzenie nowego hasła jest wymagane"),
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IEditPassword> = (editedData) => {
    const { password } = editedData;
    editedData = { password: password };

    mutation.mutate(editedData);
  };

  return { register, handleSubmit, control, onSubmit };
}
