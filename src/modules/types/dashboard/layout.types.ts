export interface ILayout {
  // name: string;
  // avatarSrc?: string;
  children: React.ReactNode;
}

export interface ILayoutHeader {
  mobiNav: (props: boolean) => void;
}

export interface ILayoutContent {
  children: React.ReactNode;
}
