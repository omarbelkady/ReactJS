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
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var WithPermissions_1 = __importDefault(require("../auth/WithPermissions"));
var defaultAuthParams = { route: 'dashboard' };
var RoutesWithLayout = function (_a) {
    var catchAll = _a.catchAll, children = _a.children, customRoutes = _a.customRoutes, dashboard = _a.dashboard, title = _a.title;
    var childrenAsArray = react_1.default.Children.toArray(children);
    var firstChild = childrenAsArray.length > 0
        ? childrenAsArray[0]
        : null;
    return (react_1.default.createElement(react_router_dom_1.Switch, null,
        customRoutes &&
            customRoutes.map(function (route, key) { return react_1.cloneElement(route, { key: key }); }),
        react_1.Children.map(children, function (child) { return (react_1.default.createElement(react_router_dom_1.Route, { key: child.props.name, path: "/" + child.props.name, render: function (props) {
                return react_1.cloneElement(child, __assign({ 
                    // The context prop instruct the Resource component to
                    // render itself as a standard component
                    intent: 'route' }, props));
            } })); }),
        dashboard ? (react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", render: function (routeProps) { return (react_1.default.createElement(WithPermissions_1.default, __assign({ authParams: defaultAuthParams, component: dashboard }, routeProps))); } })) : firstChild ? (react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", render: function () { return react_1.default.createElement(react_router_dom_1.Redirect, { to: "/" + firstChild.props.name }); } })) : null,
        react_1.default.createElement(react_router_dom_1.Route, { render: function (routeProps) {
                return react_1.createElement(catchAll, __assign(__assign({}, routeProps), { title: title }));
            } })));
};
exports.default = RoutesWithLayout;
