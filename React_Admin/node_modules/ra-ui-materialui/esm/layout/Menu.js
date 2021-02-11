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
import PropTypes from 'prop-types';
import { shallowEqual, useSelector } from 'react-redux';
import lodashGet from 'lodash/get';
// @ts-ignore
import inflection from 'inflection';
import { useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DefaultIcon from '@material-ui/icons/ViewList';
import classnames from 'classnames';
import { getResources, useTranslate } from 'ra-core';
import DashboardMenuItem from './DashboardMenuItem';
import MenuItemLink from './MenuItemLink';
export var MENU_WIDTH = 240;
export var CLOSED_MENU_WIDTH = 55;
var useStyles = makeStyles(function (theme) {
    var _a;
    return ({
        main: (_a = {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                marginTop: '0.5em'
            },
            _a[theme.breakpoints.only('xs')] = {
                marginTop: 0,
            },
            _a[theme.breakpoints.up('md')] = {
                marginTop: '1.5em',
            },
            _a),
        open: {
            width: lodashGet(theme, 'menu.width', MENU_WIDTH),
        },
        closed: {
            width: lodashGet(theme, 'menu.closedWidth', CLOSED_MENU_WIDTH),
        },
    });
}, { name: 'RaMenu' });
var translatedResourceName = function (resource, translate) {
    return translate("resources." + resource.name + ".name", {
        smart_count: 2,
        _: resource.options && resource.options.label
            ? translate(resource.options.label, {
                smart_count: 2,
                _: resource.options.label,
            })
            : inflection.humanize(inflection.pluralize(resource.name)),
    });
};
var Menu = function (props) {
    var _a;
    var classesOverride = props.classes, className = props.className, dense = props.dense, hasDashboard = props.hasDashboard, onMenuClick = props.onMenuClick, logout = props.logout, rest = __rest(props, ["classes", "className", "dense", "hasDashboard", "onMenuClick", "logout"]);
    var translate = useTranslate();
    var classes = useStyles(props);
    var isXSmall = useMediaQuery(function (theme) {
        return theme.breakpoints.down('xs');
    });
    var open = useSelector(function (state) { return state.admin.ui.sidebarOpen; });
    var resources = useSelector(getResources, shallowEqual);
    // Used to force redraw on navigation
    useSelector(function (state) { return state.router.location.pathname; });
    return (React.createElement("div", __assign({ className: classnames(classes.main, (_a = {},
            _a[classes.open] = open,
            _a[classes.closed] = !open,
            _a), className) }, rest),
        hasDashboard && (React.createElement(DashboardMenuItem, { onClick: onMenuClick, dense: dense, sidebarIsOpen: open })),
        resources
            .filter(function (r) { return r.hasList; })
            .map(function (resource) { return (React.createElement(MenuItemLink, { key: resource.name, to: "/" + resource.name, primaryText: translatedResourceName(resource, translate), leftIcon: resource.icon ? React.createElement(resource.icon, null) : React.createElement(DefaultIcon, null), onClick: onMenuClick, dense: dense, sidebarIsOpen: open })); }),
        isXSmall && logout));
};
Menu.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    dense: PropTypes.bool,
    hasDashboard: PropTypes.bool,
    logout: PropTypes.element,
    onMenuClick: PropTypes.func,
};
Menu.defaultProps = {
    onMenuClick: function () { return null; },
};
export default Menu;
