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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTags = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var get_1 = __importDefault(require("lodash/get"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
var types_1 = require("./types");
exports.removeTags = function (input) {
    return input ? input.replace(/<[^>]+>/gm, '') : '';
};
var RichTextField = react_1.memo(function (_a) {
    var className = _a.className, emptyText = _a.emptyText, source = _a.source, _b = _a.record, record = _b === void 0 ? {} : _b, stripTags = _a.stripTags, rest = __rest(_a, ["className", "emptyText", "source", "record", "stripTags"]);
    var value = get_1.default(record, source);
    return (React.createElement(Typography_1.default, __assign({ className: className, variant: "body2", component: "span" }, sanitizeFieldRestProps_1.default(rest)), value == null && emptyText ? (emptyText) : stripTags ? (exports.removeTags(value)) : (React.createElement("span", { dangerouslySetInnerHTML: { __html: value } }))));
});
RichTextField.defaultProps = {
    addLabel: true,
    stripTags: false,
};
RichTextField.propTypes = __assign(__assign(__assign({}, Typography_1.default.propTypes), types_1.fieldPropTypes), { stripTags: prop_types_1.default.bool });
RichTextField.displayName = 'RichTextField';
exports.default = RichTextField;
