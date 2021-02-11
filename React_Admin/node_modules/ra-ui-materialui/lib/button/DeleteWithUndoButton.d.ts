import { FC, ReactElement, ReactEventHandler, SyntheticEvent } from 'react';
import { Record, RedirectionSideEffect, OnSuccess, OnFailure } from 'ra-core';
import { ButtonProps } from './Button';
declare const DeleteWithUndoButton: FC<DeleteWithUndoButtonProps>;
interface Props {
    basePath?: string;
    classes?: object;
    className?: string;
    icon?: ReactElement;
    label?: string;
    onClick?: ReactEventHandler<any>;
    record?: Record;
    redirect?: RedirectionSideEffect;
    resource?: string;
    handleSubmit?: (event?: SyntheticEvent<HTMLFormElement>) => Promise<Object>;
    handleSubmitWithRedirect?: (redirect?: RedirectionSideEffect) => void;
    invalid?: boolean;
    pristine?: boolean;
    saving?: boolean;
    submitOnEnter?: boolean;
    undoable?: boolean;
    onSuccess?: OnSuccess;
    onFailure?: OnFailure;
}
export declare type DeleteWithUndoButtonProps = Props & ButtonProps;
export default DeleteWithUndoButton;
