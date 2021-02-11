"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_is_1 = require("react-is");
exports.default = (function (props, propName, componentName) {
    if (props[propName] && !react_is_1.isValidElementType(props[propName])) {
        return new Error("Invalid prop '" + propName + "' supplied to '" + componentName + "': the prop is not a valid React component");
    }
});
