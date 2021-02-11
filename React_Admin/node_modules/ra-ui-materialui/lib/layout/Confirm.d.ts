import { FC, MouseEventHandler } from 'react';
import { ReactComponentLike } from 'prop-types';
/**
 * Confirmation dialog
 *
 * @example
 * <Confirm
 *     isOpen={true}
 *     title="Delete Item"
 *     content="Are you sure you want to delete this item?"
 *     confirm="Yes"
 *     confirmColor="primary"
 *     ConfirmIcon=ActionCheck
 *     CancelIcon=AlertError
 *     cancel="Cancel"
 *     onConfirm={() => { // do something }}
 *     onClose={() => { // do something }}
 * />
 */
declare const Confirm: FC<ConfirmProps>;
export interface ConfirmProps {
    cancel?: string;
    classes?: object;
    confirm?: string;
    confirmColor?: string;
    ConfirmIcon?: ReactComponentLike;
    CancelIcon?: ReactComponentLike;
    content: string;
    isOpen?: boolean;
    loading?: boolean;
    onClose: MouseEventHandler;
    onConfirm: MouseEventHandler;
    title: string;
    translateOptions?: object;
}
export default Confirm;
