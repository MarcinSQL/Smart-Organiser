export interface ILayout {
  username: string;
  avatarSrc?: string;
  children: React.ReactNode;
}

export interface ILayoutHeader {
  username: string;
  avatarSrc?: string;
}

export interface ILayoutContent {
  children: React.ReactNode;
}
