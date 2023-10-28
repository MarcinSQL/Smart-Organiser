import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useUserProfileMutation } from "./mutations";

interface IFormInput {
  img?: string;
  name?: string;
  surname?: string;
  password?: string;
}

export default function useUserProfile() {
  const [editAvatarOpen, setEditAvatarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [img, setImg] = useState("");
  const mutation = useUserProfileMutation();

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleEditAvatarOpen = () => {
    setEditAvatarOpen(true);
  };

  const handleEditAvatarClose = () => {
    setEditAvatarOpen(false);
  };

  const onCrop = (view: string) => {
    setImg(view);
  };

  const onClose = () => {
    setImg("");
  };

  const handleSaveImage = () => {
    setEditAvatarOpen(false);
  };

  let userSchema = yup.object().shape({
    img: yup.string(),
    name: yup.string(),
    surname: yup.string(),
    password: yup.string().min(6, "Wymagane min 6 znaków"),
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (editedData) => {
    if (img !== "") {
      editedData = { ...editedData, img: img };
    }

    mutation.mutate(editedData);
  };

  return {
    handleEditAvatarClose,
    handleEditAvatarOpen,
    editAvatarOpen,
    onCrop,
    onClose,
    handleSaveImage,
    img,
    register,
    handleSubmit,
    onSubmit,
    control,
    modalOpen,
    handleModalClose,
    handleModalOpen,
  };
}
