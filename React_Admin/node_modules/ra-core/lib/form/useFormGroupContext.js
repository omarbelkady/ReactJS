"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormGroupContext = void 0;
var react_1 = require("react");
var FormGroupContext_1 = require("./FormGroupContext");
/**
 * Retrieve the name of the form group the consumer belongs to. May be undefined if the consumer is not inside a form group.
 */
exports.useFormGroupContext = function () {
    var context = react_1.useContext(FormGroupContext_1.FormGroupContext);
    return context;
};
