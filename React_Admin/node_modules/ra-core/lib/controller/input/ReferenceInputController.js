"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceInputController = void 0;
var useReferenceInputController_1 = require("./useReferenceInputController");
/**
 * Render prop version of the useReferenceInputController hook.
 *
 * @see useReferenceInputController
 */
exports.ReferenceInputController = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return children(useReferenceInputController_1.useReferenceInputController(props));
};
exports.default = exports.ReferenceInputController;
