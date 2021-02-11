"use strict";
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
var CoreAdminContext_1 = __importDefault(require("./CoreAdminContext"));
var CoreAdminUI_1 = __importDefault(require("./CoreAdminUI"));
/**
 * Main admin component, entry point to the application.
 *
 * Initializes the various contexts (auth, data, i18n, redux, router)
 * and defines the main routes.
 *
 * Expects a list of resources as children, or a function returning a list of
 * resources based on the permissions.
 *
 * @example
 *
 * // static list of resources
 *
 * import {
 *     CoreAdmin,
 *     Resource,
 *     ListGuesser,
 *     useDataProvider,
 * } from 'ra-core';
 *
 * const App = () => (
 *     <Core dataProvider={myDataProvider}>
 *         <Resource name="posts" list={ListGuesser} />
 *     </Core>
 * );
 *
 * // dynamic list of resources based on permissions
 *
 * import {
 *     CoreAdmin,
 *     Resource,
 *     ListGuesser,
 *     useDataProvider,
 * } from 'ra-core';
 *
 * const App = () => (
 *     <CoreAdmin dataProvider={myDataProvider}>
 *         {permissions => [
 *             <Resource name="posts" key="posts" list={ListGuesser} />,
 *         ]}
 *     </CoreAdmin>
 * );
 *
 * // If you have to build a dynamic list of resources using a side effect,
 * // you can't use <CoreAdmin>. But as it delegates to sub components,
 * // it's relatively straightforward to replace it:
 *
 * import * as React from 'react';
 * import { useEffect, useState } from 'react';
 * import {
 *     CoreAdminContext,
 *     CoreAdminUI,
 *     Resource,
 *     ListGuesser,
 *     useDataProvider,
 * } from 'ra-core';
 *
 * const App = () => (
 *     <CoreAdminContext dataProvider={myDataProvider}>
 *         <UI />
 *     </CoreAdminContext>
 * );
 *
 * const UI = () => {
 *     const [resources, setResources] = useState([]);
 *     const dataProvider = useDataProvider();
 *     useEffect(() => {
 *         dataProvider.introspect().then(r => setResources(r));
 *     }, []);
 *
 *     return (
 *         <CoreAdminUI>
 *             {resources.map(resource => (
 *                 <Resource name={resource.name} key={resource.key} list={ListGuesser} />
 *             ))}
 *         </CoreAdminUI>
 *     );
 * };
 */
var CoreAdmin = function (_a) {
    var appLayout = _a.appLayout, authProvider = _a.authProvider, catchAll = _a.catchAll, children = _a.children, customReducers = _a.customReducers, _b = _a.customRoutes, customRoutes = _b === void 0 ? [] : _b, customSagas = _a.customSagas, dashboard = _a.dashboard, dataProvider = _a.dataProvider, disableTelemetry = _a.disableTelemetry, history = _a.history, i18nProvider = _a.i18nProvider, initialState = _a.initialState, layout = _a.layout, loading = _a.loading, loginPage = _a.loginPage, logoutButton = _a.logoutButton, menu = _a.menu, // deprecated, use a custom layout instead
    theme = _a.theme, _c = _a.title, title = _c === void 0 ? 'React Admin' : _c;
    return (React.createElement(CoreAdminContext_1.default, { authProvider: authProvider, dataProvider: dataProvider, i18nProvider: i18nProvider, history: history, customReducers: customReducers, customSagas: customSagas, initialState: initialState },
        React.createElement(CoreAdminUI_1.default, { layout: appLayout || layout, customRoutes: customRoutes, dashboard: dashboard, disableTelemetry: disableTelemetry, menu: menu, catchAll: catchAll, theme: theme, title: title, loading: loading, loginPage: loginPage, logout: authProvider ? logoutButton : undefined }, children)));
};
exports.default = CoreAdmin;
