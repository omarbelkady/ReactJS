import { FC, ReactElement } from 'react';
import { TabsProps } from '@material-ui/core/Tabs';
declare const TabbedFormTabs: FC<TabbedFormTabsProps>;
export declare const getTabFullPath: (tab: ReactElement, index: number, baseUrl: string) => string;
export interface TabbedFormTabsProps extends Omit<TabsProps, 'value'> {
    classes?: any;
    url?: string;
    tabsWithErrors?: string[];
}
export default TabbedFormTabs;
