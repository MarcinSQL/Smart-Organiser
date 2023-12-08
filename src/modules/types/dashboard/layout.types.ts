export interface ILayout {
  // name: string;
  // avatarSrc?: string;
  children: React.ReactNode;
}

export interface ILayoutHeader {
  name: string;
  avatarSrc?: string;
}

export interface ILayoutContent {
  children: React.ReactNode;
}
