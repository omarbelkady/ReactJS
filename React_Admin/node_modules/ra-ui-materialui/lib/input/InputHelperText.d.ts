import { FunctionComponent } from 'react';
import { ValidationErrorMessage } from 'ra-core';
interface Props {
    helperText?: string | boolean;
    error?: ValidationErrorMessage;
    touched: boolean;
}
declare const InputHelperText: FunctionComponent<Props>;
export default InputHelperText;
