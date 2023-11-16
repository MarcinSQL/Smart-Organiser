import {
  IDeleteUserProfile,
  IEditAvatar,
  IEditPassword,
  IEditPersonalInformation,
} from "modules/types/dashboard/userProfile.types";
import service from "utils/axios";

const baseURL = "/dashboard/";

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
  return service.get(`${baseURL}user-profile`).then((response) => {
    return Promise.resolve(response.data);
  });
};

export const dashboardEditAvatar = (avatarSrc: IEditAvatar) => {
  return service.post(`${baseURL}user-profile/`, avatarSrc).then((response) => {
    return Promise.resolve(response);
  });
};

export const dashboardEditPassword = (password: IEditPassword) => {
  return service.post(`${baseURL}user-profile/`, password).then((response) => {
    return Promise.resolve(response);
  });
};

export const dashboardEditPersonalInformation = (
  personalData: IEditPersonalInformation
) => {
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
