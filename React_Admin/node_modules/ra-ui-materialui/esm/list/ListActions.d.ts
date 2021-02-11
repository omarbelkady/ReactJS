import { FC, ReactElement } from 'react';
import { Identifier, SortPayload, Exporter } from 'ra-core';
import { ToolbarProps } from '@material-ui/core';
declare const ListActions: FC<ListActionsProps>;
export interface ListActionsProps extends ToolbarProps {
    currentSort?: SortPayload;
    className?: string;
    resource?: string;
    filters?: ReactElement<any>;
    displayedFilters?: any;
    exporter?: Exporter | boolean;
    filterValues?: any;
    permanentFilter?: any;
    hasCreate?: boolean;
    basePath?: string;
    selectedIds?: Identifier[];
    onUnselectItems?: () => void;
    showFilter?: (filterName: string, defaultValue: any) => void;
    total?: number;
}
export default ListActions;
