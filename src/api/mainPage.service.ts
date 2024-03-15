import {
  IMainPageCosts,
  IMainPageEditCost,
  IMainPageGetCost,
} from "modules/types/dashboard/mainPage.types";
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

export const dashboardCosts = () => {
  return service.get(`${baseURL}costs/`).then((response) => {
    return Promise.resolve(response.data);
  });
};

export const dashboardGetCost = (id: IMainPageGetCost) => {
  return service
    .get(`${baseURL}costs/`, {
      data: { id },
    })
    .then((response) => {
      return Promise.resolve(response.data);
    });
};

export const dashboardEditCost = (editedCost: IMainPageEditCost) => {
  return service.put(`${baseURL}cost/`, editedCost).then((response) => {
    return Promise.resolve(response);
  });
};
