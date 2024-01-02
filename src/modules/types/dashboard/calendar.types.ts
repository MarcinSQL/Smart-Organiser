export interface IModalEventsForm {
  title: string;
  day: string;
  isAllDay?: boolean;
  startTime?: string;
  endTime?: string;
  eventType: string;
  note?: string;
}

export interface IRawEvent {
  day: string;
  endTime: string;
  eventType: string;
  id: string;
  isAllDay: boolean;
  note?: string;
  startTime: string;
  title: string;
}

export interface IEventsList {
  id: string;
  title: string;
  allDay: boolean;
  start: string;
  end: string;
  color: string;
  note?: string;
}
