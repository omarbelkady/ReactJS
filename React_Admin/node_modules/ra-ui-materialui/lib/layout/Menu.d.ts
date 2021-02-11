import { FC, ReactNode } from 'react';
export declare const MENU_WIDTH = 240;
export declare const CLOSED_MENU_WIDTH = 55;
declare const Menu: FC<MenuProps>;
export interface MenuProps {
    classes?: object;
    className?: string;
    dense?: boolean;
    hasDashboard?: boolean;
    logout?: ReactNode;
    onMenuClick?: () => void;
}
export default Menu;
