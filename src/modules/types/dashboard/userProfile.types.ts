export interface IUserProfileForms {
  popoverId: string;
  anchorEl: HTMLButtonElement | null;
  open: boolean;
  onClose: () => void;
}

export interface IDeleteUserProfile {
  Id: string;
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
