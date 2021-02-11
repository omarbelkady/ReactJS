import { FunctionComponent } from 'react';
import { FieldProps, FieldRenderProps } from 'react-final-form';
import { Validator } from './validate';
export declare const isRequired: (validate: any) => boolean;
interface Props extends Omit<FieldProps<any, FieldRenderProps<any, HTMLElement>, HTMLElement>, 'validate'> {
    defaultValue?: any;
    input?: any;
    source: string;
    validate?: Validator | Validator[];
}
declare const FormField: FunctionComponent<Props>;
export default FormField;
