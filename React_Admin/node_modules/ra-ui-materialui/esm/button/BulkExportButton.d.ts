import { FunctionComponent } from 'react';
import { Identifier, Exporter } from 'ra-core';
import { ButtonProps } from './Button';
declare const BulkExportButton: FunctionComponent<BulkExportButtonProps>;
interface Props {
    basePath?: string;
    exporter?: Exporter;
    filterValues?: any;
    icon?: JSX.Element;
    label?: string;
    onClick?: (e: Event) => void;
    selectedIds: Identifier[];
    resource?: string;
}
export declare type BulkExportButtonProps = Props & ButtonProps;
export default BulkExportButton;
