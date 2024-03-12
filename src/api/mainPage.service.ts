import { IMainPageCosts } from "modules/types/dashboard/mainPage.types";
import service from "utils/axios";

const baseURL = "/main-page/";

export const dashboardCreateRevenues = (revenue: IMainPageCosts) => {
  return service.post(`${baseURL}revenues/`, revenue).then((response) => {
    return Promise.resolve(response);
  });
};

export const dashboardCreateExpenses = (expense: IMainPageCosts) => {
  return service.post(`${baseURL}expenses/`, expense).then((response) => {
    return Promise.resolve(response);
  });
};
