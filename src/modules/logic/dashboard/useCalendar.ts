import { EventApi } from "@fullcalendar/core";
import { useEffect, useState } from "react";

export default function useCalendar() {
  const [showModal, setShowModal] = useState(false);
  const [showEditEventModal, setShowEditEventModal] = useState(false);
  const [eventId, setEventId] = useState("");
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

  const handleEventClick = (arg: { event: EventApi; el: HTMLElement }) => {
    console.log(arg.event);
    setShowEditEventModal(true);
    setEventId(arg.event.id);
  };

  const handleEditEventModalClose = () => {
    setShowEditEventModal(false);
  };

  return {
    showModal,
    handleModalShow,
    eventData,
    handleModalClose,
    windowBreakpoint,
    windowWidth,
    handleEventClick,
    showEditEventModal,
    handleEditEventModalClose,
    eventId,
  };
}
