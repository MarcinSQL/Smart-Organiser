import { Dayjs } from "dayjs";

export interface IMainPageClosestEvents {
  id: string;
  title: string;
  day: string;
  note?: string;
}

export interface IMainPageNewestEvents {
  selectedEventId: (id: string) => void;
  showEditModal: () => void;
}

export interface IMainPageBudgetInfo {
  currentDate: Dayjs;
}
