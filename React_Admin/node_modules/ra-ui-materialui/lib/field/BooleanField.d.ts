import { FC } from 'react';
import { SvgIconComponent } from '@material-ui/icons';
import { TypographyProps } from '@material-ui/core/Typography';
import { PublicFieldProps, InjectedFieldProps } from './types';
export declare const BooleanField: FC<BooleanFieldProps>;
export interface BooleanFieldProps extends PublicFieldProps, InjectedFieldProps, TypographyProps {
    valueLabelTrue?: string;
    valueLabelFalse?: string;
    TrueIcon?: SvgIconComponent;
    FalseIcon?: SvgIconComponent;
}
export default BooleanField;
