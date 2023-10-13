export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegistration {
  name: string;
  surname: string;
  email: string;
}

export interface IConfirmAccount {
  userId: string;
  token: string;
  password: string;
}

export interface IErrorMessage {
  message: string;
}
