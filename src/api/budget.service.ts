import {
  IBudgetCosts,
  IBudgetEditCost,
  IBudgetGetCost,
  IDeleteCost,
} from "modules/types/dashboard/budget.types";
import service from "utils/axios";

const baseURL = "/budget/";

export const dashboardCreateCost = (costData: IBudgetCosts) => {
  return service.post(`${baseURL}cost/`, costData).then((response) => {
    return Promise.resolve(response);
  });
};

export const dashboardCosts = () => {
  return service.get(`${baseURL}costs/`).then((response) => {
    return Promise.resolve(response.data);
  });
};

export const dashboardGetCost = (id: IBudgetGetCost) => {
  return service
    .get(`${baseURL}costs/`, {
      data: { id },
    })
    .then((response) => {
      return Promise.resolve(response.data);
    });
};

export const dashboardEditCost = (editedCost: IBudgetEditCost) => {
  return service.put(`${baseURL}cost/`, editedCost).then((response) => {
    return Promise.resolve(response);
  });
};

export const dashboardDeleteCost = (cost: IDeleteCost) => {
  const { id } = cost;
  return service
    .delete(`${baseURL}cost/`, {
      data: { id },
    })
    .then((response) => {
      return Promise.resolve(response);
    });
};
