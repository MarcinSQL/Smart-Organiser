import { SubmitHandler } from "react-hook-form";
import { useState } from "react";
import {
  useDeleteUserProfileMutation,
  useEditAvatarMutation,
} from "./mutations";
import { IEditAvatar } from "modules/types/dashboard/userProfile.types";
import { useGetProfileAvatarQuery, useGetProfileDataQuery } from "./queries";
import tokenDecode from "utils/tokenDecode";

export default function useUserProfile() {
  const { data, isLoading, isError } = useGetProfileDataQuery();
  const {
    data: avatar,
    isLoading: avatarIsLoading,
    isError: avatarIsError,
  } = useGetProfileAvatarQuery();

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
    const codedToken = localStorage.getItem("token");
    const decodedId = tokenDecode.getUserId(codedToken || "");
    const userId = {
      Id: decodedId,
    };

    deleteUserMutation.mutate(userId);
  };

  const onCrop = (view: string) => {
    setImg(view);
  };

  const onAvatarClose = () => {
    setImg("");
  };

  const onSubmit: SubmitHandler<IEditAvatar> = (imgSrc) => {
    const URL = imgSrc.img.substring(imgSrc.img.indexOf(",") + 1);

    const img = {
      img: URL,
    };

    mutation.mutate(img);
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
    isError,
    avatar,
    avatarIsError,
    isLoading,
    avatarIsLoading,
  };
}
