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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogout = exports.USER_LOGOUT = exports.userCheck = exports.USER_CHECK_SUCCESS = exports.USER_CHECK = exports.userLogin = exports.USER_LOGIN_SUCCESS = exports.USER_LOGIN_FAILURE = exports.USER_LOGIN_LOADING = exports.USER_LOGIN = void 0;
exports.USER_LOGIN = 'RA/USER_LOGIN';
exports.USER_LOGIN_LOADING = 'RA/USER_LOGIN_LOADING';
exports.USER_LOGIN_FAILURE = 'RA/USER_LOGIN_FAILURE';
exports.USER_LOGIN_SUCCESS = 'RA/USER_LOGIN_SUCCESS';
exports.userLogin = function (payload, pathName) { return ({
    type: exports.USER_LOGIN,
    payload: payload,
    meta: { auth: true, pathName: pathName },
}); };
exports.USER_CHECK = 'RA/USER_CHECK';
exports.USER_CHECK_SUCCESS = 'RA/USER_CHECK_SUCCESS';
exports.userCheck = function (payload, pathName, routeParams) {
    if (routeParams === void 0) { routeParams = {}; }
    return ({
        type: exports.USER_CHECK,
        payload: __assign(__assign({}, payload), { routeParams: routeParams }),
        meta: { auth: true, pathName: pathName },
    });
};
exports.USER_LOGOUT = 'RA/USER_LOGOUT';
/**
 * Action to trigger logout of the current user. The entire redux state will be cleared
 * thanks to the resettableAppReducer in Admin.
 * @see: Admin.js
 * @param redirectTo Path to direct to after logout
 * @return {{type: string, payload: {redirectTo: string}, meta: {auth: boolean}}}
 */
exports.userLogout = function (redirectTo) { return ({
    type: exports.USER_LOGOUT,
    payload: { redirectTo: redirectTo },
    meta: { auth: true },
}); };
