import { FC } from 'react';
import { BulkDeleteWithConfirmButtonProps } from './BulkDeleteWithConfirmButton';
import { BulkDeleteWithUndoButtonProps } from './BulkDeleteWithUndoButton';
declare const BulkDeleteButton: FC<BulkDeleteButtonProps>;
interface Props {
    undoable?: boolean;
}
export declare type BulkDeleteButtonProps = Props & (BulkDeleteWithUndoButtonProps | BulkDeleteWithConfirmButtonProps);
export default BulkDeleteButton;
