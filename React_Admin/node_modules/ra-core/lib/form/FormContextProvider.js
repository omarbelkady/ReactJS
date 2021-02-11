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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormContextProvider = void 0;
var React = __importStar(require("react"));
var FormContext_1 = require("./FormContext");
/**
 * Provides utilities to Form children, allowing them to change the default save function or register inputs to a group.
 * @param props The component props
 * @param {ReactNode} props.children The form content
 * @param {FormContextValue} props.value The form context
 */
exports.FormContextProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return React.createElement(FormContext_1.FormContext.Provider, { value: value }, children);
};
