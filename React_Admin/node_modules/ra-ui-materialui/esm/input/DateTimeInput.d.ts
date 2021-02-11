import { FunctionComponent } from 'react';
import { TextFieldProps } from '@material-ui/core/TextField';
import { InputProps } from 'ra-core';
/**
 * Input component for entering a date and a time with timezone, using the browser locale
 */
declare const DateTimeInput: FunctionComponent<InputProps<TextFieldProps> & Omit<TextFieldProps, 'helperText' | 'label'>>;
export default DateTimeInput;
