import { FunctionComponent } from 'react';
import { FormGroupProps } from '@material-ui/core/FormGroup';
import { SwitchProps } from '@material-ui/core/Switch';
import { InputProps } from 'ra-core';
declare const BooleanInput: FunctionComponent<InputProps<SwitchProps> & Omit<FormGroupProps, 'defaultValue' | 'onChange' | 'onBlur' | 'onFocus'>>;
export default BooleanInput;
