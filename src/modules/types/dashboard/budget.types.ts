import { Dayjs } from "dayjs";

export interface IBudgetCostsNavigation {
  modalOpen: () => void;
  monthPrev: () => void;
  monthNext: () => void;
  date: Dayjs;
}

export interface IModalChoose {
  open: boolean;
  onClose: () => void;
  choosedType: (type: string) => void;
}

export interface IBudgetFormCosts {
  mutationOnSuccess: () => void;
}

export interface IBudgetEditCostForm {
  mutationOnSuccess: () => void;
  costData: {
    id: string;
    amount: number;
    description: string;
    type: string;
    date: string;
    category: string;
  };
}

export interface IModalCosts {
  open: boolean;
  onClose: () => void;
  title: string;
  choosedType: (type: string) => void;
}

export interface IModalCostTypeChoose {
  open: boolean;
  onClose: () => void;
  title: string;
  choosedType: string;
}

export interface IModalEditCost {
  open: boolean;
  onClose: () => void;
  title: string;
  costData: {
    id: string;
    amount: number;
    description: string;
    type: string;
    date: string;
    category: string;
  };
}

export interface IBudgetCosts {
  amount: number;
  type: string;
  note?: string;
  date: string;
  category: string;
}

export interface IDeleteCost {
  id: string;
}

export interface IBudgetGetCost {
  id: string;
}

export interface IBudgetEditCost {
  id: string;
  amount: number;
  description: string;
  type: string;
  date: string;
  category: string;
}

export interface IRawCost {
  id: string;
  amount: number;
  description: string;
  type: string;
  date: string;
  category: string;
}

export interface IPieChartCost {
  id: string;
  label: string;
  value: number;
  description: string;
  date: string;
}

export interface IBudgetCostsTable {
  editBtnClick: (id: number) => void;
  displayedDate: Dayjs;
  deleteBtnClick: (id: number) => void;
}
