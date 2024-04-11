import service from "utils/axios";
import {
  IDeleteEvent,
  IModalEditEventForm,
  IModalEventsForm,
} from "modules/types/dashboard/calendar.types";

const baseURL = "/calendar/";

export const dashboardDeleteCalendarEvent = (event: IDeleteEvent) => {
  const { id } = event;
  return service
    .delete(`${baseURL}event/`, {
      data: { id },
    })
    .then((response) => {
      return Promise.resolve(response);
    });
};

export const dashboardCreateCalendarEvent = (event: IModalEventsForm) => {
  return service.post(`${baseURL}event/`, event).then((response) => {
    return Promise.resolve(response);
  });
};

export const dashboardEditCalendarEvent = (event: IModalEditEventForm) => {
  return service.put(`${baseURL}event/`, event).then((response) => {
    return Promise.resolve(response);
  });
};

export const dashboardCalendarEvents = () => {
  return service.get(`${baseURL}events/`).then((response) => {
    return Promise.resolve(response.data);
  });
};
