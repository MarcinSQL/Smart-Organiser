import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSearchParams } from "react-router-dom";
import { useResetPasswordConfirmMutation } from "./mutations";

interface IFormInput {
  password: string;
  confirmPassword: string;
}

export default function resetPasswordConfirm() {
  const mutation = useResetPasswordConfirmMutation();
  const [userData] = useSearchParams();
  const userId = userData.get("userId");
  const userToken = userData.get("token");

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
    const passwordConfirmData = {
      userId: userId!,
      token: userToken!,
      password,
    };
    mutation.mutate(passwordConfirmData);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    control,
  };
}
