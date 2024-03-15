export interface IMainPageFormCosts {
  mutationOnSuccess: () => void;
}

export interface IModalCosts {
  open: boolean;
  onClose: () => void;
  title: string;
}

export interface IMainPageCosts {
  amount: number;
  type: string;
  note?: string;
  date: string;
}

export interface IMainPageGetCost {
  id: string;
}

export interface IMainPageCost {
  id: string;
  title: string;
  amount: number;
  description: string;
  type: string;
  date: string;
  category: string;
}
