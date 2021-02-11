import { ComponentType, ReactElement } from 'react';
import { Record, SortPayload, PaginationPayload } from '../../types';
interface ChildrenFuncParams {
    choices: Record[];
    error?: string;
    loaded: boolean;
    loading: boolean;
    setFilter: (filter: any) => void;
    setPagination: (pagination: PaginationPayload) => void;
    setSort: (sort: SortPayload) => void;
    warning?: string;
}
interface Props {
    allowEmpty?: boolean;
    basePath: string;
    children: (params: ChildrenFuncParams) => ReactElement;
    filter?: object;
    filterToQuery?: (filter: {}) => any;
    input?: any;
    meta?: object;
    perPage?: number;
    record?: Record;
    reference: string;
    resource: string;
    sort?: SortPayload;
    source: string;
}
declare const _default: ComponentType<Props>;
export default _default;
