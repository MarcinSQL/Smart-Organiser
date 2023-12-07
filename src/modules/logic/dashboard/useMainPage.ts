import { useState } from "react";
import { useGetProfileAvatarQuery, useGetProfileDataQuery } from "./queries";

export default function useMainPage() {
  const { data, isLoading } = useGetProfileDataQuery();
  const { data: avatar, isLoading: avatarIsLoading } =
    useGetProfileAvatarQuery();
  const [showModal, setShowModal] = useState(false);
  const [eventData, setEventData] = useState("");

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalShow = (e: string) => {
    setEventData(e);
    setShowModal(true);
  };

  return {
    data,
    isLoading,
    showModal,
    handleModalShow,
    eventData,
    handleModalClose,
    avatar,
    avatarIsLoading,
  };
}
