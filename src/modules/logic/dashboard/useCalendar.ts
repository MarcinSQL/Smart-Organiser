import { useEffect, useState } from "react";

export default function useCalendar() {
  const [showModal, setShowModal] = useState(false);
  const [eventData, setEventData] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const windowBreakpoint = 1000;

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

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
    windowBreakpoint,
    windowWidth
  };
}
