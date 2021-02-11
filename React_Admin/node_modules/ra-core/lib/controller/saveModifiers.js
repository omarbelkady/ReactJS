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
exports.useSaveModifiers = exports.SideEffectContextProvider = exports.SideEffectContext = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
exports.SideEffectContext = react_1.createContext({});
exports.SideEffectContextProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return (React.createElement(exports.SideEffectContext.Provider, { value: value }, children));
};
/**
 * Get modifiers for a save() function, and the way to update them.
 *
 * Used in useCreateController and useEditController.
 *
 * @example
 *
 * const {
 *     onSuccessRef,
 *     setOnSuccess,
 *     onFailureRef,
 *     setOnFailure,
 *     transformRef,
 *     setTransform,
 * } = useSaveModifiers({ onSuccess, onFailure, transform });
 */
exports.useSaveModifiers = function (_a) {
    var onSuccess = _a.onSuccess, onFailure = _a.onFailure, transform = _a.transform;
    var onSuccessRef = react_1.useRef(onSuccess);
    var setOnSuccess = function (onSuccess) {
        onSuccessRef.current = function (response) {
            // reset onSuccess for next submission
            onSuccessRef.current = undefined;
            return onSuccess(response);
        };
    };
    var onFailureRef = react_1.useRef(onFailure);
    var setOnFailure = function (onFailure) {
        onFailureRef.current = function (error) {
            // reset onFailure for next submission
            onFailureRef.current = undefined;
            return onFailure(error);
        };
    };
    var transformRef = react_1.useRef(transform);
    var setTransform = function (transform) {
        transformRef.current = function (data) {
            // reset transform for next submission
            transformRef.current = undefined;
            return transform(data);
        };
    };
    return {
        onSuccessRef: onSuccessRef,
        setOnSuccess: setOnSuccess,
        onFailureRef: onFailureRef,
        setOnFailure: setOnFailure,
        transformRef: transformRef,
        setTransform: setTransform,
    };
};
