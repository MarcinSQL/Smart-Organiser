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
