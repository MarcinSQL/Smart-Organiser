import service from "utils/axios";
import { IModalEventsForm } from "modules/types/dashboard/calendar.types";

const baseURL = "/calendar/";

export const dashboardCreateCalendarEvent = (event: IModalEventsForm) => {
  return service.post(`${baseURL}event/`, event).then((response) => {
    return Promise.resolve(response);
  });
};

export const dashboardEditCalendarEvent = (event: IModalEventsForm) => {
  return service.put(`${baseURL}event/`, event).then((response) => {
    return Promise.resolve(response);
  });
};

export const dashboardCalendarEvents = () => {
  return service.get(`${baseURL}events/`).then((response) => {
    return Promise.resolve(response.data);
  });
};
