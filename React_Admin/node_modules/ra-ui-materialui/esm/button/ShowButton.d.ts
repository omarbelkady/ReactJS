import * as React from 'react';
import { ReactElement } from 'react';
import { Record } from 'ra-core';
import { ButtonProps } from './Button';
interface Props {
    basePath?: string;
    record?: Record;
    icon?: ReactElement;
}
export declare type ShowButtonProps = Props & ButtonProps;
declare const PureShowButton: React.NamedExoticComponent<ShowButtonProps>;
export default PureShowButton;
