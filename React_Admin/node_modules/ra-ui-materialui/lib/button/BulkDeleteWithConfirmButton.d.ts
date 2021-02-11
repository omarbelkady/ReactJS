import { FC, ReactElement } from 'react';
import { ButtonProps } from './Button';
import { BulkActionProps } from '../types';
declare const BulkDeleteWithConfirmButton: FC<BulkDeleteWithConfirmButtonProps>;
export interface BulkDeleteWithConfirmButtonProps extends BulkActionProps, ButtonProps {
    confirmContent?: string;
    confirmTitle?: string;
    icon?: ReactElement;
}
export default BulkDeleteWithConfirmButton;
