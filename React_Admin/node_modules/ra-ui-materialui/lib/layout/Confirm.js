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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
var DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
var DialogContentText_1 = __importDefault(require("@material-ui/core/DialogContentText"));
var DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var styles_1 = require("@material-ui/core/styles");
var colorManipulator_1 = require("@material-ui/core/styles/colorManipulator");
var CheckCircle_1 = __importDefault(require("@material-ui/icons/CheckCircle"));
var ErrorOutline_1 = __importDefault(require("@material-ui/icons/ErrorOutline"));
var classnames_1 = __importDefault(require("classnames"));
var ra_core_1 = require("ra-core");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    confirmPrimary: {
        color: theme.palette.primary.main,
    },
    confirmWarning: {
        color: theme.palette.error.main,
        '&:hover': {
            backgroundColor: colorManipulator_1.fade(theme.palette.error.main, 0.12),
            // Reset on mouse devices
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    },
    iconPaddingStyle: {
        paddingRight: '0.5em',
    },
}); }, { name: 'RaConfirm' });
/**
 * Confirmation dialog
 *
 * @example
 * <Confirm
 *     isOpen={true}
 *     title="Delete Item"
 *     content="Are you sure you want to delete this item?"
 *     confirm="Yes"
 *     confirmColor="primary"
 *     ConfirmIcon=ActionCheck
 *     CancelIcon=AlertError
 *     cancel="Cancel"
 *     onConfirm={() => { // do something }}
 *     onClose={() => { // do something }}
 * />
 */
var Confirm = function (props) {
    var _a;
    var isOpen = props.isOpen, loading = props.loading, title = props.title, content = props.content, confirm = props.confirm, cancel = props.cancel, confirmColor = props.confirmColor, ConfirmIcon = props.ConfirmIcon, CancelIcon = props.CancelIcon, onClose = props.onClose, onConfirm = props.onConfirm, _b = props.translateOptions, translateOptions = _b === void 0 ? {} : _b;
    var classes = useStyles(props);
    var translate = ra_core_1.useTranslate();
    var handleConfirm = react_1.useCallback(function (e) {
        e.stopPropagation();
        onConfirm(e);
    }, [onConfirm]);
    var handleClick = react_1.useCallback(function (e) {
        e.stopPropagation();
    }, []);
    return (React.createElement(Dialog_1.default, { open: isOpen, onClose: onClose, onClick: handleClick, "aria-labelledby": "alert-dialog-title" },
        React.createElement(DialogTitle_1.default, { id: "alert-dialog-title" }, translate(title, __assign({ _: title }, translateOptions))),
        React.createElement(DialogContent_1.default, null,
            React.createElement(DialogContentText_1.default, null, translate(content, __assign({ _: content }, translateOptions)))),
        React.createElement(DialogActions_1.default, null,
            React.createElement(Button_1.default, { disabled: loading, onClick: onClose },
                React.createElement(CancelIcon, { className: classes.iconPaddingStyle }),
                translate(cancel, { _: cancel })),
            React.createElement(Button_1.default, { disabled: loading, onClick: handleConfirm, className: classnames_1.default('ra-confirm', (_a = {},
                    _a[classes.confirmWarning] = confirmColor === 'warning',
                    _a[classes.confirmPrimary] = confirmColor === 'primary',
                    _a)), autoFocus: true },
                React.createElement(ConfirmIcon, { className: classes.iconPaddingStyle }),
                translate(confirm, { _: confirm })))));
};
Confirm.propTypes = {
    cancel: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    confirm: prop_types_1.default.string,
    confirmColor: prop_types_1.default.string,
    ConfirmIcon: prop_types_1.default.elementType,
    CancelIcon: prop_types_1.default.elementType,
    content: prop_types_1.default.string.isRequired,
    isOpen: prop_types_1.default.bool,
    loading: prop_types_1.default.bool,
    onClose: prop_types_1.default.func.isRequired,
    onConfirm: prop_types_1.default.func.isRequired,
    title: prop_types_1.default.string.isRequired,
};
Confirm.defaultProps = {
    cancel: 'ra.action.cancel',
    classes: {},
    confirm: 'ra.action.confirm',
    confirmColor: 'primary',
    ConfirmIcon: CheckCircle_1.default,
    CancelIcon: ErrorOutline_1.default,
    isOpen: false,
};
exports.default = Confirm;
