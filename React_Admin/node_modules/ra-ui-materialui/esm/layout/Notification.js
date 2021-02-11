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
import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { hideNotification, getNotification, undo, complete, undoableEventEmitter, useTranslate, } from 'ra-core';
var useStyles = makeStyles(function (theme) { return ({
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
    var _a = useState(false), open = _a[0], setOpen = _a[1];
    var notification = useSelector(getNotification);
    var dispatch = useDispatch();
    var translate = useTranslate();
    var styles = useStyles(props);
    useEffect(function () {
        setOpen(!!notification);
    }, [notification]);
    var handleRequestClose = useCallback(function () {
        setOpen(false);
    }, [setOpen]);
    var handleExited = useCallback(function () {
        if (notification && notification.undoable) {
            dispatch(complete());
            undoableEventEmitter.emit('end', { isUndo: false });
        }
        dispatch(hideNotification());
    }, [dispatch, notification]);
    var handleUndo = useCallback(function () {
        dispatch(undo());
        undoableEventEmitter.emit('end', { isUndo: true });
    }, [dispatch]);
    return (React.createElement(Snackbar, __assign({ open: open, message: notification &&
            notification.message &&
            translate(notification.message, notification.messageArgs), autoHideDuration: (notification && notification.autoHideDuration) ||
            autoHideDuration, disableWindowBlurListener: notification && notification.undoable, onExited: handleExited, onClose: handleRequestClose, ContentProps: {
            className: classnames(styles[(notification && notification.type) || type], className),
        }, action: notification && notification.undoable ? (React.createElement(Button, { color: "primary", className: styles.undo, size: "small", onClick: handleUndo }, translate('ra.action.undo'))) : null }, rest)));
};
Notification.propTypes = {
    type: PropTypes.string,
};
Notification.defaultProps = {
    type: 'info',
    autoHideDuration: 4000,
};
export default Notification;
