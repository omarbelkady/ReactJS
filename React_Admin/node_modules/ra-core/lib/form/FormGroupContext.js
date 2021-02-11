"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormGroupContext = void 0;
var react_1 = require("react");
/**
 * Context allowing inputs to register to a specific group.
 * This enables other components in the group to access group properties such as its
 * validation (valid/invalid) or whether its inputs have been updated (dirty/pristine).
 *
 * This should only be used through a FormGroupContextProvider.
 */
exports.FormGroupContext = react_1.createContext(undefined);
