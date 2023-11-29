import { useState } from "react";
import useGetProfileDataQuery from "./queries";

export default function useMainPage() {
  const { data, isLoading } = useGetProfileDataQuery();
  const [showModal, setShowModal] = useState(false);
  const [eventData, setEventData] = useState("");

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalShow = (e: any) => {
    setEventData(e.dateStr);
    setShowModal(true);
  };

  return {
    data,
    isLoading,
    showModal,
    handleModalShow,
    eventData,
    handleModalClose,
  };
}
