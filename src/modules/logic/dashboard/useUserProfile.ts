import { SubmitHandler } from "react-hook-form";
import { useState } from "react";
import {
  useDeleteUserProfileMutation,
  useEditAvatarMutation,
} from "./mutations";
import { IEditAvatar } from "modules/types/dashboard/userProfile.types";
import useGetProfileDataQuery from "./queries";

export default function useUserProfile() {
  const { data, isLoading } = useGetProfileDataQuery();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [editAvatarOpen, setEditAvatarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const mutation = useEditAvatarMutation();
  const deleteUserMutation = useDeleteUserProfileMutation();
  const [img, setImg] = useState(!!data ? data.img : "");

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
    const userId = localStorage.getItem("userId");
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

  const onSubmit: SubmitHandler<IEditAvatar> = (editedData) => {
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
