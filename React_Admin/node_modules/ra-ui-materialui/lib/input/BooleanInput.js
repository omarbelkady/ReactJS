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
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var FormControlLabel_1 = __importDefault(require("@material-ui/core/FormControlLabel"));
var FormHelperText_1 = __importDefault(require("@material-ui/core/FormHelperText"));
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
var Switch_1 = __importDefault(require("@material-ui/core/Switch"));
var ra_core_1 = require("ra-core");
var sanitizeInputRestProps_1 = __importDefault(require("./sanitizeInputRestProps"));
var InputHelperText_1 = __importDefault(require("./InputHelperText"));
var InputPropTypes_1 = __importDefault(require("./InputPropTypes"));
var BooleanInput = function (_a) {
    var format = _a.format, label = _a.label, fullWidth = _a.fullWidth, helperText = _a.helperText, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, options = _a.options, disabled = _a.disabled, parse = _a.parse, resource = _a.resource, source = _a.source, validate = _a.validate, rest = __rest(_a, ["format", "label", "fullWidth", "helperText", "onBlur", "onChange", "onFocus", "options", "disabled", "parse", "resource", "source", "validate"]);
    var _b = ra_core_1.useInput(__assign({ format: format,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        parse: parse,
        resource: resource,
        source: source, type: 'checkbox', validate: validate }, rest)), id = _b.id, _c = _b.input, finalFormOnChange = _c.onChange, type = _c.type, value = _c.value, inputProps = __rest(_c, ["onChange", "type", "value"]), isRequired = _b.isRequired, _d = _b.meta, error = _d.error, submitError = _d.submitError, touched = _d.touched;
    var handleChange = react_1.useCallback(function (event, value) {
        finalFormOnChange(value);
    }, [finalFormOnChange]);
    return (React.createElement(FormGroup_1.default, __assign({}, sanitizeInputRestProps_1.default(rest)),
        React.createElement(FormControlLabel_1.default, { control: React.createElement(Switch_1.default, __assign({ id: id, color: "primary", onChange: handleChange }, inputProps, options, { disabled: disabled })), label: React.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }) }),
        React.createElement(FormHelperText_1.default, { error: !!(error || submitError) },
            React.createElement(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }))));
};
BooleanInput.propTypes = __assign(__assign({}, InputPropTypes_1.default), { 
    // @ts-ignore
    options: prop_types_1.default.shape(Switch_1.default.propTypes), disabled: prop_types_1.default.bool });
BooleanInput.defaultProps = {
    options: {},
};
exports.default = BooleanInput;
