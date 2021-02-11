import { FC, ReactElement } from 'react';
import { Identifier, Record } from 'ra-core';
import { TableProps } from '@material-ui/core';
import useDatagridStyles from './useDatagridStyles';
import { ClassesOverride } from '../../types';
/**
 * The Datagrid component renders a list of records as a table.
 * It is usually used as a child of the <List> and <ReferenceManyField> components.
 *
 * Props:
 *  - rowStyle
 *
 * @example Display all posts as a datagrid
 * const postRowStyle = (record, index) => ({
 *     backgroundColor: record.nb_views >= 500 ? '#efe' : 'white',
 * });
 * export const PostList = (props) => (
 *     <List {...props}>
 *         <Datagrid rowStyle={postRowStyle}>
 *             <TextField source="id" />
 *             <TextField source="title" />
 *             <TextField source="body" />
 *             <EditButton />
 *         </Datagrid>
 *     </List>
 * );
 *
 * @example Display all the comments of the current post as a datagrid
 * <ReferenceManyField reference="comments" target="post_id">
 *     <Datagrid>
 *         <TextField source="id" />
 *         <TextField source="body" />
 *         <DateField source="created_at" />
 *         <EditButton />
 *     </Datagrid>
 * </ReferenceManyField>
 */
declare const Datagrid: FC<DatagridProps>;
declare type RowClickFunction = (id: Identifier, basePath: string, record: Record) => string;
export interface DatagridProps extends Omit<TableProps, 'size' | 'classes'> {
    body?: ReactElement;
    classes?: ClassesOverride<typeof useDatagridStyles>;
    className?: string;
    expand?: ReactElement | FC<{
        basePath: string;
        id: Identifier;
        record: Record;
        resource: string;
    }>;
    hasBulkActions?: boolean;
    hover?: boolean;
    isRowSelectable?: (record: Record) => boolean;
    optimized?: boolean;
    rowClick?: string | RowClickFunction;
    rowStyle?: (record: Record, index: number) => any;
    size?: 'medium' | 'small';
}
export default Datagrid;
