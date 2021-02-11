import { FC } from 'react';
import { PublicFieldProps, InjectedFieldProps } from './types';
export interface ImageFieldProps extends PublicFieldProps, InjectedFieldProps {
    src?: string;
    title?: string;
    classes?: object;
}
declare const ImageField: FC<ImageFieldProps>;
export default ImageField;
