import {
  IDeleteUserProfile,
  IEditAvatar,
  IEditPassword,
  IEditPersonalInformation,
} from "modules/types/dashboard/userProfile.types";
import service from "utils/axios";

const baseURL = "/user/";

export const dashboardDeleteUserProfile = (userId: IDeleteUserProfile) => {
  return service
    .delete(`${baseURL}`, {
      params: userId,
    })
    .then((response) => {
      return Promise.resolve(response);
    });
};

export const dashboardUserProfile = () => {
  return service.get(`${baseURL}edit-data`).then((response) => {
    return Promise.resolve(response.data);
  });
};

export const dashboardEditAvatar = (avatarSrc: IEditAvatar) => {
  return service.post(`${baseURL}user-data/`, avatarSrc).then((response) => {
    return Promise.resolve(response);
  });
};

export const dashboardEditPassword = (password: IEditPassword) => {
  return service.post(`${baseURL}password/`, password).then((response) => {
    return Promise.resolve(response);
  });
};

export const dashboardEditPersonalInformation = (
  personalData: IEditPersonalInformation
) => {
  return service
    .post(`${baseURL}user-data/`, personalData)
    .then((response) => {
      return Promise.resolve(response);
    });
};
