import { useState } from "react";

export default function useMainPage() {
  const [showModalCosts, setShowModalCosts] = useState(false);

  const handleMonthPrev = () => {};

  const handleMonthNext = () => {};

  const handleModalCostsOpen = () => {
    setShowModalCosts(true);
  };

  const handleModalCostsClose = () => {
    setShowModalCosts(false);
  };

  return {
    showModalCosts,
    handleModalCostsClose,
    handleModalCostsOpen,
    handleMonthNext,
    handleMonthPrev,
  };
}
