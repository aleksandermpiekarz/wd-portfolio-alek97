export interface MenuItem {
  id: string;
  icon: string;
  title: string;
  submenuItems?: MenuItem[];
}
