import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFormInput {
  email: string;
  password: string;
}

export default function signIn() {
  let userSchema = yup.object().shape({
    email: yup.string().email("Niepoprawny typ maila").required("Pole jest wymagane"),
    password: yup.string().min(6, "Wymagane min 6 znaków").required("Pole jest wymagane"),
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return { register, handleSubmit, onSubmit, control };
}
