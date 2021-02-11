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
exports.answerWithCache = void 0;
var replyWithCache_1 = require("../replyWithCache");
var getFetchType_1 = __importDefault(require("../getFetchType"));
var fetchActions_1 = require("../../actions/fetchActions");
exports.answerWithCache = function (_a) {
    var type = _a.type, payload = _a.payload, resource = _a.resource, action = _a.action, rest = _a.rest, onSuccess = _a.onSuccess, resourceState = _a.resourceState, dispatch = _a.dispatch;
    dispatch({
        type: action,
        payload: payload,
        meta: __assign({ resource: resource }, rest),
    });
    var response = replyWithCache_1.getResultFromCache(type, payload, resourceState);
    dispatch({
        type: action + "_SUCCESS",
        payload: response,
        requestPayload: payload,
        meta: __assign(__assign({}, rest), { resource: resource, fetchResponse: getFetchType_1.default(type), fetchStatus: fetchActions_1.FETCH_END, fromCache: true }),
    });
    onSuccess && onSuccess(response);
    return Promise.resolve(response);
};
