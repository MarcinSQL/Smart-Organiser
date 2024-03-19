export interface IMainPageFormCosts {
  mutationOnSuccess: () => void;
}

export interface IMainPageEditCostForm {
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

export interface IMainPageCosts {
  amount: number;
  type: string;
  note?: string;
  date: string;
  category: string;
}

export interface IMainPageGetCost {
  id: string;
}

export interface IMainPageEditCost {
  id: string;
  amount: number;
  description: string;
  type: string;
  date: string;
  category: string;
}

export interface IRawCost{
  id: string;
  amount: number;
  description: string;
  type: string;
  date: string;
  category: string;
}

export interface IPieChartCost{
  id: string,
  label: string,
  value: number,
  description: string,
  date: string,
}
