"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isRequired = function (validate) {
    if (validate && validate.isRequired) {
        return true;
    }
    if (Array.isArray(validate)) {
        return validate.some(function (it) { return it.isRequired; });
    }
    return false;
};
exports.default = isRequired;
