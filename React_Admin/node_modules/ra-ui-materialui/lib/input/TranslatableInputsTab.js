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
exports.TranslatableInputsTab = void 0;
var react_1 = __importDefault(require("react"));
var Tab_1 = __importDefault(require("@material-ui/core/Tab"));
var ra_core_1 = require("ra-core");
var styles_1 = require("@material-ui/core/styles");
var inflection_1 = require("inflection");
/**
 * Single tab that selects a locale in a TranslatableInputs component.
 * @see TranslatableInputs
 */
exports.TranslatableInputsTab = function (props) {
    var _a = props.groupKey, groupKey = _a === void 0 ? '' : _a, locale = props.locale, classesOverride = props.classes, rest = __rest(props, ["groupKey", "locale", "classes"]);
    var _b = ra_core_1.useFormGroup("" + groupKey + locale), invalid = _b.invalid, touched = _b.touched;
    var classes = useStyles(props);
    var translate = ra_core_1.useTranslate();
    return (react_1.default.createElement(Tab_1.default, __assign({ id: "translatable-header-" + groupKey + locale, label: translate("ra.locales." + locale, {
            _: inflection_1.capitalize(locale),
        }), className: invalid && touched ? classes.error : undefined }, rest)));
};
var useStyles = styles_1.makeStyles(function (theme) { return ({
    error: { color: theme.palette.error.main },
}); }, { name: 'RaTranslatableInputsTab' });
