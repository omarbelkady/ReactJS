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
var react_final_form_1 = require("react-final-form");
var FormControlLabel_1 = __importDefault(require("@material-ui/core/FormControlLabel"));
var Radio_1 = __importDefault(require("@material-ui/core/Radio"));
var ra_core_1 = require("ra-core");
var RadioButtonGroupInputItem = function (_a) {
    var choice = _a.choice, optionText = _a.optionText, optionValue = _a.optionValue, source = _a.source, translateChoice = _a.translateChoice, onChange = _a.onChange;
    var _b = ra_core_1.useChoices({
        optionText: optionText,
        optionValue: optionValue,
        translateChoice: translateChoice,
    }), getChoiceText = _b.getChoiceText, getChoiceValue = _b.getChoiceValue;
    var label = getChoiceText(choice);
    var value = getChoiceValue(choice);
    var _c = react_final_form_1.useField(source, {
        type: 'radio',
        value: value,
    }).input, type = _c.type, inputProps = __rest(_c, ["type"]);
    var nodeId = source + "_" + value;
    return (React.createElement(FormControlLabel_1.default, { label: label, htmlFor: nodeId, control: React.createElement(Radio_1.default, __assign({ id: nodeId, color: "primary" }, inputProps, { onChange: function (_, isActive) { return isActive && onChange(value); } })) }));
};
exports.default = RadioButtonGroupInputItem;
