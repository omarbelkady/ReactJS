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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("../../../../actions");
var core_1 = require("../../../../core");
var ids_1 = __importDefault(require("./cachedRequests/ids"));
var total_1 = __importDefault(require("./cachedRequests/total"));
var validity_1 = __importDefault(require("./cachedRequests/validity"));
var initialState = {};
var initialSubstate = { ids: [], total: null, validity: null };
var cachedRequestsReducer = function (previousState, action) {
    var _a;
    if (previousState === void 0) { previousState = initialState; }
    if (action.type === actions_1.REFRESH_VIEW) {
        // force refresh
        return initialState;
    }
    if (!action.meta || action.meta.fetchStatus !== actions_1.FETCH_END) {
        // not a return from the dataProvider
        return previousState;
    }
    if (action.meta.fetchResponse === core_1.CREATE ||
        action.meta.fetchResponse === core_1.DELETE ||
        action.meta.fetchResponse === core_1.DELETE_MANY ||
        action.meta.fetchResponse === core_1.UPDATE ||
        action.meta.fetchResponse === core_1.UPDATE_MANY) {
        // force refresh of all lists because we don't know where the
        // new/deleted/updated record(s) will appear in the list
        return initialState;
    }
    if (action.meta.fetchResponse !== core_1.GET_LIST || action.meta.fromCache) {
        // looks like a GET_MANY, a GET_ONE, or a cached response
        return previousState;
    }
    var requestKey = JSON.stringify(action.requestPayload);
    var previousSubState = previousState[requestKey] || initialSubstate;
    return __assign(__assign({}, previousState), (_a = {}, _a[requestKey] = {
        ids: ids_1.default(previousSubState.ids, action),
        total: total_1.default(previousSubState.total, action),
        validity: validity_1.default(previousSubState.validity, action),
    }, _a));
};
exports.default = cachedRequestsReducer;
