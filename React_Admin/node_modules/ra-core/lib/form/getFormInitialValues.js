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
function getFormInitialValues(initialValues, defaultValue, record) {
    if (typeof defaultValue !== 'undefined') {
        console.warn('"defaultValue" is deprecated, please use "initialValues" instead');
    }
    return __assign(__assign(__assign({}, getValues(defaultValue, record)), getValues(initialValues, record)), record);
}
exports.default = getFormInitialValues;
function getValues(values, record) {
    if (typeof values === 'object') {
        return values;
    }
    if (typeof values === 'function') {
        return values(record);
    }
    return {};
}
