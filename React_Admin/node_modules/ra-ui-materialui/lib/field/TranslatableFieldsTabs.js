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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslatableFieldsTabs = void 0;
var React = __importStar(require("react"));
var AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
var styles_1 = require("@material-ui/core/styles");
var Tabs_1 = __importDefault(require("@material-ui/core/Tabs"));
var ra_core_1 = require("ra-core");
var TranslatableFieldsTab_1 = require("./TranslatableFieldsTab");
/**
 * Default locale selector for the TranslatableFields component. Generates a tab for each specified locale.
 * @see TranslatableFields
 */
exports.TranslatableFieldsTabs = function (props) {
    var groupKey = props.groupKey, tabsProps = props.TabsProps;
    var _a = ra_core_1.useTranslatableContext(), locales = _a.locales, selectLocale = _a.selectLocale, selectedLocale = _a.selectedLocale;
    var classes = useStyles(props);
    var handleChange = function (event, newLocale) {
        selectLocale(newLocale);
    };
    return (React.createElement(AppBar_1.default, { color: "default", position: "static", className: classes.root },
        React.createElement(Tabs_1.default, __assign({ value: selectedLocale, onChange: handleChange, indicatorColor: "primary", textColor: "primary" }, tabsProps), locales.map(function (locale) { return (React.createElement(TranslatableFieldsTab_1.TranslatableFieldsTab, { key: locale, value: locale, locale: locale, groupKey: groupKey })); }))));
};
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        boxShadow: 'none',
        borderRadius: 0,
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
        border: "1px solid " + theme.palette.divider,
    },
}); }, { name: 'RaTranslatableFieldsTabs' });
