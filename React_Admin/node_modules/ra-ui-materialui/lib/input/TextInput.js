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
var React = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var ra_core_1 = require("ra-core");
var ResettableTextField_1 = __importDefault(require("./ResettableTextField"));
var InputHelperText_1 = __importDefault(require("./InputHelperText"));
var sanitizeInputRestProps_1 = __importDefault(require("./sanitizeInputRestProps"));
/**
 * An Input component for a string
 *
 * @example
 * <TextInput source="first_name" />
 *
 * You can customize the `type` props (which defaults to "text").
 * Note that, due to a React bug, you should use `<NumberField>` instead of using type="number".
 * @example
 * <TextInput source="email" type="email" />
 * <NumberInput source="nb_views" />
 *
 * The object passed as `options` props is passed to the <ResettableTextField> component
 */
var TextInput = function (_a) {
    var label = _a.label, format = _a.format, helperText = _a.helperText, onBlur = _a.onBlur, onFocus = _a.onFocus, onChange = _a.onChange, options = _a.options, parse = _a.parse, resource = _a.resource, source = _a.source, validate = _a.validate, rest = __rest(_a, ["label", "format", "helperText", "onBlur", "onFocus", "onChange", "options", "parse", "resource", "source", "validate"]);
    var _b = ra_core_1.useInput(__assign({ format: format,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        parse: parse,
        resource: resource,
        source: source, type: 'text', validate: validate }, rest)), id = _b.id, input = _b.input, isRequired = _b.isRequired, _c = _b.meta, error = _c.error, submitError = _c.submitError, touched = _c.touched;
    return (React.createElement(ResettableTextField_1.default, __assign({ id: id }, input, { label: label !== '' &&
            label !== false && (React.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired })), error: !!(touched && (error || submitError)), helperText: React.createElement(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }) }, options, sanitizeInputRestProps_1.default(rest))));
};
TextInput.propTypes = {
    className: prop_types_1.default.string,
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    options: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
};
TextInput.defaultProps = {
    options: {},
};
exports.default = TextInput;
