"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
/**
 * Turn a function-based authProvider to an object-based one
 *
 * Allows using legacy authProviders transparently.
 *
 * @param {Function} legacyAuthProvider A legacy authProvider (type, params) => Promise<any>
 *
 * @returns {Object} An authProvider that react-admin can use
 */
exports.default = (function (legacyAuthProvider) {
    var authProvider = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return legacyAuthProvider.apply(null, args);
    };
    authProvider.login = function (params) { return legacyAuthProvider(types_1.AUTH_LOGIN, params); };
    authProvider.logout = function (params) { return legacyAuthProvider(types_1.AUTH_LOGOUT, params); };
    authProvider.checkAuth = function (params) { return legacyAuthProvider(types_1.AUTH_CHECK, params); };
    authProvider.checkError = function (error) { return legacyAuthProvider(types_1.AUTH_ERROR, error); };
    authProvider.getPermissions = function (params) {
        return legacyAuthProvider(types_1.AUTH_GET_PERMISSIONS, params);
    };
    return authProvider;
});
