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
var styles_1 = require("@material-ui/core/styles");
var colorManipulator_1 = require("@material-ui/core/styles/colorManipulator");
var Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
var classnames_1 = __importDefault(require("classnames"));
var ra_core_1 = require("ra-core");
var Button_1 = __importDefault(require("./Button"));
var DeleteWithUndoButton = function (props) {
    var _a = props.label, label = _a === void 0 ? 'ra.action.delete' : _a, classesOverride = props.classes, className = props.className, _b = props.icon, icon = _b === void 0 ? defaultIcon : _b, onClick = props.onClick, record = props.record, basePath = props.basePath, _c = props.redirect, redirect = _c === void 0 ? 'list' : _c, onSuccess = props.onSuccess, onFailure = props.onFailure, rest = __rest(props, ["label", "classes", "className", "icon", "onClick", "record", "basePath", "redirect", "onSuccess", "onFailure"]);
    var classes = useStyles(props);
    var resource = ra_core_1.useResourceContext(props);
    var _d = ra_core_1.useDeleteWithUndoController({
        record: record,
        resource: resource,
        basePath: basePath,
        redirect: redirect,
        onClick: onClick,
        onSuccess: onSuccess,
        onFailure: onFailure,
    }), loading = _d.loading, handleDelete = _d.handleDelete;
    return (React.createElement(Button_1.default, __assign({ onClick: handleDelete, disabled: loading, label: label, className: classnames_1.default('ra-delete-button', classes.deleteButton, className), key: "button" }, rest), icon));
};
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
}); }, { name: 'RaDeleteWithUndoButton' });
var defaultIcon = React.createElement(Delete_1.default, null);
DeleteWithUndoButton.propTypes = {
    basePath: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    label: prop_types_1.default.string,
    record: prop_types_1.default.any,
    redirect: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    resource: prop_types_1.default.string,
    icon: prop_types_1.default.element,
};
exports.default = DeleteWithUndoButton;
