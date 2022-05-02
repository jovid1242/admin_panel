export interface IActiveTab {
  name: string | null;
  visibility: boolean;
}

export interface IMenu {
  href: string;
  title: string;
  icon: React.ComponentType;
  active: boolean;
  submenu?: Array<ISubmenu>;
}

export interface ISubmenu {
  href: string;
  title: string;
}

export interface ISubmenuProps {
  visibility: boolean;
  items: Array<ISubmenu>;
}
