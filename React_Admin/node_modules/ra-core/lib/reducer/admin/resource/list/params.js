"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listActions_1 = require("../../../../actions/listActions");
var defaultState = {
    sort: null,
    order: null,
    page: 1,
    perPage: null,
    filter: {},
};
var paramsReducer = function (previousState, action) {
    if (previousState === void 0) { previousState = defaultState; }
    switch (action.type) {
        case listActions_1.CRUD_CHANGE_LIST_PARAMS:
            return action.payload;
        default:
            return previousState;
    }
};
exports.default = paramsReducer;
