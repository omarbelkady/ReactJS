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
exports.getReferenceResource = exports.getResources = void 0;
var actions_1 = require("../../../actions");
var data_1 = __importDefault(require("./data"));
var list_1 = __importDefault(require("./list"));
var validity_1 = __importDefault(require("./validity"));
var initialState = {};
exports.default = (function (previousState, action) {
    var _a;
    if (previousState === void 0) { previousState = initialState; }
    if (action.type === actions_1.REGISTER_RESOURCE) {
        var resourceState = {
            props: action.payload,
            data: data_1.default(undefined, action),
            list: list_1.default(undefined, action),
            validity: validity_1.default(undefined, action),
        };
        return __assign(__assign({}, previousState), (_a = {}, _a[action.payload.name] = resourceState, _a));
    }
    if (action.type === actions_1.UNREGISTER_RESOURCE) {
        return Object.keys(previousState).reduce(function (acc, key) {
            var _a;
            if (key === action.payload) {
                return acc;
            }
            return __assign(__assign({}, acc), (_a = {}, _a[key] = previousState[key], _a));
        }, {});
    }
    if (action.type !== actions_1.REFRESH_VIEW &&
        (!action.meta || !action.meta.resource)) {
        return previousState;
    }
    var resources = Object.keys(previousState);
    var newState = resources.reduce(function (acc, resource) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[resource] = action.type === actions_1.REFRESH_VIEW ||
            action.meta.resource === resource
            ? {
                props: previousState[resource].props,
                data: data_1.default(previousState[resource].data, action),
                list: list_1.default(previousState[resource].list, action),
                validity: validity_1.default(previousState[resource].validity, action),
            }
            : previousState[resource], _a)));
    }, {});
    return newState;
});
exports.getResources = function (state) {
    return Object.keys(state).map(function (key) { return state[key].props; });
};
exports.getReferenceResource = function (state, props) { return state[props.reference]; };
