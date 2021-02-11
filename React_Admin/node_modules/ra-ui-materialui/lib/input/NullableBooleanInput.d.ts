import { FunctionComponent } from 'react';
import { TextFieldProps } from '@material-ui/core/TextField';
import { InputProps } from 'ra-core';
export declare type NullableBooleanInputProps = InputProps<TextFieldProps> & Omit<TextFieldProps, 'label' | 'helperText'> & {
    nullLabel?: string;
    falseLabel?: string;
    trueLabel?: string;
};
declare const NullableBooleanInput: FunctionComponent<NullableBooleanInputProps>;
export default NullableBooleanInput;
