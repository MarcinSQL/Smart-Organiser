import { useState } from "react";

export default function useMainPage() {
  const [showModalCosts, setShowModalCosts] = useState(false);

  const handleModalCostsOpen = () => {
    setShowModalCosts(true);
  };

  const handleModalCostsClose = () => {
    setShowModalCosts(false);
  };

  return { showModalCosts, handleModalCostsClose, handleModalCostsOpen };
}
