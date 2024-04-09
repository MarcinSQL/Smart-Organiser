import { useEffect, useState } from "react";
import { useGetCostMutation } from "./mutations";
import dayjs from "dayjs";
import { useGetCostsQuery } from "./queries";
import { IBudgetCosts } from "modules/types/dashboard/budget.types";

export default function useBudget() {
  const [displayedDate, setDisplayedDate] = useState(dayjs());
  displayedDate.locale("pl");

  const mutation = useGetCostMutation();

  const [showModalChoose, setShowModalChoose] = useState(false);

  const [showModalCost, setShowModalCost] = useState(false);
  const [choosedType, setChoosedType] = useState("");

  const [selectedCellData, setSelectedCellData] = useState({
    id: "",
    title: "",
    amount: 0,
    description: "",
    type: "",
    date: "",
    category: "",
  });
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

  const handleMonthPrev = () => {
    setDisplayedDate(displayedDate.subtract(1, "month"));
  };

  const handleMonthNext = () => {
    setDisplayedDate(displayedDate.subtract(-1, "month"));
  };

  const handleModalChooseOpen = () => {
    setShowModalChoose(true);
  };

  const handleModalChooseClose = () => {
    setShowModalChoose(false);
  };

  const handleModalCostOpen = (type: string) => {
    setChoosedType(type);
    setShowModalChoose(false);
    setShowModalCost(true);
  };

  const handleModalCostClose = () => {
    setShowModalCost(false);
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
    handleEditCostBtnClick,
    showEditModalCost,
    selectedCellData,
    handleEditModalCostClose,
    choosedType,
    handleModalCostOpen,
    handleModalCostClose,
    showModalCost,
    displayedDate,
  };
}
