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

export const authLogin = (loginData: ILoginData) => {
  return service
    .post("http://test.internal-blackbox-studio.pl/v1/auth/login", loginData)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const authRegistration = (registration: IRegistration) => {
  return service
    .post(
      "http://test.internal-blackbox-studio.pl/v1/auth/registration",
      registration
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const authConfirmAccount = () => {
  return service
    .get("http://test.internal-blackbox-studio.pl/v1/auth/account-confirmation", 
    //tutaj bedzie przyjmowany token ale przez to ze nigdzie go jeszcze nie setujemy to jest to niemozliwe
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
