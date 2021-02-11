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
exports.DateField = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var get_1 = __importDefault(require("lodash/get"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
var types_1 = require("./types");
var toLocaleStringSupportsLocales = (function () {
    // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
    try {
        new Date().toLocaleString('i');
    }
    catch (error) {
        return error instanceof RangeError;
    }
    return false;
})();
/**
 * Display a date value as a locale string.
 *
 * Uses Intl.DateTimeFormat() if available, passing the locales and options props as arguments.
 * If Intl is not available, it outputs date as is (and ignores the locales and options props).
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
 * @example
 * <DateField source="published_at" />
 * // renders the record { id: 1234, published_at: new Date('2012-11-07') } as
 * <span>07/11/2012</span>
 *
 * <DateField source="published_at" className="red" />
 * // renders the record { id: 1234, new Date('2012-11-07') } as
 * <span class="red">07/11/2012</span>
 *
 * <DateField source="share" options={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }} />
 * // renders the record { id: 1234, new Date('2012-11-07') } as
 * <span>Wednesday, November 7, 2012</span>
 *
 * <DateField source="price" locales="fr-FR" options={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }} />
 * // renders the record { id: 1234, new Date('2012-11-07') } as
 * <span>mercredi 7 novembre 2012</span>
 */
exports.DateField = react_1.memo(function (_a) {
    var className = _a.className, emptyText = _a.emptyText, locales = _a.locales, options = _a.options, record = _a.record, _b = _a.showTime, showTime = _b === void 0 ? false : _b, source = _a.source, rest = __rest(_a, ["className", "emptyText", "locales", "options", "record", "showTime", "source"]);
    if (!record) {
        return null;
    }
    var value = get_1.default(record, source);
    if (value == null) {
        return emptyText ? (React.createElement(Typography_1.default, __assign({ component: "span", variant: "body2", className: className }, sanitizeFieldRestProps_1.default(rest)), emptyText)) : null;
    }
    var date = value instanceof Date ? value : new Date(value);
    var dateString = showTime
        ? toLocaleStringSupportsLocales
            ? date.toLocaleString(locales, options)
            : date.toLocaleString()
        : toLocaleStringSupportsLocales
            ? date.toLocaleDateString(locales, options)
            : date.toLocaleDateString();
    return (React.createElement(Typography_1.default, __assign({ component: "span", variant: "body2", className: className }, sanitizeFieldRestProps_1.default(rest)), dateString));
});
exports.DateField.defaultProps = {
    addLabel: true,
};
exports.DateField.propTypes = __assign(__assign(__assign({}, Typography_1.default.propTypes), types_1.fieldPropTypes), { locales: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.arrayOf(prop_types_1.default.string),
    ]), options: prop_types_1.default.object, showTime: prop_types_1.default.bool });
exports.default = exports.DateField;
