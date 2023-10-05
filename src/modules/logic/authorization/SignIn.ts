import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { ResetPasswordLink, SignInLink } from "links";
import { authLogin } from "api/auth.service";

interface IFormInput {
  email: string;
  password: string;
}

export default function signIn() {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate(SignInLink);
  };
  const goToResetPassword = () => {
    navigate(ResetPasswordLink);
  };

  let userSchema = yup.object().shape({
    email: yup
      .string()
      .email("Niepoprawny typ maila")
      .required("Email jest wymagany"),
    password: yup
      .string()
      .min(6, "Wymagane min 6 znaków")
      .required("Hasło jest wymagane"),
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });
  const onSubmit: SubmitHandler<IFormInput> = (loginData) => {
    authLogin(loginData);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    control,
    goToSignUp,
    goToResetPassword,
  };
}
