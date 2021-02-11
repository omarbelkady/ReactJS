import { FC, ReactNode, ReactElement } from 'react';
import { ListProps } from '@material-ui/core';
import { Record, Identifier } from 'ra-core';
import { ClassesOverride } from '../types';
declare const useStyles: (props?: any) => globalThis.Record<"tertiary", string>;
/**
 * The <SimpleList> component renders a list of records as a material-ui <List>.
 * It is usually used as a child of react-admin's <List> and <ReferenceManyField> components.
 *
 * Also widely used on Mobile.
 *
 * Props:
 * - primaryText: function returning a React element (or some text) based on the record
 * - secondaryText: same
 * - tertiaryText: same
 * - leftAvatar: function returning a React element based on the record
 * - leftIcon: same
 * - rightAvatar: same
 * - rightIcon: same
 * - linkType: 'edit' or 'show', or a function returning 'edit' or 'show' based on the record
 * - rowStyle: function returning a style object based on (record, index)
 *
 * @example // Display all posts as a List
 * const postRowStyle = (record, index) => ({
 *     backgroundColor: record.views >= 500 ? '#efe' : 'white',
 * });
 * export const PostList = (props) => (
 *     <List {...props}>
 *         <SimpleList
 *             primaryText={record => record.title}
 *             secondaryText={record => `${record.views} views`}
 *             tertiaryText={record =>
 *                 new Date(record.published_at).toLocaleDateString()
 *             }
 *             rowStyle={postRowStyle}
 *          />
 *     </List>
 * );
 */
declare const SimpleList: FC<SimpleListProps>;
export declare type FunctionToElement = (record: Record, id: Identifier) => ReactElement | string;
export interface SimpleListProps extends Omit<ListProps, 'classes'> {
    className?: string;
    classes?: ClassesOverride<typeof useStyles>;
    hasBulkActions?: boolean;
    leftAvatar?: FunctionToElement;
    leftIcon?: FunctionToElement;
    primaryText?: FunctionToElement;
    linkType?: string | FunctionLinkType | boolean;
    rightAvatar?: FunctionToElement;
    rightIcon?: FunctionToElement;
    secondaryText?: FunctionToElement;
    tertiaryText?: FunctionToElement;
    rowStyle?: (record: Record, index: number) => any;
}
declare const useLinkOrNotStyles: (props?: any) => globalThis.Record<"link", string>;
export declare type FunctionLinkType = (record: Record, id: Identifier) => string;
export interface LinkOrNotProps {
    classes?: ClassesOverride<typeof useLinkOrNotStyles>;
    linkType?: string | FunctionLinkType | boolean;
    basePath: string;
    id: Identifier;
    record: Record;
    children: ReactNode;
}
export default SimpleList;
