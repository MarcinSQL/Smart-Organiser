import service from "utils/axios";
import { IUserProfile } from "modules/types/dashboard/userProfile.types";

const baseURL = "/dashboard/";

export const dashboardUserProfile = (editedData: IUserProfile) => {
  return service.post(`${baseURL}user-profile`, editedData).then((response) => {
    return Promise.resolve(response);
  });
};