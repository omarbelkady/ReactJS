import * as React from 'react';
import { ReactElement } from 'react';
import { ButtonProps } from './Button';
interface Props {
    basePath?: string;
    icon?: ReactElement;
}
export declare type CreateButtonProps = Props & ButtonProps;
declare const _default: React.NamedExoticComponent<CreateButtonProps>;
export default _default;
