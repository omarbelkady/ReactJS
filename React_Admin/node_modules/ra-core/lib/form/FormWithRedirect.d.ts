import * as React from 'react';
import { FC } from 'react';
import { FormProps, FormRenderProps as FinalFormFormRenderProps } from 'react-final-form';
import { Record, OnSuccess, OnFailure } from '../types';
import { RedirectionSideEffect } from '../sideEffect';
/**
 * Wrapper around react-final-form's Form to handle redirection on submit,
 * legacy defaultValue prop, and array inputs.
 *
 * Requires a render function, just like react-final-form
 *
 * @example
 *
 * const SimpleForm = props => (
 *    <FormWithRedirect
 *        {...props}
 *        render={formProps => <SimpleFormView {...formProps} />}
 *    />
 * );
 *
 * @typedef {Object} Props the props you can use (other props are injected by Create or Edit)
 * @prop {Object} initialValues
 * @prop {Function} validate
 * @prop {Function} save
 * @prop {boolean} submitOnEnter
 * @prop {string} redirect
 * @prop {boolean} sanitizeEmptyValues
 *
 * @param {Props} props
 */
declare const FormWithRedirect: FC<FormWithRedirectProps>;
export declare type FormWithRedirectProps = FormWithRedirectOwnProps & Omit<FormProps, 'onSubmit' | 'active'>;
export declare type FormWithRedirectRender = (props: Omit<FormViewProps, 'render' | 'setRedirect'>) => React.ReactElement<any, any>;
export declare type FormWithRedirectSave = (data: Partial<Record>, redirectTo: RedirectionSideEffect, options?: {
    onSuccess?: OnSuccess;
    onFailure?: OnFailure;
}) => void;
export interface FormWithRedirectOwnProps {
    defaultValue?: any;
    record?: Record;
    redirect?: RedirectionSideEffect;
    render: FormWithRedirectRender;
    save?: FormWithRedirectSave;
    sanitizeEmptyValues?: boolean;
    saving?: boolean;
    version?: number;
    warnWhenUnsavedChanges?: boolean;
}
export declare type SetRedirect = (redirect: RedirectionSideEffect) => void;
export declare type HandleSubmitWithRedirect = (redirect?: RedirectionSideEffect) => void;
interface FormViewProps extends FormWithRedirectOwnProps, Omit<FinalFormFormRenderProps, 'render' | 'active'> {
    handleSubmitWithRedirect?: HandleSubmitWithRedirect;
    setRedirect: SetRedirect;
    warnWhenUnsavedChanges?: boolean;
}
export default FormWithRedirect;
