import { useState } from "react";

export default function useMainPage() {
  const [showModalChoose, setShowModalChoose] = useState(false);

  const [showModalExpenses, setShowModalExpenses] = useState(false);
  const [showModalRevenues, setShowModalRevenues] = useState(false);

  const handleMonthPrev = () => {};

  const handleMonthNext = () => {};

  const handleModalChooseOpen = () => {
    setShowModalChoose(true);
  };

  const handleModalChooseClose = () => {
    setShowModalChoose(false);
  };

  const handleModalExpensesOpen = () => {
    setShowModalChoose(false);
    setShowModalExpenses(true);
  };

  const handleModalRevenuesOpen = () => {
    setShowModalChoose(false);
    setShowModalRevenues(true);
  };

  const handleModalExpensesClose = () => {
    setShowModalExpenses(false);
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
    showModalExpenses,
    showModalRevenues,
    handleModalExpensesClose,
    handleModalExpensesOpen,
    handleModalRevenuesClose,
    handleModalRevenuesOpen,
  };
}
