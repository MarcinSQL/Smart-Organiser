import { useState } from "react";
import useGetProfileDataQuery from "./queries";

export default function useCalendar() {
  const [showModal, setShowModal] = useState(false);
  const [eventData, setEventData] = useState("");

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalShow = (e : string) => {
    setEventData(e);
    setShowModal(true);
  };

  return {
    showModal,
    handleModalShow,
    eventData,
    handleModalClose,
  };
}
