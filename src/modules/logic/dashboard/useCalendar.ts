import { useState } from "react";
import { useGetProfileAvatarQuery, useGetProfileDataQuery } from "./queries";

export default function useCalendar() {
  const { data, isLoading, isError } = useGetProfileDataQuery();
  const {
    data: avatar,
    isLoading: avatarIsLoading,
    isError: avatarIsError,
  } = useGetProfileAvatarQuery();
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
    showModal,
    handleModalShow,
    eventData,
    handleModalClose,
    data,
    isLoading,
    isError,
    avatar,
    avatarIsLoading,
    avatarIsError,
  };
}
