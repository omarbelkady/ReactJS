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
var react_redux_1 = require("react-redux");
var Snackbar_1 = __importDefault(require("@material-ui/core/Snackbar"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var styles_1 = require("@material-ui/core/styles");
var classnames_1 = __importDefault(require("classnames"));
var ra_core_1 = require("ra-core");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    error: {
        backgroundColor: theme.palette.error.dark,
        color: theme.palette.error.contrastText,
    },
    warning: {
        backgroundColor: theme.palette.error.light,
        color: theme.palette.error.contrastText,
    },
    undo: {
        color: theme.palette.primary.light,
    },
}); }, { name: 'RaNotification' });
var Notification = function (props) {
    var classesOverride = props.classes, type = props.type, className = props.className, autoHideDuration = props.autoHideDuration, rest = __rest(props, ["classes", "type", "className", "autoHideDuration"]);
    var _a = react_1.useState(false), open = _a[0], setOpen = _a[1];
    var notification = react_redux_1.useSelector(ra_core_1.getNotification);
    var dispatch = react_redux_1.useDispatch();
    var translate = ra_core_1.useTranslate();
    var styles = useStyles(props);
    react_1.useEffect(function () {
        setOpen(!!notification);
    }, [notification]);
    var handleRequestClose = react_1.useCallback(function () {
        setOpen(false);
    }, [setOpen]);
    var handleExited = react_1.useCallback(function () {
        if (notification && notification.undoable) {
            dispatch(ra_core_1.complete());
            ra_core_1.undoableEventEmitter.emit('end', { isUndo: false });
        }
        dispatch(ra_core_1.hideNotification());
    }, [dispatch, notification]);
    var handleUndo = react_1.useCallback(function () {
        dispatch(ra_core_1.undo());
        ra_core_1.undoableEventEmitter.emit('end', { isUndo: true });
    }, [dispatch]);
    return (React.createElement(Snackbar_1.default, __assign({ open: open, message: notification &&
            notification.message &&
            translate(notification.message, notification.messageArgs), autoHideDuration: (notification && notification.autoHideDuration) ||
            autoHideDuration, disableWindowBlurListener: notification && notification.undoable, onExited: handleExited, onClose: handleRequestClose, ContentProps: {
            className: classnames_1.default(styles[(notification && notification.type) || type], className),
        }, action: notification && notification.undoable ? (React.createElement(Button_1.default, { color: "primary", className: styles.undo, size: "small", onClick: handleUndo }, translate('ra.action.undo'))) : null }, rest)));
};
Notification.propTypes = {
    type: prop_types_1.default.string,
};
Notification.defaultProps = {
    type: 'info',
    autoHideDuration: 4000,
};
exports.default = Notification;
