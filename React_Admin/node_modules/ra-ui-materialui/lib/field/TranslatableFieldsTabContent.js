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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslatableFieldsTabContent = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var ra_core_1 = require("ra-core");
var styles_1 = require("@material-ui/core/styles");
var input_1 = require("../input");
/**
 * Default container for a group of translatable fields inside a TranslatableFields components.
 * @see TranslatableFields
 */
exports.TranslatableFieldsTabContent = function (props) {
    var basePath = props.basePath, children = props.children, _a = props.groupKey, groupKey = _a === void 0 ? '' : _a, locale = props.locale, record = props.record, resource = props.resource, other = __rest(props, ["basePath", "children", "groupKey", "locale", "record", "resource"]);
    var _b = ra_core_1.useTranslatableContext(), selectedLocale = _b.selectedLocale, getLabel = _b.getLabel, getSource = _b.getSource;
    var classes = useStyles(props);
    return (React.createElement("div", __assign({ role: "tabpanel", hidden: selectedLocale !== locale, id: "translatable-content-" + groupKey + locale, "aria-labelledby": "translatable-header-" + groupKey + locale, className: classes.root }, other), react_1.Children.map(children, function (field) {
        return field && react_1.isValidElement(field) ? (React.createElement("div", { key: field.props.source }, field.props.addLabel ? (React.createElement(input_1.Labeled, { record: record, resource: resource, basePath: basePath, label: field.props.label, source: field.props.source, disabled: false }, react_1.cloneElement(field, __assign(__assign({}, field.props), { label: getLabel(field.props.source), source: getSource(field.props.source, locale) })))) : typeof field === 'string' ? (field) : (react_1.cloneElement(field, __assign(__assign({}, field.props), { label: getLabel(field.props.source), source: getSource(field.props.source, locale) }))))) : null;
    })));
};
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        borderRadius: 0,
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        border: "1px solid " + theme.palette.divider,
        borderTop: 0,
    },
}); }, { name: 'RaTranslatableFieldsTabContent' });
