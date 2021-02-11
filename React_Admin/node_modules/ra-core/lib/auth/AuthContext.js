"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var defaultIdentity = { id: '' };
var defaultProvider = {
    login: function () { return Promise.resolve(); },
    logout: function () { return Promise.resolve(); },
    checkAuth: function () { return Promise.resolve(); },
    checkError: function () { return Promise.resolve(); },
    getPermissions: function () { return Promise.resolve(); },
    getIdentity: function () { return Promise.resolve(defaultIdentity); },
};
var AuthContext = react_1.createContext(defaultProvider);
AuthContext.displayName = 'AuthContext';
exports.default = AuthContext;
