import { FunctionComponent } from 'react';
import { DropzoneOptions } from 'react-dropzone';
import { InputProps } from 'ra-core';
export interface FileInputProps {
    accept?: string;
    labelMultiple?: string;
    labelSingle?: string;
    maxSize?: number;
    minSize?: number;
    multiple?: boolean;
}
export interface FileInputOptions extends DropzoneOptions {
    inputProps?: any;
    onRemove?: Function;
}
declare const FileInput: FunctionComponent<FileInputProps & InputProps<FileInputOptions>>;
export default FileInput;
