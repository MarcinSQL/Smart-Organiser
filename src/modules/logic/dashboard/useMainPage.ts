import { useState } from "react";

export default function useMainPage() {
  const [showModalChoose, setShowModalChoose] = useState(false);

  const [showModalExpreses, setShowModalExpreses] = useState(false);
  const [showModalRevenues, setShowModalRevenues] = useState(false);

  const handleMonthPrev = () => {};

  const handleMonthNext = () => {};

  const handleModalChooseOpen = () => {
    setShowModalChoose(true);
  };

  const handleModalChooseClose = () => {
    setShowModalChoose(false);
  };

  const handleModalExpresesOpen = () => {
    setShowModalChoose(false);
    setShowModalExpreses(true);
  };

  const handleModalRevenuesOpen = () => {
    setShowModalChoose(false);
    setShowModalRevenues(true);
  };

  const handleModalExpresesClose = () => {
    setShowModalExpreses(false);
  };

  const handleModalRevenuesClose = () => {
    setShowModalRevenues(false);
  };

  return {
    showModalChoose,
    handleModalChooseClose,
    handleModalChooseOpen,
    handleMonthNext,
    handleMonthPrev,
    showModalExpreses,
    showModalRevenues,
    handleModalExpresesClose,
    handleModalExpresesOpen,
    handleModalRevenuesClose,
    handleModalRevenuesOpen,
  };
}
