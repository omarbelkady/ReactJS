import { FC } from 'react';
import { PublicFieldProps, InjectedFieldProps } from './types';
/**
 * Render a link to a file based on a path contained in a record field
 *
 * @example
 * import { FileField } from 'react-admin';
 *
 * <FileField source="url" title="title" />
 *
 * // renders the record { id: 123, url: 'doc.pdf', title: 'Presentation' } as
 * <div>
 *     <a href="doc.pdf" title="Presentation">Presentation</a>
 * </div>
 */
declare const FileField: FC<FileFieldProps>;
export interface FileFieldProps extends PublicFieldProps, InjectedFieldProps {
    src?: string;
    title?: string;
    target?: string;
    download?: boolean | string;
    ping?: string;
    rel?: string;
    classes?: object;
}
export default FileField;
