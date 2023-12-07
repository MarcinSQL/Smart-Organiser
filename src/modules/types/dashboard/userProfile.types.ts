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
  img?: string;
  name: string;
  surname: string;
}

export interface IEditAvatar {
  img: string;
}

export interface IEditPassword {
  password: string;
}
