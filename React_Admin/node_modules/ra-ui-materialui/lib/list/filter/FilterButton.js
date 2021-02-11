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
var Menu_1 = __importDefault(require("@material-ui/core/Menu"));
var styles_1 = require("@material-ui/core/styles");
var FilterList_1 = __importDefault(require("@material-ui/icons/FilterList"));
var classnames_1 = __importDefault(require("classnames"));
var get_1 = __importDefault(require("lodash/get"));
var FilterButtonMenuItem_1 = require("./FilterButtonMenuItem");
var Button_1 = __importDefault(require("../../button/Button"));
var useStyles = styles_1.makeStyles({
    root: { display: 'inline-block' },
}, { name: 'RaFilterButton' });
var FilterButton = function (props) {
    var filters = props.filters, _a = props.displayedFilters, displayedFilters = _a === void 0 ? {} : _a, filterValues = props.filterValues, showFilter = props.showFilter, classesOverride = props.classes, className = props.className, resource = props.resource, rest = __rest(props, ["filters", "displayedFilters", "filterValues", "showFilter", "classes", "className", "resource"]);
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var anchorEl = react_1.useRef();
    var classes = useStyles(props);
    var hiddenFilters = filters.filter(function (filterElement) {
        return !filterElement.props.alwaysOn &&
            !displayedFilters[filterElement.props.source] &&
            typeof get_1.default(filterValues, filterElement.props.source) ===
                'undefined';
    });
    var handleClickButton = react_1.useCallback(function (event) {
        // This prevents ghost click.
        event.preventDefault();
        setOpen(true);
        anchorEl.current = event.currentTarget;
    }, [anchorEl, setOpen]);
    var handleRequestClose = react_1.useCallback(function () {
        setOpen(false);
    }, [setOpen]);
    var handleShow = react_1.useCallback(function (_a) {
        var source = _a.source, defaultValue = _a.defaultValue;
        showFilter(source, defaultValue);
        setOpen(false);
    }, [showFilter, setOpen]);
    if (hiddenFilters.length === 0)
        return null;
    return (React.createElement("div", __assign({ className: classnames_1.default(classes.root, className) }, rest),
        React.createElement(Button_1.default, { className: "add-filter", label: "ra.action.add_filter", onClick: handleClickButton },
            React.createElement(FilterList_1.default, null)),
        React.createElement(Menu_1.default, { open: open, anchorEl: anchorEl.current, onClose: handleRequestClose }, hiddenFilters.map(function (filterElement) { return (React.createElement(FilterButtonMenuItem_1.FilterButtonMenuItem, { key: filterElement.props.source, filter: filterElement, resource: resource, onShow: handleShow })); }))));
};
FilterButton.propTypes = {
    resource: prop_types_1.default.string.isRequired,
    filters: prop_types_1.default.arrayOf(prop_types_1.default.node).isRequired,
    displayedFilters: prop_types_1.default.object,
    filterValues: prop_types_1.default.object.isRequired,
    showFilter: prop_types_1.default.func.isRequired,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
};
exports.default = FilterButton;
