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
exports.isRequired = void 0;
var React = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_final_form_1 = require("react-final-form");
var validate_1 = require("./validate");
exports.isRequired = function (validate) {
    if (validate && validate.isRequired) {
        return true;
    }
    if (Array.isArray(validate)) {
        return !!validate.find(function (it) { return it.isRequired; });
    }
    return false;
};
var FormField = function (_a) {
    var id = _a.id, input = _a.input, validate = _a.validate, props = __rest(_a, ["id", "input", "validate"]);
    if (process.env.NODE_ENV !== 'production') {
        console.log('FormField is deprecated, use the useInput hook instead.');
    }
    var sanitizedValidate = Array.isArray(validate)
        ? validate_1.composeValidators(validate)
        : validate;
    var finalId = id || props.source;
    return input ? ( // An ancestor is already decorated by Field
    React.createElement(props.component, __assign({ input: input, id: finalId }, props))) : (React.createElement(react_final_form_1.Field, __assign({}, props, { id: finalId, name: props.source, isRequired: exports.isRequired(validate), validate: sanitizedValidate })));
};
FormField.propTypes = {
    defaultValue: prop_types_1.default.any,
    source: prop_types_1.default.string,
    validate: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.array]),
};
exports.default = FormField;
