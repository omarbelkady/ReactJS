import { FC } from 'react';
declare const DashboardMenuItem: FC<DashboardMenuItemProps>;
export interface DashboardMenuItemProps {
    classes?: object;
    locale?: string;
    onClick?: () => void;
    dense?: boolean;
    sidebarIsOpen: boolean;
}
export default DashboardMenuItem;
