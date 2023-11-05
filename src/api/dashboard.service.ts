import service from "utils/axios";

const baseURL = "/dashboard/";

export const dashboardUserProfile = () => {
  return service.get(`${baseURL}user-profile`).then((response) => {
    return Promise.resolve(response);
  });
};