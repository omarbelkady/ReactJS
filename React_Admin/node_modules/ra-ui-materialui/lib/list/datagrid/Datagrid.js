"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var ra_core_1 = require("ra-core");
var core_1 = require("@material-ui/core");
var classnames_1 = __importDefault(require("classnames"));
var DatagridHeaderCell_1 = __importDefault(require("./DatagridHeaderCell"));
var DatagridLoading_1 = __importDefault(require("./DatagridLoading"));
var DatagridBody_1 = __importStar(require("./DatagridBody"));
var useDatagridStyles_1 = __importDefault(require("./useDatagridStyles"));
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
    var classes = useDatagridStyles_1.default(props);
    var _a = props.optimized, optimized = _a === void 0 ? false : _a, _b = props.body, body = _b === void 0 ? optimized ? React.createElement(DatagridBody_1.PureDatagridBody, null) : React.createElement(DatagridBody_1.default, null) : _b, children = props.children, classesOverride = props.classes, className = props.className, expand = props.expand, _c = props.hasBulkActions, hasBulkActions = _c === void 0 ? false : _c, hover = props.hover, isRowSelectable = props.isRowSelectable, resource = props.resource, rowClick = props.rowClick, rowStyle = props.rowStyle, _d = props.size, size = _d === void 0 ? 'small' : _d, rest = __rest(props, ["optimized", "body", "children", "classes", "className", "expand", "hasBulkActions", "hover", "isRowSelectable", "resource", "rowClick", "rowStyle", "size"]);
    var _e = ra_core_1.useListContext(props), basePath = _e.basePath, currentSort = _e.currentSort, data = _e.data, ids = _e.ids, loaded = _e.loaded, onSelect = _e.onSelect, onToggleItem = _e.onToggleItem, selectedIds = _e.selectedIds, setSort = _e.setSort, total = _e.total;
    var version = ra_core_1.useVersion();
    var updateSort = react_1.useCallback(function (event) {
        event.stopPropagation();
        var newField = event.currentTarget.dataset.field;
        var newOrder = currentSort.field === newField
            ? currentSort.order === 'ASC'
                ? 'DESC'
                : 'ASC'
            : event.currentTarget.dataset.order;
        setSort(newField, newOrder);
    }, [currentSort.field, currentSort.order, setSort]);
    var handleSelectAll = react_1.useCallback(function (event) {
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
        return (React.createElement(DatagridLoading_1.default, { classes: classes, className: className, expand: expand, hasBulkActions: hasBulkActions, nbChildren: React.Children.count(children), size: size }));
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
    return (React.createElement(core_1.Table, __assign({ ref: ref, className: classnames_1.default(classes.table, className), size: size }, ra_core_1.sanitizeListRestProps(rest)),
        React.createElement(core_1.TableHead, { className: classes.thead },
            React.createElement(core_1.TableRow, { className: classnames_1.default(classes.row, classes.headerRow) },
                expand && (React.createElement(core_1.TableCell, { padding: "none", className: classnames_1.default(classes.headerCell, classes.expandHeader) })),
                hasBulkActions && (React.createElement(core_1.TableCell, { padding: "checkbox", className: classes.headerCell },
                    React.createElement(core_1.Checkbox, { className: "select-all", color: "primary", checked: selectedIds.length > 0 &&
                            all.length > 0 &&
                            all.every(function (id) { return selectedIds.includes(id); }), onChange: handleSelectAll }))),
                react_1.Children.map(children, function (field, index) {
                    return react_1.isValidElement(field) ? (React.createElement(DatagridHeaderCell_1.default, { className: classes.headerCell, currentSort: currentSort, field: field, isSorting: currentSort.field ===
                            (field.props.sortBy ||
                                field.props.source), key: field.props.source || index, resource: resource, updateSort: updateSort })) : null;
                }))),
        react_1.cloneElement(body, {
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
    basePath: prop_types_1.default.string,
    body: prop_types_1.default.element,
    children: prop_types_1.default.node.isRequired,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    currentSort: prop_types_1.default.shape({
        field: prop_types_1.default.string,
        order: prop_types_1.default.string,
    }),
    data: prop_types_1.default.object,
    // @ts-ignore
    expand: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.elementType]),
    hasBulkActions: prop_types_1.default.bool,
    hover: prop_types_1.default.bool,
    ids: prop_types_1.default.arrayOf(prop_types_1.default.any),
    loading: prop_types_1.default.bool,
    onSelect: prop_types_1.default.func,
    onToggleItem: prop_types_1.default.func,
    resource: prop_types_1.default.string,
    rowClick: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func]),
    rowStyle: prop_types_1.default.func,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
    setSort: prop_types_1.default.func,
    total: prop_types_1.default.number,
    version: prop_types_1.default.number,
    isRowSelectable: prop_types_1.default.func,
};
exports.default = Datagrid;
