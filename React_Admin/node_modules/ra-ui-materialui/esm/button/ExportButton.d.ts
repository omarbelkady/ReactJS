import { FunctionComponent } from 'react';
import { SortPayload, Exporter, FilterPayload } from 'ra-core';
import { ButtonProps } from './Button';
declare const ExportButton: FunctionComponent<ExportButtonProps>;
interface Props {
    basePath?: string;
    exporter?: Exporter;
    filterValues?: FilterPayload;
    icon?: JSX.Element;
    label?: string;
    maxResults?: number;
    onClick?: (e: Event) => void;
    resource?: string;
    sort?: SortPayload;
}
export declare type ExportButtonProps = Props & ButtonProps;
export default ExportButton;
