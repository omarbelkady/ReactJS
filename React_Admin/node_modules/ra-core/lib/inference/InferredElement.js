"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var InferredElement = /** @class */ (function () {
    function InferredElement(type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children;
    }
    InferredElement.prototype.getElement = function (props) {
        if (props === void 0) { props = {}; }
        if (!this.isDefined()) {
            return;
        }
        return this.children
            ? react_1.createElement(this.type.component, __assign(__assign({}, this.props), props), this.children.length > 0
                ? this.children.map(function (child, index) {
                    return child.getElement({ key: index });
                })
                : this.children.getElement())
            : react_1.createElement(this.type.component, __assign(__assign({}, this.props), props));
    };
    InferredElement.prototype.getProps = function () {
        return this.props;
    };
    InferredElement.prototype.isDefined = function () {
        return !!this.type;
    };
    InferredElement.prototype.getRepresentation = function () {
        if (!this.isDefined()) {
            return;
        }
        if (this.type.representation) {
            return this.type.representation(this.props, this.children);
        }
        return "<" + (this.type.component.displayName || this.type.component.name) + " source=\"" + this.props.source + "\" />";
    };
    return InferredElement;
}());
exports.default = InferredElement;
