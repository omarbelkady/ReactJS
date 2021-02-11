var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { isValidElement, Children, cloneElement, useCallback, } from 'react';
import PropTypes from 'prop-types';
import { sanitizeListRestProps, useListContext, useVersion, } from 'ra-core';
import { Checkbox, Table, TableCell, TableHead, TableRow, } from '@material-ui/core';
import classnames from 'classnames';
import DatagridHeaderCell from './DatagridHeaderCell';
import DatagridLoading from './DatagridLoading';
import DatagridBody, { PureDatagridBody } from './DatagridBody';
import useDatagridStyles from './useDatagridStyles';
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
var Datagrid = React.forwardRef(function (props, ref) {
    var classes = useDatagridStyles(props);
    var _a = props.optimized, optimized = _a === void 0 ? false : _a, _b = props.body, body = _b === void 0 ? optimized ? React.createElement(PureDatagridBody, null) : React.createElement(DatagridBody, null) : _b, children = props.children, classesOverride = props.classes, className = props.className, expand = props.expand, _c = props.hasBulkActions, hasBulkActions = _c === void 0 ? false : _c, hover = props.hover, isRowSelectable = props.isRowSelectable, resource = props.resource, rowClick = props.rowClick, rowStyle = props.rowStyle, _d = props.size, size = _d === void 0 ? 'small' : _d, rest = __rest(props, ["optimized", "body", "children", "classes", "className", "expand", "hasBulkActions", "hover", "isRowSelectable", "resource", "rowClick", "rowStyle", "size"]);
    var _e = useListContext(props), basePath = _e.basePath, currentSort = _e.currentSort, data = _e.data, ids = _e.ids, loaded = _e.loaded, onSelect = _e.onSelect, onToggleItem = _e.onToggleItem, selectedIds = _e.selectedIds, setSort = _e.setSort, total = _e.total;
    var version = useVersion();
    var updateSort = useCallback(function (event) {
        event.stopPropagation();
        var newField = event.currentTarget.dataset.field;
        var newOrder = currentSort.field === newField
            ? currentSort.order === 'ASC'
                ? 'DESC'
                : 'ASC'
            : event.currentTarget.dataset.order;
        setSort(newField, newOrder);
    }, [currentSort.field, currentSort.order, setSort]);
    var handleSelectAll = useCallback(function (event) {
        if (event.target.checked) {
            var all_1 = ids.concat(selectedIds.filter(function (id) { return !ids.includes(id); }));
            onSelect(isRowSelectable
                ? all_1.filter(function (id) { return isRowSelectable(data[id]); })
                : all_1);
        }
        else {
            onSelect([]);
        }
    }, [data, ids, onSelect, isRowSelectable, selectedIds]);
    /**
     * if loaded is false, the list displays for the first time, and the dataProvider hasn't answered yet
     * if loaded is true, the data for the list has at least been returned once by the dataProvider
     * if loaded is undefined, the Datagrid parent doesn't track loading state (e.g. ReferenceArrayField)
     */
    if (loaded === false) {
        return (React.createElement(DatagridLoading, { classes: classes, className: className, expand: expand, hasBulkActions: hasBulkActions, nbChildren: React.Children.count(children), size: size }));
    }
    /**
     * Once loaded, the data for the list may be empty. Instead of
     * displaying the table header with zero data rows,
     * the datagrid displays nothing in this case.
     */
    if (loaded && (ids.length === 0 || total === 0)) {
        return null;
    }
    var all = isRowSelectable
        ? ids.filter(function (id) { return isRowSelectable(data[id]); })
        : ids;
    /**
     * After the initial load, if the data for the list isn't empty,
     * and even if the data is refreshing (e.g. after a filter change),
     * the datagrid displays the current data.
     */
    return (React.createElement(Table, __assign({ ref: ref, className: classnames(classes.table, className), size: size }, sanitizeListRestProps(rest)),
        React.createElement(TableHead, { className: classes.thead },
            React.createElement(TableRow, { className: classnames(classes.row, classes.headerRow) },
                expand && (React.createElement(TableCell, { padding: "none", className: classnames(classes.headerCell, classes.expandHeader) })),
                hasBulkActions && (React.createElement(TableCell, { padding: "checkbox", className: classes.headerCell },
                    React.createElement(Checkbox, { className: "select-all", color: "primary", checked: selectedIds.length > 0 &&
                            all.length > 0 &&
                            all.every(function (id) { return selectedIds.includes(id); }), onChange: handleSelectAll }))),
                Children.map(children, function (field, index) {
                    return isValidElement(field) ? (React.createElement(DatagridHeaderCell, { className: classes.headerCell, currentSort: currentSort, field: field, isSorting: currentSort.field ===
                            (field.props.sortBy ||
                                field.props.source), key: field.props.source || index, resource: resource, updateSort: updateSort })) : null;
                }))),
        cloneElement(body, {
            basePath: basePath,
            className: classes.tbody,
            classes: classes,
            expand: expand,
            rowClick: rowClick,
            data: data,
            hasBulkActions: hasBulkActions,
            hover: hover,
            ids: ids,
            onToggleItem: onToggleItem,
            resource: resource,
            rowStyle: rowStyle,
            selectedIds: selectedIds,
            isRowSelectable: isRowSelectable,
            version: version,
        }, children)));
});
Datagrid.propTypes = {
    basePath: PropTypes.string,
    body: PropTypes.element,
    children: PropTypes.node.isRequired,
    classes: PropTypes.object,
    className: PropTypes.string,
    currentSort: PropTypes.shape({
        field: PropTypes.string,
        order: PropTypes.string,
    }),
    data: PropTypes.object,
    // @ts-ignore
    expand: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),
    hasBulkActions: PropTypes.bool,
    hover: PropTypes.bool,
    ids: PropTypes.arrayOf(PropTypes.any),
    loading: PropTypes.bool,
    onSelect: PropTypes.func,
    onToggleItem: PropTypes.func,
    resource: PropTypes.string,
    rowClick: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    rowStyle: PropTypes.func,
    selectedIds: PropTypes.arrayOf(PropTypes.any),
    setSort: PropTypes.func,
    total: PropTypes.number,
    version: PropTypes.number,
    isRowSelectable: PropTypes.func,
};
export default Datagrid;
