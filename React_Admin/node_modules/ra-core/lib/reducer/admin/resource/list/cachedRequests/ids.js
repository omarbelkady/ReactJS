"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("../../../../../core");
var initialState = [];
var idsReducer = function (previousState, action) {
    if (previousState === void 0) { previousState = initialState; }
    if (action.meta && action.meta.fetchResponse === core_1.GET_LIST) {
        return action.payload.data.map(function (_a) {
            var id = _a.id;
            return id;
        });
    }
    return previousState;
};
exports.default = idsReducer;
