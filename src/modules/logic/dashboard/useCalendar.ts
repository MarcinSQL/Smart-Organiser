import { EventApi } from "@fullcalendar/core";
import { useEffect, useState } from "react";
import { useDeleteEventMutation } from "./mutations";

export default function useCalendar() {
  const [showModal, setShowModal] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [showEditEventModal, setShowEditEventModal] = useState(false);
  const [eventId, setEventId] = useState("");
  const [eventData, setEventData] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const windowBreakpoint = 1000;
  const mutation = useDeleteEventMutation();

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    setDeleteModalOpen(false);
    setShowEditEventModal(false);
  }, [mutation.status]);

  const handleDeleteModalOpen = () => {
    setDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
  };

  const handleDeleteModalOnClick = () => {
    mutation.mutate({ id: eventId });
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalShow = (e: string) => {
    setEventData(e);
    setShowModal(true);
  };

  const handleEventClick = (arg: { event: EventApi; el: HTMLElement }) => {
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
    handleDeleteModalOpen,
    deleteModalOpen,
    handleDeleteModalClose,
    handleDeleteModalOnClick,
  };
}
