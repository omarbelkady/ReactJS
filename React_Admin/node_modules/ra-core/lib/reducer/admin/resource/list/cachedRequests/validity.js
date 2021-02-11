"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("../../../../../core");
var initialState = null;
var validityReducer = function (previousState, _a) {
    if (previousState === void 0) { previousState = initialState; }
    var payload = _a.payload, meta = _a.meta;
    switch (meta.fetchResponse) {
        case core_1.GET_LIST: {
            if (payload.validUntil) {
                // store the validity date
                return payload.validUntil;
            }
            else {
                // remove the validity date
                return initialState;
            }
        }
        default:
            return previousState;
    }
};
exports.default = validityReducer;
