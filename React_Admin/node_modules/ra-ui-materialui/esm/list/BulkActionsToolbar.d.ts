import { FC } from 'react';
import { ReactNode } from 'react';
import { ClassesOverride } from '../types';
declare const useStyles: (props?: any) => Record<"icon" | "toolbar" | "title" | "buttons" | "collapsed", string>;
declare const BulkActionsToolbar: FC<BulkActionsToolbarProps>;
export interface BulkActionsToolbarProps {
    children?: ReactNode;
    classes?: ClassesOverride<typeof useStyles>;
    label?: string;
}
export default BulkActionsToolbar;
