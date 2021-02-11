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
var GetApp_1 = __importDefault(require("@material-ui/icons/GetApp"));
var ra_core_1 = require("ra-core");
var Button_1 = __importDefault(require("./Button"));
var BulkExportButton = function (props) {
    var onClick = props.onClick, _a = props.label, label = _a === void 0 ? 'ra.action.export' : _a, _b = props.icon, icon = _b === void 0 ? defaultIcon : _b, customExporter = props.exporter, rest = __rest(props, ["onClick", "label", "icon", "exporter"]);
    var _c = ra_core_1.useListContext(props), exporterFromContext = _c.exporter, resource = _c.resource, selectedIds = _c.selectedIds;
    var exporter = customExporter || exporterFromContext;
    var dataProvider = ra_core_1.useDataProvider();
    var notify = ra_core_1.useNotify();
    var handleClick = react_1.useCallback(function (event) {
        exporter &&
            dataProvider
                .getMany(resource, { ids: selectedIds })
                .then(function (_a) {
                var data = _a.data;
                return exporter(data, ra_core_1.fetchRelatedRecords(dataProvider), dataProvider, resource);
            })
                .catch(function (error) {
                console.error(error);
                notify('ra.notification.http_error', 'warning');
            });
        if (typeof onClick === 'function') {
            onClick(event);
        }
    }, [dataProvider, exporter, notify, onClick, resource, selectedIds]);
    return (React.createElement(Button_1.default, __assign({ onClick: handleClick, label: label }, sanitizeRestProps(rest)), icon));
};
var defaultIcon = React.createElement(GetApp_1.default, null);
var sanitizeRestProps = function (_a) {
    var basePath = _a.basePath, filterValues = _a.filterValues, selectedIds = _a.selectedIds, resource = _a.resource, rest = __rest(_a, ["basePath", "filterValues", "selectedIds", "resource"]);
    return rest;
};
BulkExportButton.propTypes = {
    basePath: prop_types_1.default.string,
    exporter: prop_types_1.default.func,
    label: prop_types_1.default.string,
    resource: prop_types_1.default.string.isRequired,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any).isRequired,
    icon: prop_types_1.default.element,
};
exports.default = BulkExportButton;
