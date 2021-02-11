import { FieldProps, FieldRenderProps, FieldInputProps } from 'react-final-form';
import { Validator } from './validate';
import { ChangeEvent, FocusEvent } from 'react';
export interface InputProps<T = any> extends Omit<FieldProps<any, FieldRenderProps<any, HTMLElement>, HTMLElement>, 'validate' | 'children'> {
    defaultValue?: any;
    id?: string;
    input?: FieldInputProps<any, HTMLElement>;
    meta?: any;
    name?: string;
    onBlur?: (event: FocusEvent<T>) => void;
    onChange?: (event: ChangeEvent | any) => void;
    onFocus?: (event: FocusEvent<T>) => void;
    options?: T;
    resource?: string;
    source: string;
    validate?: Validator | Validator[];
}
export interface UseInputValue extends FieldRenderProps<any, HTMLElement> {
    id: string;
    isRequired: boolean;
}
declare const useInput: ({ defaultValue, id, name, source, validate, onBlur: customOnBlur, onChange: customOnChange, onFocus: customOnFocus, ...options }: InputProps) => UseInputValue;
export default useInput;
