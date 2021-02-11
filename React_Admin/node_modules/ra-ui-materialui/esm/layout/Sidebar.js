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
import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import lodashGet from 'lodash/get';
import { setSidebarVisibility, useLocale } from 'ra-core';
export var DRAWER_WIDTH = 240;
export var CLOSED_DRAWER_WIDTH = 55;
var Sidebar = function (props) {
    var children = props.children, closedSize = props.closedSize, size = props.size, classesOverride = props.classes, rest = __rest(props, ["children", "closedSize", "size", "classes"]);
    var dispatch = useDispatch();
    var isXSmall = useMediaQuery(function (theme) {
        return theme.breakpoints.down('xs');
    });
    var isSmall = useMediaQuery(function (theme) { return theme.breakpoints.down('sm'); });
    var open = useSelector(function (state) { return state.admin.ui.sidebarOpen; });
    useLocale(); // force redraw on locale change
    var handleClose = function () { return dispatch(setSidebarVisibility(false)); };
    var toggleSidebar = function () { return dispatch(setSidebarVisibility(!open)); };
    var _a = useStyles(__assign(__assign({}, props), { open: open })), drawerPaper = _a.drawerPaper, classes = __rest(_a, ["drawerPaper"]);
    return isXSmall ? (React.createElement(Drawer, __assign({ variant: "temporary", open: open, PaperProps: {
            className: drawerPaper,
        }, onClose: toggleSidebar, classes: classes }, rest), cloneElement(Children.only(children), {
        onMenuClick: handleClose,
    }))) : isSmall ? (React.createElement(Drawer, __assign({ variant: "permanent", open: open, PaperProps: {
            className: drawerPaper,
        }, onClose: toggleSidebar, classes: classes }, rest), cloneElement(Children.only(children), {
        onMenuClick: handleClose,
    }))) : (React.createElement(Drawer, __assign({ variant: "permanent", open: open, PaperProps: {
            className: drawerPaper,
        }, onClose: toggleSidebar, classes: classes }, rest), cloneElement(Children.only(children), {
        onMenuClick: defaultOnMenuClick,
    })));
};
Sidebar.propTypes = {
    children: PropTypes.node.isRequired,
};
var defaultOnMenuClick = function () { return null; };
var useStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: {},
        docked: {},
        paper: {},
        paperAnchorLeft: {},
        paperAnchorRight: {},
        paperAnchorTop: {},
        paperAnchorBottom: {},
        paperAnchorDockedLeft: {},
        paperAnchorDockedTop: {},
        paperAnchorDockedRight: {},
        paperAnchorDockedBottom: {},
        modal: {},
        drawerPaper: (_a = {
                position: 'relative',
                height: '100%',
                overflowX: 'hidden',
                width: function (props) {
                    return props.open
                        ? lodashGet(theme, 'sidebar.width', DRAWER_WIDTH)
                        : lodashGet(theme, 'sidebar.closedWidth', CLOSED_DRAWER_WIDTH);
                },
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                backgroundColor: 'transparent',
                borderRight: 'none'
            },
            _a[theme.breakpoints.only('xs')] = {
                marginTop: 0,
                height: '100vh',
                position: 'inherit',
                backgroundColor: theme.palette.background.default,
            },
            _a[theme.breakpoints.up('md')] = {
                border: 'none',
            },
            _a.zIndex = 'inherit',
            _a),
    });
}, { name: 'RaSidebar' });
export default Sidebar;
