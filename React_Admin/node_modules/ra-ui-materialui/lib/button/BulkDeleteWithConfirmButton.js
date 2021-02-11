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
var Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
var colorManipulator_1 = require("@material-ui/core/styles/colorManipulator");
var inflection_1 = __importDefault(require("inflection"));
var styles_1 = require("@material-ui/core/styles");
var ra_core_1 = require("ra-core");
var Confirm_1 = __importDefault(require("../layout/Confirm"));
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
}); }, { name: 'RaBulkDeleteWithConfirmButton' });
var defaultIcon = React.createElement(Delete_1.default, null);
var BulkDeleteWithConfirmButton = function (props) {
    var basePath = props.basePath, classesOverride = props.classes, _a = props.confirmTitle, confirmTitle = _a === void 0 ? 'ra.message.bulk_delete_title' : _a, _b = props.confirmContent, confirmContent = _b === void 0 ? 'ra.message.bulk_delete_content' : _b, _c = props.icon, icon = _c === void 0 ? defaultIcon : _c, label = props.label, onClick = props.onClick, selectedIds = props.selectedIds, rest = __rest(props, ["basePath", "classes", "confirmTitle", "confirmContent", "icon", "label", "onClick", "selectedIds"]);
    var _d = react_1.useState(false), isOpen = _d[0], setOpen = _d[1];
    var classes = useStyles(props);
    var notify = ra_core_1.useNotify();
    var unselectAll = ra_core_1.useUnselectAll();
    var refresh = ra_core_1.useRefresh();
    var translate = ra_core_1.useTranslate();
    var resource = ra_core_1.useResourceContext(props);
    var _e = ra_core_1.useDeleteMany(resource, selectedIds, {
        action: ra_core_1.CRUD_DELETE_MANY,
        onSuccess: function () {
            refresh();
            notify('ra.notification.deleted', 'info', {
                smart_count: selectedIds.length,
            });
            unselectAll(resource);
        },
        onFailure: function (error) {
            notify(typeof error === 'string'
                ? error
                : error.message || 'ra.notification.http_error', 'warning', {
                _: typeof error === 'string'
                    ? error
                    : error && error.message
                        ? error.message
                        : undefined,
            });
            setOpen(false);
        },
    }), deleteMany = _e[0], loading = _e[1].loading;
    var handleClick = function (e) {
        setOpen(true);
        e.stopPropagation();
    };
    var handleDialogClose = function () {
        setOpen(false);
    };
    var handleDelete = function (e) {
        deleteMany();
        if (typeof onClick === 'function') {
            onClick(e);
        }
    };
    return (React.createElement(react_1.Fragment, null,
        React.createElement(Button_1.default, __assign({ onClick: handleClick, label: label, className: classes.deleteButton }, sanitizeRestProps(rest)), icon),
        React.createElement(Confirm_1.default, { isOpen: isOpen, loading: loading, title: confirmTitle, content: confirmContent, translateOptions: {
                smart_count: selectedIds.length,
                name: translate("resources." + resource + ".forcedCaseName", {
                    smart_count: selectedIds.length,
                    _: inflection_1.default.humanize(translate("resources." + resource + ".name", {
                        smart_count: selectedIds.length,
                        _: inflection_1.default.inflect(resource, selectedIds.length),
                    }), true),
                }),
            }, onConfirm: handleDelete, onClose: handleDialogClose })));
};
var sanitizeRestProps = function (_a) {
    var basePath = _a.basePath, classes = _a.classes, filterValues = _a.filterValues, label = _a.label, rest = __rest(_a, ["basePath", "classes", "filterValues", "label"]);
    return rest;
};
BulkDeleteWithConfirmButton.propTypes = {
    basePath: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    confirmTitle: prop_types_1.default.string,
    confirmContent: prop_types_1.default.string,
    label: prop_types_1.default.string,
    resource: prop_types_1.default.string.isRequired,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any).isRequired,
    icon: prop_types_1.default.element,
};
BulkDeleteWithConfirmButton.defaultProps = {
    label: 'ra.action.delete',
};
exports.default = BulkDeleteWithConfirmButton;
