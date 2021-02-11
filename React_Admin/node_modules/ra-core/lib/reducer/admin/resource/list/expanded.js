"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var listActions_1 = require("../../../../actions/listActions");
var initialState = [];
var expanded = function (previousState, action) {
    if (previousState === void 0) { previousState = initialState; }
    if (action.type === listActions_1.TOGGLE_LIST_ITEM_EXPAND) {
        var index = previousState
            .map(function (el) { return el == action.payload; }) // eslint-disable-line eqeqeq
            .indexOf(true);
        if (index === -1) {
            // expand
            return __spreadArrays(previousState, [action.payload]);
        }
        else {
            // close
            return __spreadArrays(previousState.slice(0, index), previousState.slice(index + 1));
        }
    }
    return previousState;
};
exports.default = expanded;
