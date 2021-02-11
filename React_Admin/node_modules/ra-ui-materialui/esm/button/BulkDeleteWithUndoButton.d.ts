import { FC, ReactElement } from 'react';
import { ButtonProps } from './Button';
import { BulkActionProps } from '../types';
declare const BulkDeleteWithUndoButton: FC<BulkDeleteWithUndoButtonProps>;
export interface BulkDeleteWithUndoButtonProps extends BulkActionProps, ButtonProps {
    icon?: ReactElement;
}
export default BulkDeleteWithUndoButton;
