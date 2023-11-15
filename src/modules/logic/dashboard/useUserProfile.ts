import * as yup from "yup";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import {
  useDeleteUserProfileMutation,
  useEditUserProfileMutation,
} from "./mutations";
import { IUserProfile } from "modules/types/dashboard/userProfile.types";
import { useSearchParams } from "react-router-dom";
import useGetProfileDataQuery from "./queries";

interface IFormInput {
  img?: string;
  name?: string;
  surname?: string;
  password?: string;
  confirmPassword?: string;
}

export default function useUserProfile() {
  const { data, isLoading } = useGetProfileDataQuery();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [editAvatarOpen, setEditAvatarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const mutation = useEditUserProfileMutation();
  const deleteUserMutation = useDeleteUserProfileMutation();
  const [userData] = useSearchParams();

  const [img, setImg] = useState(data.img);

  const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const popoverOpen = Boolean(anchorEl);
  const popoverId = anchorEl ? anchorEl.id : "errorId";

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

  const handleModalClick = () => {
    const userId = userData.get("userId");
    if (userId !== null) {
      deleteUserMutation.mutate({ userId: userId });
    }
  };

  const onCrop = (view: string) => {
    setImg(view);
  };

  const onAvatarClose = () => {
    setImg("");
  };

  let userSchema = yup.object().shape({
    name: yup.string(),
    surname: yup.string(),
    password: yup.string().min(6, "Wymagane min 6 znaków"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Hasła muszą być identyczne"),
  });

  const { register, handleSubmit, control } = useForm<IFormInput>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit: SubmitHandler<IUserProfile> = (editedData) => {
    mutation.mutate(editedData);
  };

  const handleSaveImage = () => {
    onSubmit({ img: img });
    setEditAvatarOpen(false);
  };

  return {
    handleEditAvatarClose,
    handleEditAvatarOpen,
    editAvatarOpen,
    onCrop,
    onAvatarClose,
    handleSaveImage,
    img,
    register,
    handleSubmit,
    onSubmit,
    control,
    modalOpen,
    handleModalClose,
    handleModalOpen,
    handlePopoverClick,
    handlePopoverClose,
    popoverId,
    popoverOpen,
    anchorEl,
    handleModalClick,
    data,
    isLoading,
  };
}
