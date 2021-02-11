import * as React from 'react';
import { ReactNode } from 'react';
import { Record } from '../types';
/**
 * Context to store the current record.
 *
 * Use the useRecordContext() hook to read the context. That's what the Edit and Show components do in react-admin.
 *
 * @example
 *
 * import { useEditController, EditContext } from 'ra-core';
 *
 * const Edit = props => {
 *     const { record }= useEditController(props);
 *     return (
 *         <RecordContextProvider value={record}>
 *             ...
 *         </RecordContextProvider>
 *     );
 * };
 */
export declare const RecordContext: React.Context<Record | Pick<Record, import("../types").Identifier>>;
export declare const RecordContextProvider: ({ children, value, }: RecordContextOptions) => JSX.Element;
export declare const usePickRecordContext: <RecordType extends Record | Pick<Record, import("../types").Identifier> = Record>(context: RecordType) => any;
/**
 * Hook to read the record from a RecordContext.
 *
 * Must be used within a <RecordContext> such as provided by the <EditContextProvider>
 * (e.g. as a descendent of <Edit> or <EditBase>) or within a <ShowContextProvider>
 * (e.g. as a descendent of <Show> or <ShowBase>)
 *
 * @returns {Record} The record context
 */
export declare const useRecordContext: <RecordType extends Record | Pick<Record, import("../types").Identifier> = Record>(props: RecordType) => RecordType;
export interface RecordContextOptions<RecordType extends Record | Omit<Record, 'id'> = Record> {
    children: ReactNode;
    value?: RecordType;
}
