import service from "utils/axios";
import {
  ILoginData,
  IRegistration,
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

export const authConfirmAccount = () => {
  return service
    .get(
      `${baseURL}account-confirmation`
      //tutaj bedzie przyjmowany token ale przez to ze nigdzie go jeszcze nie setujemy to jest to niemozliwe
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
