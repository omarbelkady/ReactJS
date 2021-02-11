import { FunctionComponent } from 'react';
import { TextFieldProps } from '@material-ui/core/TextField';
import { InputProps } from 'ra-core';
declare const SearchInput: FunctionComponent<InputProps<TextFieldProps> & Omit<TextFieldProps, 'label' | 'helperText'>>;
export default SearchInput;
