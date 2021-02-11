import { FC, ReactElement } from 'react';
import { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';
import { Record } from 'ra-core';
import { ButtonProps } from './Button';
declare const EditButton: FC<EditButtonProps>;
interface Props {
    basePath?: string;
    record?: Record;
    icon?: ReactElement;
}
export declare type EditButtonProps = Props & ButtonProps & MuiButtonProps;
export default EditButton;
