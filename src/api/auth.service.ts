import service from "utils/axios";
import {
  IConfirmAccount,
  IResetPassword,
  ILoginData,
  IRegistration,
  IResetPasswordConfirm,
} from "modules/types/authorization/authorization.types";

const baseURL = "/auth/";

export const authLogin = (loginData: ILoginData) => {
  return service.post(`${baseURL}login`, loginData).then((response) => {
    return Promise.resolve(response);
  });
};

export const authRegistration = (registration: IRegistration) => {
  return service
    .post(`${baseURL}registration`, registration)
    .then((response) => {
      return Promise.resolve(response);
    });
};

export const authConfirmAccount = (accountData: IConfirmAccount) => {
  return service
    .post(`${baseURL}account-confirmation`, accountData)
    .then((response) => {
      return Promise.resolve(response);
    });
};

export const authResetPassword = (email: IResetPassword) => {
  return service
    .post(`${baseURL}reset-password`, email)
    .then((response) => {
      return Promise.resolve(response);
    });
};

export const authResetPasswordConfirm = (data: IResetPasswordConfirm) => {
  return service
    .post(`${baseURL}reset-password-confirmation`, data)
    .then((response) => {
      return Promise.resolve(response);
    });
};