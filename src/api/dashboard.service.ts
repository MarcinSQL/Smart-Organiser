import {
  IDeleteUserProfile,
  IEditAvatar,
  IUserProfile,
} from "modules/types/dashboard/userProfile.types";
import service from "utils/axios";

const baseURL = "/dashboard/";

export const dashboardDeleteUserProfile = (userId: IDeleteUserProfile) => {
  return service
    .delete(`${baseURL}`, {
      params: { id: userId },
    })
    .then((response) => {
      return Promise.resolve(response);
    });
};

export const dashboardUserProfile = () => {
  return service.get(`${baseURL}user-profile`).then((response) => {
    return Promise.resolve(response);
  });
};

export const dashboardEditUserProfile = (personalData: IUserProfile) => {
  return service
    .post(`${baseURL}user-profile/`, personalData)
    .then((response) => {
      return Promise.resolve(response);
    });
};

export const dashboardAvatar = (avatarURL: IEditAvatar) => {
  return service.post(`${baseURL}user-profile/`, avatarURL).then((response) => {
    return Promise.resolve(response);
  });
};
