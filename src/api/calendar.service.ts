import service from "utils/axios";
import { IModalEventsForm } from "modules/types/dashboard/mainPage.types";

const baseURL = "/calendar/";

export const dashboardCreateEvent = (event: IModalEventsForm) => {
  return service.post(`${baseURL}event/`, event).then((response) => {
    return Promise.resolve(response);
  });
};
