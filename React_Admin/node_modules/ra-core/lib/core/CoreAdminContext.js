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
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var history_1 = require("history");
var connected_react_router_1 = require("connected-react-router");
var auth_1 = require("../auth");
var dataProvider_1 = require("../dataProvider");
var createAdminStore_1 = __importDefault(require("./createAdminStore"));
var TranslationProvider_1 = __importDefault(require("../i18n/TranslationProvider"));
var CoreAdminContext = function (_a) {
    var authProvider = _a.authProvider, dataProvider = _a.dataProvider, i18nProvider = _a.i18nProvider, children = _a.children, history = _a.history, customReducers = _a.customReducers, customSagas = _a.customSagas, initialState = _a.initialState;
    var reduxIsAlreadyInitialized = !!react_1.useContext(react_redux_1.ReactReduxContext);
    if (!dataProvider) {
        throw new Error("Missing dataProvider prop.\nReact-admin requires a valid dataProvider function to work.");
    }
    var finalAuthProvider = authProvider instanceof Function
        ? auth_1.convertLegacyAuthProvider(authProvider)
        : authProvider;
    var finalDataProvider = dataProvider instanceof Function
        ? dataProvider_1.convertLegacyDataProvider(dataProvider)
        : dataProvider;
    var finalHistory = history || history_1.createHashHistory();
    var renderCore = function () {
        return (React.createElement(auth_1.AuthContext.Provider, { value: finalAuthProvider },
            React.createElement(dataProvider_1.DataProviderContext.Provider, { value: finalDataProvider },
                React.createElement(TranslationProvider_1.default, { i18nProvider: i18nProvider }, typeof window !== 'undefined' ? (React.createElement(connected_react_router_1.ConnectedRouter, { history: finalHistory }, children)) : (children)))));
    };
    var store = react_1.useState(function () {
        return !reduxIsAlreadyInitialized
            ? createAdminStore_1.default({
                authProvider: finalAuthProvider,
                customReducers: customReducers,
                customSagas: customSagas,
                dataProvider: finalDataProvider,
                initialState: initialState,
                history: finalHistory,
            })
            : undefined;
    })[0];
    if (reduxIsAlreadyInitialized) {
        if (!history) {
            throw new Error("Missing history prop.\nWhen integrating react-admin inside an existing redux Provider, you must provide the same 'history' prop to the <Admin> as the one used to bootstrap your routerMiddleware.\nReact-admin uses this history for its own ConnectedRouter.");
        }
        return renderCore();
    }
    else {
        return React.createElement(react_redux_1.Provider, { store: store }, renderCore());
    }
};
exports.default = CoreAdminContext;
