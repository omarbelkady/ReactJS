"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutocompleteInputLoader = void 0;
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var ra_core_1 = require("ra-core");
exports.AutocompleteInputLoader = function (_a) {
    var _b = _a.timeout, timeout = _b === void 0 ? 1000 : _b;
    var oneSecondHasPassed = ra_core_1.useTimeout(timeout);
    if (oneSecondHasPassed) {
        return react_1.default.createElement(core_1.CircularProgress, { size: 24 });
    }
    return null;
};
