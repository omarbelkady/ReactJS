import { FC, AnchorHTMLAttributes } from 'react';
import { PublicFieldProps, InjectedFieldProps } from './types';
declare const UrlField: FC<UrlFieldProps>;
export interface UrlFieldProps extends PublicFieldProps, InjectedFieldProps, AnchorHTMLAttributes<HTMLAnchorElement> {
}
export default UrlField;
