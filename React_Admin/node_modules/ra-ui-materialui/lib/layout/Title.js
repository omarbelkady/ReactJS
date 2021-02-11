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
exports.TitlePropType = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var prop_types_1 = __importDefault(require("prop-types"));
var ra_core_1 = require("ra-core");
var Title = function (_a) {
    var className = _a.className, defaultTitle = _a.defaultTitle, record = _a.record, title = _a.title, rest = __rest(_a, ["className", "defaultTitle", "record", "title"]);
    var translate = ra_core_1.useTranslate();
    var container = typeof document !== 'undefined'
        ? document.getElementById('react-admin-title')
        : null;
    if (!container)
        return null;
    ra_core_1.warning(!defaultTitle && !title, 'Missing title prop in <Title> element');
    var titleElement = !title ? (React.createElement("span", __assign({ className: className }, rest), defaultTitle)) : typeof title === 'string' ? (React.createElement("span", __assign({ className: className }, rest), translate(title, { _: title }))) : (react_1.cloneElement(title, __assign({ className: className, record: record }, rest)));
    return react_dom_1.createPortal(titleElement, container);
};
exports.TitlePropType = prop_types_1.default.oneOfType([
    prop_types_1.default.string,
    prop_types_1.default.element,
]);
Title.propTypes = {
    defaultTitle: prop_types_1.default.string,
    className: prop_types_1.default.string,
    record: prop_types_1.default.any,
    title: exports.TitlePropType,
};
exports.default = Title;
