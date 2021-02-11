import * as React from 'react';
import { FC, ReactElement } from 'react';
import { TablePaginationBaseProps } from '@material-ui/core';
export interface PaginationProps extends TablePaginationBaseProps {
    rowsPerPageOptions?: number[];
    actions?: FC;
    limit?: ReactElement;
}
declare const _default: React.NamedExoticComponent<PaginationProps>;
export default _default;
