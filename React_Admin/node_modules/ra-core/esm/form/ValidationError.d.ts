import { FunctionComponent } from 'react';
import { ValidationErrorMessage } from './validate';
interface Props {
    error: ValidationErrorMessage;
}
declare const ValidationError: FunctionComponent<Props>;
export default ValidationError;
