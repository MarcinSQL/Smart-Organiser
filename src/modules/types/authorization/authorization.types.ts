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

export interface IResetPassword {
  email: string;
}

export interface IResetPasswordConfirm {
  userId: string | undefined;
  token: string;
  password: string;
}
