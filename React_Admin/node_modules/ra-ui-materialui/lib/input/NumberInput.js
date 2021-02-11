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
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var ra_core_1 = require("ra-core");
var InputHelperText_1 = __importDefault(require("./InputHelperText"));
var sanitizeInputRestProps_1 = __importDefault(require("./sanitizeInputRestProps"));
var convertStringToNumber = function (value) {
    var float = parseFloat(value);
    return isNaN(float) ? null : float;
};
/**
 * An Input component for a number
 *
 * @example
 * <NumberInput source="nb_views" />
 *
 * You can customize the `step` props (which defaults to "any")
 * @example
 * <NumberInput source="nb_views" step={1} />
 *
 * The object passed as `options` props is passed to the material-ui <TextField> component
 */
var NumberInput = function (_a) {
    var format = _a.format, helperText = _a.helperText, label = _a.label, _b = _a.margin, margin = _b === void 0 ? 'dense' : _b, onBlur = _a.onBlur, onFocus = _a.onFocus, onChange = _a.onChange, options = _a.options, _c = _a.parse, parse = _c === void 0 ? convertStringToNumber : _c, resource = _a.resource, source = _a.source, step = _a.step, min = _a.min, max = _a.max, validate = _a.validate, _d = _a.variant, variant = _d === void 0 ? 'filled' : _d, overrideInputProps = _a.inputProps, rest = __rest(_a, ["format", "helperText", "label", "margin", "onBlur", "onFocus", "onChange", "options", "parse", "resource", "source", "step", "min", "max", "validate", "variant", "inputProps"]);
    var _e = ra_core_1.useInput(__assign({ format: format,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        parse: parse,
        resource: resource,
        source: source, type: 'number', validate: validate }, rest)), id = _e.id, input = _e.input, isRequired = _e.isRequired, _f = _e.meta, error = _f.error, submitError = _f.submitError, touched = _f.touched;
    var inputProps = __assign(__assign({}, overrideInputProps), { step: step, min: min, max: max });
    return (React.createElement(TextField_1.default, __assign({ id: id }, input, { variant: variant, error: !!(touched && (error || submitError)), helperText: React.createElement(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }), label: React.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }), margin: margin, inputProps: inputProps }, options, sanitizeInputRestProps_1.default(rest))));
};
NumberInput.propTypes = {
    label: prop_types_1.default.string,
    options: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
    step: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
};
NumberInput.defaultProps = {
    options: {},
    step: 'any',
    textAlign: 'right',
};
exports.default = NumberInput;
