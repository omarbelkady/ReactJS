"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormContext = void 0;
var react_1 = require("react");
var FormContext_1 = require("./FormContext");
/**
 * Retrieve the form context enabling consumers to alter its save function or to register inputs inside a form group.
 * @returns {FormContext} The form context.
 */
exports.useFormContext = function () { return react_1.useContext(FormContext_1.FormContext); };
