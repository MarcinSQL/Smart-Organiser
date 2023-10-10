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
  userId: number;
  token: string;
  password: string;
}

export interface IAuthContext{
  message: string,
  isError: boolean,
  children: any
}
export interface IErrorMessage {
  message: string;
}
