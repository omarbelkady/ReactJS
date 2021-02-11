import { FC } from 'react';
import { TextInputProps } from './TextInput';
export interface PasswordInputProps extends TextInputProps {
    initiallyVisible?: boolean;
}
declare const PasswordInput: FC<PasswordInputProps>;
export default PasswordInput;
