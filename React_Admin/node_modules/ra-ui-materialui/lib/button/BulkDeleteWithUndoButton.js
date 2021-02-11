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
var prop_types_1 = __importDefault(require("prop-types"));
var Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
var colorManipulator_1 = require("@material-ui/core/styles/colorManipulator");
var styles_1 = require("@material-ui/core/styles");
var ra_core_1 = require("ra-core");
var Button_1 = __importDefault(require("./Button"));
var useStyles = styles_1.makeStyles(function (theme) { return ({
    deleteButton: {
        color: theme.palette.error.main,
        '&:hover': {
            backgroundColor: colorManipulator_1.fade(theme.palette.error.main, 0.12),
            // Reset on mouse devices
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    },
}); }, { name: 'RaBulkDeleteWithUndoButton' });
var BulkDeleteWithUndoButton = function (props) {
    var basePath = props.basePath, classesOverride = props.classes, icon = props.icon, label = props.label, onClick = props.onClick, selectedIds = props.selectedIds, rest = __rest(props, ["basePath", "classes", "icon", "label", "onClick", "selectedIds"]);
    var classes = useStyles(props);
    var notify = ra_core_1.useNotify();
    var unselectAll = ra_core_1.useUnselectAll();
    var refresh = ra_core_1.useRefresh();
    var resource = ra_core_1.useResourceContext(props);
    var _a = ra_core_1.useDeleteMany(resource, selectedIds, {
        action: ra_core_1.CRUD_DELETE_MANY,
        onSuccess: function () {
            notify('ra.notification.deleted', 'info', { smart_count: selectedIds.length }, true);
            unselectAll(resource);
            refresh();
        },
        onFailure: function (error) {
            return notify(typeof error === 'string'
                ? error
                : error.message || 'ra.notification.http_error', 'warning', {
                _: typeof error === 'string'
                    ? error
                    : error && error.message
                        ? error.message
                        : undefined,
            });
        },
        undoable: true,
    }), deleteMany = _a[0], loading = _a[1].loading;
    var handleClick = function (e) {
        deleteMany();
        if (typeof onClick === 'function') {
            onClick(e);
        }
    };
    return (React.createElement(Button_1.default, __assign({ onClick: handleClick, label: label, className: classes.deleteButton, disabled: loading }, sanitizeRestProps(rest)), icon));
};
var sanitizeRestProps = function (_a) {
    var basePath = _a.basePath, classes = _a.classes, filterValues = _a.filterValues, label = _a.label, rest = __rest(_a, ["basePath", "classes", "filterValues", "label"]);
    return rest;
};
BulkDeleteWithUndoButton.propTypes = {
    basePath: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    label: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any).isRequired,
    icon: prop_types_1.default.element,
};
BulkDeleteWithUndoButton.defaultProps = {
    label: 'ra.action.delete',
    icon: React.createElement(Delete_1.default, null),
};
exports.default = BulkDeleteWithUndoButton;
