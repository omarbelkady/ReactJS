"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetchActions_1 = require("../../actions/fetchActions");
var loadingReducer = function (previousState, _a) {
    if (previousState === void 0) { previousState = 0; }
    var type = _a.type;
    switch (type) {
        case fetchActions_1.FETCH_START:
            return previousState + 1;
        case fetchActions_1.FETCH_END:
        case fetchActions_1.FETCH_ERROR:
        case fetchActions_1.FETCH_CANCEL:
            return Math.max(previousState - 1, 0);
        default:
            return previousState;
    }
};
exports.default = loadingReducer;
