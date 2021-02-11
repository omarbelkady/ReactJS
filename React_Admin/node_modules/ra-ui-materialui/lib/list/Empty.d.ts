import { FC } from 'react';
import { ClassesOverride } from '../types';
declare const useStyles: (props?: any) => Record<"icon" | "toolbar" | "message", string>;
declare const Empty: FC<EmptyProps>;
export interface EmptyProps {
    classes?: ClassesOverride<typeof useStyles>;
    resource?: string;
}
export default Empty;
