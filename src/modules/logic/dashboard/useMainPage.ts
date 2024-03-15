import { useEffect, useState } from "react";
import { useGetCostMutation } from "./mutations";

export default function useMainPage() {
  const mutation = useGetCostMutation();
  const [showModalChoose, setShowModalChoose] = useState(false);

  const [showModalExpenses, setShowModalExpenses] = useState(false);
  const [showModalRevenues, setShowModalRevenues] = useState(false);

  const [selectedCellData, setSelectedCellData] = useState({});
  const [showEditModalCost, setShowEditModalCost] = useState(false);

  useEffect(() => {
    if (mutation.isSuccess) {
      if (mutation.data !== undefined || mutation.data !== null) {
        //  WHEN ENDPOINTS WILL BE CREATED
        // setSelectedCellData(mutation.data);

        setSelectedCellData({
          id: "0",
          title: "Keyboard",
          amount: 222,
          description: "Typical keyboard",
          type: "expenses",
          date: "10-02-2024",
          category: "entertainment",
        });
        setShowEditModalCost(true);
      }
    }
  }, [mutation.isSuccess]);

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

  const handleEditModalCostClose = () => {
    setShowEditModalCost(false);
  };

  const handleEditCostBtnClick = (rowData: any) => {
    mutation.mutate(rowData.id);
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
    handleEditCostBtnClick,
    showEditModalCost,
    selectedCellData,
    handleEditModalCostClose,
  };
}
