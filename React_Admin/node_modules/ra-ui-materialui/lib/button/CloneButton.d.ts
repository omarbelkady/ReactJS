import * as React from 'react';
import { FC, ReactElement } from 'react';
import { Record } from 'ra-core';
import { ButtonProps } from './Button';
export declare const CloneButton: FC<CloneButtonProps>;
interface Props {
    basePath?: string;
    record?: Record;
    icon?: ReactElement;
}
export declare type CloneButtonProps = Props & ButtonProps;
declare const _default: React.NamedExoticComponent<CloneButtonProps>;
export default _default;
