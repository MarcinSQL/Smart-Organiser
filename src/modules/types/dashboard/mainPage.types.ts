export interface IMainPageModalCosts {
  mutationOnSuccess: () => void;
}

export interface IModalCosts {
  open: boolean;
  onClose: () => void;
  title: string;
}
