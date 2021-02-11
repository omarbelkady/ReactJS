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
exports.ListView = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var Card_1 = __importDefault(require("@material-ui/core/Card"));
var classnames_1 = __importDefault(require("classnames"));
var styles_1 = require("@material-ui/core/styles");
var ra_core_1 = require("ra-core");
var Title_1 = __importStar(require("../layout/Title"));
var ListToolbar_1 = __importDefault(require("./ListToolbar"));
var Pagination_1 = __importDefault(require("./pagination/Pagination"));
var BulkDeleteButton_1 = __importDefault(require("../button/BulkDeleteButton"));
var BulkActionsToolbar_1 = __importDefault(require("./BulkActionsToolbar"));
var ListActions_1 = __importDefault(require("./ListActions"));
var Empty_1 = __importDefault(require("./Empty"));
exports.ListView = function (props) {
    var actions = props.actions, aside = props.aside, filters = props.filters, bulkActionButtons = props.bulkActionButtons, pagination = props.pagination, children = props.children, className = props.className, classesOverride = props.classes, Content = props.component, _a = props.exporter, exporter = _a === void 0 ? ra_core_1.defaultExporter : _a, title = props.title, empty = props.empty, rest = __rest(props, ["actions", "aside", "filters", "bulkActionButtons", "pagination", "children", "className", "classes", "component", "exporter", "title", "empty"]);
    var controllerProps = ra_core_1.getListControllerProps(props); // deprecated, to be removed in v4
    var listContext = ra_core_1.useListContext(props);
    var classes = useStyles(props);
    var defaultTitle = listContext.defaultTitle, total = listContext.total, loaded = listContext.loaded, loading = listContext.loading, filterValues = listContext.filterValues, selectedIds = listContext.selectedIds;
    var version = ra_core_1.useVersion();
    var renderList = function () {
        var _a;
        return (React.createElement(React.Fragment, null,
            (filters || actions) && (React.createElement(ListToolbar_1.default, __assign({ filters: filters }, controllerProps, { actions: actions, exporter: exporter }))),
            React.createElement("div", { className: classes.main },
                React.createElement(Content, { className: classnames_1.default(classes.content, (_a = {},
                        _a[classes.bulkActionsDisplayed] = selectedIds.length > 0,
                        _a)), key: version },
                    bulkActionButtons !== false && bulkActionButtons && (React.createElement(BulkActionsToolbar_1.default, __assign({}, controllerProps), bulkActionButtons)),
                    children &&
                        // @ts-ignore-line
                        react_1.cloneElement(react_1.Children.only(children), __assign(__assign({}, controllerProps), { hasBulkActions: bulkActionButtons !== false })),
                    pagination && react_1.cloneElement(pagination, listContext)),
                aside && react_1.cloneElement(aside, listContext))));
    };
    var shouldRenderEmptyPage = loaded && !loading && total === 0 && !Object.keys(filterValues).length;
    return (React.createElement("div", __assign({ className: classnames_1.default('list-page', classes.root, className) }, sanitizeRestProps(rest)),
        React.createElement(Title_1.default, { title: title, defaultTitle: defaultTitle }),
        shouldRenderEmptyPage && empty !== false
            ? react_1.cloneElement(empty, listContext)
            : renderList()));
};
exports.ListView.propTypes = {
    // @ts-ignore-line
    actions: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.element]),
    aside: prop_types_1.default.element,
    basePath: prop_types_1.default.string,
    // @ts-ignore-line
    bulkActionButtons: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.element]),
    children: prop_types_1.default.element,
    className: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    component: ra_core_1.ComponentPropType,
    // @ts-ignore-line
    currentSort: prop_types_1.default.shape({
        field: prop_types_1.default.string.isRequired,
        order: prop_types_1.default.string.isRequired,
    }),
    data: prop_types_1.default.any,
    defaultTitle: prop_types_1.default.string,
    displayedFilters: prop_types_1.default.object,
    // @ts-ignore-line
    exporter: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
    filterDefaultValues: prop_types_1.default.object,
    filters: prop_types_1.default.element,
    filterValues: prop_types_1.default.object,
    hasCreate: prop_types_1.default.bool,
    hideFilter: prop_types_1.default.func,
    ids: prop_types_1.default.array,
    loading: prop_types_1.default.bool,
    onSelect: prop_types_1.default.func,
    onToggleItem: prop_types_1.default.func,
    onUnselectItems: prop_types_1.default.func,
    page: prop_types_1.default.number,
    // @ts-ignore-line
    pagination: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.bool]),
    perPage: prop_types_1.default.number,
    refresh: prop_types_1.default.func,
    resource: prop_types_1.default.string,
    selectedIds: prop_types_1.default.array,
    setFilters: prop_types_1.default.func,
    setPage: prop_types_1.default.func,
    setPerPage: prop_types_1.default.func,
    setSort: prop_types_1.default.func,
    showFilter: prop_types_1.default.func,
    title: Title_1.TitlePropType,
    total: prop_types_1.default.number,
    version: prop_types_1.default.number,
};
var DefaultBulkActionButtons = function (props) { return React.createElement(BulkDeleteButton_1.default, __assign({}, props)); };
exports.ListView.defaultProps = {
    actions: React.createElement(ListActions_1.default, null),
    classes: {},
    component: Card_1.default,
    bulkActionButtons: React.createElement(DefaultBulkActionButtons, null),
    pagination: React.createElement(Pagination_1.default, null),
    empty: React.createElement(Empty_1.default, null),
};
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return ({
        root: {},
        main: {
            display: 'flex',
        },
        content: (_a = {
                marginTop: 0,
                transition: theme.transitions.create('margin-top'),
                position: 'relative',
                flex: '1 1 auto'
            },
            _a[theme.breakpoints.down('xs')] = {
                boxShadow: 'none',
            },
            _a.overflow = 'inherit',
            _a),
        bulkActionsDisplayed: {
            marginTop: -theme.spacing(8),
            transition: theme.transitions.create('margin-top'),
        },
        actions: {
            zIndex: 2,
            display: 'flex',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
        },
        noResults: { padding: 20 },
    });
}, { name: 'RaList' });
var sanitizeRestProps = function (_a) {
    var _b = _a.basePath, basePath = _b === void 0 ? null : _b, _c = _a.currentSort, currentSort = _c === void 0 ? null : _c, _d = _a.data, data = _d === void 0 ? null : _d, _e = _a.defaultTitle, defaultTitle = _e === void 0 ? null : _e, _f = _a.displayedFilters, displayedFilters = _f === void 0 ? null : _f, _g = _a.filterDefaultValues, filterDefaultValues = _g === void 0 ? null : _g, _h = _a.filterValues, filterValues = _h === void 0 ? null : _h, _j = _a.hasCreate, hasCreate = _j === void 0 ? null : _j, _k = _a.hasEdit, hasEdit = _k === void 0 ? null : _k, _l = _a.hasList, hasList = _l === void 0 ? null : _l, _m = _a.hasShow, hasShow = _m === void 0 ? null : _m, _o = _a.hideFilter, hideFilter = _o === void 0 ? null : _o, _p = _a.history, history = _p === void 0 ? null : _p, _q = _a.ids, ids = _q === void 0 ? null : _q, _r = _a.loading, loading = _r === void 0 ? null : _r, _s = _a.loaded, loaded = _s === void 0 ? null : _s, _t = _a.location, location = _t === void 0 ? null : _t, _u = _a.match, match = _u === void 0 ? null : _u, _v = _a.onSelect, onSelect = _v === void 0 ? null : _v, _w = _a.onToggleItem, onToggleItem = _w === void 0 ? null : _w, _x = _a.onUnselectItems, onUnselectItems = _x === void 0 ? null : _x, _y = _a.options, options = _y === void 0 ? null : _y, _z = _a.page, page = _z === void 0 ? null : _z, _0 = _a.permissions, permissions = _0 === void 0 ? null : _0, _1 = _a.perPage, perPage = _1 === void 0 ? null : _1, _2 = _a.resource, resource = _2 === void 0 ? null : _2, _3 = _a.selectedIds, selectedIds = _3 === void 0 ? null : _3, _4 = _a.setFilters, setFilters = _4 === void 0 ? null : _4, _5 = _a.setPage, setPage = _5 === void 0 ? null : _5, _6 = _a.setPerPage, setPerPage = _6 === void 0 ? null : _6, _7 = _a.setSort, setSort = _7 === void 0 ? null : _7, _8 = _a.showFilter, showFilter = _8 === void 0 ? null : _8, _9 = _a.syncWithLocation, syncWithLocation = _9 === void 0 ? null : _9, _10 = _a.sort, sort = _10 === void 0 ? null : _10, _11 = _a.total, total = _11 === void 0 ? null : _11, rest = __rest(_a, ["basePath", "currentSort", "data", "defaultTitle", "displayedFilters", "filterDefaultValues", "filterValues", "hasCreate", "hasEdit", "hasList", "hasShow", "hideFilter", "history", "ids", "loading", "loaded", "location", "match", "onSelect", "onToggleItem", "onUnselectItems", "options", "page", "permissions", "perPage", "resource", "selectedIds", "setFilters", "setPage", "setPerPage", "setSort", "showFilter", "syncWithLocation", "sort", "total"]);
    return rest;
};
exports.default = exports.ListView;
