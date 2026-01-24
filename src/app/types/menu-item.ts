export interface MenuItem {
  icon: string;
  title: string;
  menu?: boolean;
  submenuItems?: MenuItem[];
}
