import { FunctionComponent } from 'react';
import { TextFieldProps } from '@material-ui/core/TextField';
import { InputProps } from 'ra-core';
declare const DateInput: FunctionComponent<InputProps<TextFieldProps> & Omit<TextFieldProps, 'helperText' | 'label'>>;
export default DateInput;
