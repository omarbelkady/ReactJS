import { ReactNode, FunctionComponent } from 'react';
interface Props {
    children: ReactNode;
    className?: string;
    classes?: object;
    onRemove: () => void;
    file: any;
}
declare const FileInputPreview: FunctionComponent<Props>;
export default FileInputPreview;
