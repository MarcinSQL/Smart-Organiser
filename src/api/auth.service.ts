import service from "utils/axios";

interface ILoginData {
  email: string;
  password: string;
}

interface IRegistration {
  name: string;
  surname: string;
  email: string;
}

// interface IConfirmAccount {
//   userId: number;
//   token: string;
//   password: string;
// }

const baseURL = process.env.REACT_APP_API_URL + "/auth/";

export const authLogin = (loginData: ILoginData) => {
  return service
    .post(`${baseURL}login`, loginData)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const authRegistration = (registration: IRegistration) => {
  return service
    .post(`${baseURL}registration`, registration)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
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
