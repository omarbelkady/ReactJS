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
exports.BooleanField = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var get_1 = __importDefault(require("lodash/get"));
var classnames_1 = __importDefault(require("classnames"));
var Done_1 = __importDefault(require("@material-ui/icons/Done"));
var Clear_1 = __importDefault(require("@material-ui/icons/Clear"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var ra_core_1 = require("ra-core");
var types_1 = require("./types");
var sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
var useStyles = styles_1.makeStyles({
    root: {
        display: 'flex',
    },
}, {
    name: 'RaBooleanField',
});
exports.BooleanField = react_1.memo(function (props) {
    var className = props.className, classesOverride = props.classes, emptyText = props.emptyText, source = props.source, _a = props.record, record = _a === void 0 ? {} : _a, valueLabelTrue = props.valueLabelTrue, valueLabelFalse = props.valueLabelFalse, TrueIcon = props.TrueIcon, FalseIcon = props.FalseIcon, rest = __rest(props, ["className", "classes", "emptyText", "source", "record", "valueLabelTrue", "valueLabelFalse", "TrueIcon", "FalseIcon"]);
    var translate = ra_core_1.useTranslate();
    var classes = useStyles(props);
    var value = get_1.default(record, source);
    var ariaLabel = value ? valueLabelTrue : valueLabelFalse;
    if (!ariaLabel) {
        ariaLabel =
            value === false ? 'ra.boolean.false' : 'ra.boolean.true';
    }
    if (value === false || value === true) {
        return (React.createElement(core_1.Typography, __assign({ component: "span", variant: "body2", className: classnames_1.default(classes.root, className) }, sanitizeFieldRestProps_1.default(rest)),
            React.createElement(core_1.Tooltip, { title: translate(ariaLabel, { _: ariaLabel }) }, value === true ? (React.createElement("span", null,
                React.createElement(TrueIcon, { "data-testid": "true", fontSize: "small" }))) : (React.createElement("span", null,
                React.createElement(FalseIcon, { "data-testid": "false", fontSize: "small" }))))));
    }
    return (React.createElement(core_1.Typography, __assign({ component: "span", variant: "body2", className: className }, sanitizeFieldRestProps_1.default(rest)), emptyText));
});
exports.BooleanField.defaultProps = {
    addLabel: true,
    TrueIcon: Done_1.default,
    FalseIcon: Clear_1.default,
};
exports.BooleanField.propTypes = __assign(__assign(__assign({}, core_1.Typography.propTypes), types_1.fieldPropTypes), { valueLabelFalse: prop_types_1.default.string, valueLabelTrue: prop_types_1.default.string, TrueIcon: prop_types_1.default.elementType, FalseIcon: prop_types_1.default.elementType });
exports.default = exports.BooleanField;
