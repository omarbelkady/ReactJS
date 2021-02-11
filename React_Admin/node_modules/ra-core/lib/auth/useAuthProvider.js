"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultAuthParams = void 0;
var react_1 = require("react");
var AuthContext_1 = __importDefault(require("./AuthContext"));
exports.defaultAuthParams = {
    loginUrl: '/login',
    afterLoginUrl: '/',
};
/**
 * Get the authProvider stored in the context
 */
var useAuthProvider = function () { return react_1.useContext(AuthContext_1.default); };
exports.default = useAuthProvider;
