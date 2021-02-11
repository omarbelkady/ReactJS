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
var TopToolbar_1 = __importDefault(require("../layout/TopToolbar"));
var button_1 = require("../button");
var ListActions = function (props) {
    var className = props.className, exporter = props.exporter, filters = props.filters, rest = __rest(props, ["className", "exporter", "filters"]);
    var _a = ra_core_1.useListContext(props), currentSort = _a.currentSort, displayedFilters = _a.displayedFilters, filterValues = _a.filterValues, basePath = _a.basePath, selectedIds = _a.selectedIds, showFilter = _a.showFilter, total = _a.total;
    var resource = ra_core_1.useResourceContext(rest);
    var hasCreate = ra_core_1.useResourceDefinition(rest).hasCreate;
    return react_1.useMemo(function () { return (React.createElement(TopToolbar_1.default, __assign({ className: className }, ra_core_1.sanitizeListRestProps(rest)),
        filters &&
            react_1.cloneElement(filters, {
                resource: resource,
                showFilter: showFilter,
                displayedFilters: displayedFilters,
                filterValues: filterValues,
                context: 'button',
            }),
        hasCreate && React.createElement(button_1.CreateButton, { basePath: basePath }),
        exporter !== false && (React.createElement(button_1.ExportButton, { disabled: total === 0, resource: resource, sort: currentSort, filterValues: filterValues })))); }, [resource, displayedFilters, filterValues, selectedIds, filters, total] // eslint-disable-line react-hooks/exhaustive-deps
    );
};
ListActions.propTypes = {
    basePath: prop_types_1.default.string,
    className: prop_types_1.default.string,
    currentSort: prop_types_1.default.any,
    displayedFilters: prop_types_1.default.object,
    exporter: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
    filters: prop_types_1.default.element,
    filterValues: prop_types_1.default.object,
    hasCreate: prop_types_1.default.bool,
    resource: prop_types_1.default.string,
    onUnselectItems: prop_types_1.default.func.isRequired,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
    showFilter: prop_types_1.default.func,
    total: prop_types_1.default.number,
};
ListActions.defaultProps = {
    selectedIds: [],
    onUnselectItems: function () { return null; },
};
exports.default = ListActions;
