import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useUserProfileMutation } from "./mutations";

interface IFormInput {
  name?: string;
  surname?: string;
  password?: string;
}

export default function useUserProfile() {
  const [editAvatarOpen, setEditAvatarOpen] = useState(false);
  const [img, setImg] = useState("");
  const mutation = useUserProfileMutation();

  const editAvatarOpenHandler = () => {
    setEditAvatarOpen(true);
  };

  const editAvatarCloseHandler = () => {
    setEditAvatarOpen(false);
  };

  const onCrop = (view: string) => {
    setImg(view);
  };

  const onClose = () => {
    setImg("");
  };

  const saveImageHandler = () => {
    setEditAvatarOpen(false);
  };

  let userSchema = yup.object().shape({
    name: yup.string(),
    surname: yup.string(),
    password: yup
      .string()
      .min(6, "Wymagane min 6 znaków"),
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (editedData) => {
    mutation.mutate(editedData);
  };

  return {
    editAvatarOpenHandler,
    editAvatarCloseHandler,
    editAvatarOpen,
    onCrop,
    onClose,
    saveImageHandler,
    img,
    register,
    handleSubmit,
    onSubmit,
    control
  };
}
