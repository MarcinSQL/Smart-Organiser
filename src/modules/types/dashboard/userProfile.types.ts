// export interface IUserProfile {
//   img?: string;
//   name?: string;
//   surname?: string;
//   password?: string;
// }

export interface IUserProfileForms {
  popoverId: string;
  anchorEl: HTMLButtonElement | null;
  open: boolean;
  onClose: () => void;
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
}
