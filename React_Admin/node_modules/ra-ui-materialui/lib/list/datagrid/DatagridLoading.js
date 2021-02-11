"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var core_1 = require("@material-ui/core");
var ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
var classnames_1 = __importDefault(require("classnames"));
var ra_core_1 = require("ra-core");
var Placeholder_1 = __importDefault(require("../Placeholder"));
var times = function (nbChildren, fn) {
    return Array.from({ length: nbChildren }, function (_, key) { return fn(key); });
};
var DatagridLoading = function (_a) {
    var classes = _a.classes, className = _a.className, expand = _a.expand, hasBulkActions = _a.hasBulkActions, nbChildren = _a.nbChildren, _b = _a.nbFakeLines, nbFakeLines = _b === void 0 ? 5 : _b, size = _a.size;
    var oneSecondHasPassed = ra_core_1.useTimeout(1000);
    return oneSecondHasPassed ? (React.createElement(core_1.Table, { className: classnames_1.default(classes.table, className), size: size },
        React.createElement(core_1.TableHead, null,
            React.createElement(core_1.TableRow, { className: classes.row },
                expand && (React.createElement(core_1.TableCell, { padding: "none", className: classes.expandHeader })),
                hasBulkActions && (React.createElement(core_1.TableCell, { padding: "checkbox", className: classes.expandIconCell },
                    React.createElement(core_1.Checkbox, { className: "select-all", color: "primary", checked: false }))),
                times(nbChildren, function (key) { return (React.createElement(core_1.TableCell, { variant: "head", className: classes.headerCell, key: key },
                    React.createElement(Placeholder_1.default, null))); }))),
        React.createElement(core_1.TableBody, null, times(nbFakeLines, function (key1) { return (React.createElement(core_1.TableRow, { key: key1, style: { opacity: 1 / (key1 + 1) } },
            expand && (React.createElement(core_1.TableCell, { padding: "none", className: classes.expandIconCell },
                React.createElement(core_1.IconButton, { className: classes.expandIcon, component: "div", "aria-hidden": "true" },
                    React.createElement(ExpandMore_1.default, null)))),
            hasBulkActions && (React.createElement(core_1.TableCell, { padding: "checkbox", className: classes.expandIconCell },
                React.createElement(core_1.Checkbox, { className: "select-all", color: "primary", checked: false }))),
            times(nbChildren, function (key2) { return (React.createElement(core_1.TableCell, { className: classes.rowCell, key: key2 },
                React.createElement(Placeholder_1.default, null))); }))); })))) : null;
};
DatagridLoading.propTypes = {
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    expand: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.elementType]),
    hasBulkActions: prop_types_1.default.bool,
    nbChildren: prop_types_1.default.number,
    nbFakeLines: prop_types_1.default.number,
    size: prop_types_1.default.oneOf(['small', 'medium']),
};
exports.default = react_1.memo(DatagridLoading);
