import { useState } from "react";

export default function useUserProfile() {
  const [editAvatarOpen, setEditAvatarOpen] = useState(false);
  const [img, setImg] = useState("");

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

  return {
    editAvatarOpenHandler,
    editAvatarCloseHandler,
    editAvatarOpen,
    onCrop,
    onClose,
    saveImageHandler,
    img,
  };
}
