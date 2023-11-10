export interface IUserProfile {
  img?: string;
  name?: string;
  surname?: string;
  password?: string;
}

export interface IDeleteUserProfile {
  userId: string;
}

export interface IEditPersonalInformation {
  name: string;
  surname: string;
}

export interface IEditAvatar {
  img: string;
}

export interface IEditPassword {
  password: string;
  confirmPassword: string;
}
