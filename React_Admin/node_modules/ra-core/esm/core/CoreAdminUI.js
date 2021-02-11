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
import * as React from 'react';
import { createElement, useMemo, useEffect, } from 'react';
import { Switch, Route } from 'react-router-dom';
import CoreAdminRouter from './CoreAdminRouter';
import { Ready } from '../util';
var DefaultLayout = function (_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null, children));
};
var CoreAdminUI = function (_a) {
    var _b = _a.catchAll, catchAll = _b === void 0 ? Noop : _b, children = _a.children, _c = _a.customRoutes, customRoutes = _c === void 0 ? [] : _c, dashboard = _a.dashboard, _d = _a.disableTelemetry, disableTelemetry = _d === void 0 ? false : _d, _e = _a.layout, layout = _e === void 0 ? DefaultLayout : _e, _f = _a.loading, loading = _f === void 0 ? Noop : _f, _g = _a.loginPage, loginPage = _g === void 0 ? false : _g, logout = _a.logout, menu = _a.menu, // deprecated, use a custom layout instead
    _h = _a.ready, // deprecated, use a custom layout instead
    ready = _h === void 0 ? Ready : _h, theme = _a.theme, _j = _a.title, title = _j === void 0 ? 'React Admin' : _j;
    var logoutElement = useMemo(function () { return logout && createElement(logout); }, [
        logout,
    ]);
    useEffect(function () {
        if (disableTelemetry ||
            process.env.NODE_ENV !== 'production' ||
            typeof window === 'undefined' ||
            typeof window.location === 'undefined' ||
            typeof Image === 'undefined') {
            return;
        }
        var img = new Image();
        img.src = "https://react-admin-telemetry.marmelab.com/react-admin-telemetry?domain=" + window.location.hostname;
    }, [disableTelemetry]);
    return (React.createElement(Switch, null,
        loginPage !== false && loginPage !== true ? (React.createElement(Route, { exact: true, path: "/login", render: function (props) {
                return createElement(loginPage, __assign(__assign({}, props), { title: title,
                    theme: theme }));
            } })) : null,
        React.createElement(Route, { path: "/", render: function (props) { return (React.createElement(CoreAdminRouter, __assign({ catchAll: catchAll, customRoutes: customRoutes, dashboard: dashboard, layout: layout, loading: loading, logout: logoutElement, menu: menu, ready: ready, theme: theme, title: title }, props), children)); } })));
};
var Noop = function () { return null; };
export default CoreAdminUI;
