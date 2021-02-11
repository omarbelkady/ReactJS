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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var connected_react_router_1 = require("connected-react-router");
var redux_saga_1 = __importDefault(require("redux-saga"));
var effects_1 = require("redux-saga/effects");
var reducer_1 = __importDefault(require("../reducer"));
var sideEffect_1 = require("../sideEffect");
var clearActions_1 = require("../actions/clearActions");
exports.default = (function (_a) {
    var dataProvider = _a.dataProvider, history = _a.history, _b = _a.customReducers, customReducers = _b === void 0 ? {} : _b, _c = _a.authProvider, authProvider = _c === void 0 ? null : _c, _d = _a.customSagas, customSagas = _d === void 0 ? [] : _d, initialState = _a.initialState;
    var appReducer = reducer_1.default(customReducers, history);
    var resettableAppReducer = function (state, action) {
        return appReducer(action.type !== clearActions_1.CLEAR_STATE
            ? state
            : // Erase data from the store but keep location, notifications, ui prefs, etc.
             __assign(__assign({}, state), { admin: __assign(__assign({}, state.admin), { loading: 0, resources: {}, customQueries: {}, references: { oneToMany: {}, possibleValues: {} } }) }), action);
    };
    var saga = function rootSaga() {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, effects_1.all(__spreadArrays([sideEffect_1.adminSaga(dataProvider, authProvider)], customSagas).map(effects_1.fork))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    };
    var sagaMiddleware = redux_saga_1.default();
    var typedWindow = typeof window !== 'undefined' && window;
    var composeEnhancers = (process.env.NODE_ENV === 'development' &&
        typeof typedWindow !== 'undefined' &&
        typedWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        typedWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: true,
            traceLimit: 25,
        })) ||
        redux_1.compose;
    var store = redux_1.createStore(resettableAppReducer, typeof initialState === 'function' ? initialState() : initialState, composeEnhancers(redux_1.applyMiddleware(sagaMiddleware, connected_react_router_1.routerMiddleware(history))));
    sagaMiddleware.run(saga);
    return store;
});
