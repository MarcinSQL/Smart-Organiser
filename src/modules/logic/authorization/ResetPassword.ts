import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { SignInLink, SignUpLink } from "links";
import { useContext } from "react";
import AuthContext from "store/auth-context";
import { useResetPasswordMutation } from "./mutations";

interface IFormInput {
  email: string;
}

export default function resetPassword() {
  const mutation = useResetPasswordMutation();
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);

  const goToSignUp = () => {
    navigate(SignUpLink);
    ctx.isError = false;
  };
  const goToSignIn = () => {
    navigate(SignInLink);
    ctx.isError = false;
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
  };
}
