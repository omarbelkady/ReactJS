import { FC, ReactNode } from 'react';
import { ClassesOverride } from '../../types';
declare const useStyles: (props?: any) => Record<"button" | "form", string>;
export interface FilterProps {
    children: ReactNode;
    classes?: ClassesOverride<typeof useStyles>;
    context?: 'form' | 'button';
    variant?: string;
}
declare const Filter: FC<FilterProps>;
export default Filter;
