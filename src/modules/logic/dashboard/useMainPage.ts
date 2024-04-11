import { useEffect, useState } from "react";
import { useDeleteEventMutation } from "./mutations";

export default function useMainPage() {
  const [showEditEventModal, setShowEditEventModal] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const mutation = useDeleteEventMutation();

  useEffect(() => {
    setDeleteModalOpen(false);
    setShowEditEventModal(false);
  }, [mutation.status]);

  const handleShowEditModal = () => {
    setShowEditEventModal(true);
  };

  const handleEditEventModalClose = () => {
    setShowEditEventModal(false);
  };

  const handleGetEventId = (eventId: string) => {
    setSelectedEventId(eventId);
  };

  const handleDeleteModalOpen = () => {
    setDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
  };

  const handleDeleteModalOnClick = () => {
    mutation.mutate({ id: selectedEventId });
  };

  return {
    handleShowEditModal,
    handleGetEventId,
    selectedEventId,
    showEditEventModal,
    handleEditEventModalClose,
    deleteModalOpen,
    handleDeleteModalOpen,
    handleDeleteModalClose,
    handleDeleteModalOnClick,
  };
}
