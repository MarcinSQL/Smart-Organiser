import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { SignInLink } from "links";
import { useSignUpMutation } from "./mutations";

interface IFormInput {
  name: string;
  surname: string;
  email: string;
}

export default function useSignUp() {
  const mutation = useSignUpMutation();
  const navigate = useNavigate();
  const isLoading = mutation.isLoading;

  const goToSignIn = () => {
    navigate(SignInLink);
  };

  let userSchema = yup.object().shape({
    name: yup.string().required("Imię jest wymagane"),
    surname: yup.string().required("Nazwisko jest wymagane"),
    email: yup
      .string()
      .email("Niepoprawny typ maila")
      .required("Email jest wymagany"),
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (signUpData) => {
    mutation.mutate(signUpData);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    control,
    goToSignIn,
    isLoading,
  };
}
