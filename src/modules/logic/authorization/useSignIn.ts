import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { ResetPasswordLink, SignUpLink } from "links";
import { useLoginMutation } from "./mutations";

interface IFormInput {
  email: string;
  password: string;
}

export default function useSignIn() {
  const mutation = useLoginMutation();
  const navigate = useNavigate();
  const isLoading = mutation.isLoading;

  const goToSignUp = () => {
    navigate(SignUpLink);
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
    mutation.mutate(loginData);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    control,
    goToSignUp,
    goToResetPassword,
    isLoading
  };
}
