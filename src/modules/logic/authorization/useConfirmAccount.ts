import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useSearchParams } from "react-router-dom";
import { useConfirmAccountMutation } from "./mutations";

interface IFormInput {
  password: string;
  confirmPassword: string;
}

export default function useConfirmAccount() {
  const mutation = useConfirmAccountMutation();
  const [userData] = useSearchParams();
  const { userId } = useParams();
  const userToken = userData.get("token");
  const isLoading = mutation.isLoading;

  let userSchema = yup.object().shape({
    password: yup
      .string()
      .min(6, "Wymagane min 6 znaków")
      .required("Hasło jest wymagane"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Hasła muszą być identyczne")
      .required("Hasła muszą być identyczne"),
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (confirmedPassword) => {
    const { password } = confirmedPassword;
    const accountConfirmData = {
      userId: userId!,
      token: userToken!,
      password,
    };
    mutation.mutate(accountConfirmData);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    control,
    isLoading,
  };
}
