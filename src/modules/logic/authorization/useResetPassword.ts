import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { SignInLink, SignUpLink } from "links";
import { useResetPasswordMutation } from "./mutations";

interface IFormInput {
  email: string;
}

export default function useResetPassword() {
  const mutation = useResetPasswordMutation();
  const navigate = useNavigate();
  const isLoading = mutation.isLoading;

  const goToSignUp = () => {
    navigate(SignUpLink);
  };
  const goToSignIn = () => {
    navigate(SignInLink);
  };

  let userSchema = yup.object().shape({
    email: yup
      .string()
      .email("Niepoprawny typ maila")
      .required("Email jest wymagany"),
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (email) => {
    mutation.mutate(email);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    control,
    goToSignUp,
    goToSignIn,
    isLoading,
  };
}
