"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dataActions_1 = require("../../../../actions/dataActions");
/**
 * This resource reducer is false until the list loads successfully
 */
var loadedOnce = function (previousState, _a) {
    if (previousState === void 0) { previousState = false; }
    var type = _a.type;
    // early return
    if (previousState === true) {
        return previousState;
    }
    if (type === dataActions_1.CRUD_GET_LIST_SUCCESS) {
        return true;
    }
    return previousState;
};
exports.default = loadedOnce;
