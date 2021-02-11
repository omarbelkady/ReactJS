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
exports.NumberField = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var get_1 = __importDefault(require("lodash/get"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
var types_1 = require("./types");
var hasNumberFormat = !!(typeof Intl === 'object' &&
    Intl &&
    typeof Intl.NumberFormat === 'function');
/**
 * Display a numeric value as a locale string.
 *
 * Uses Intl.NumberFormat() if available, passing the locales and options props as arguments.
 * If Intl is not available, it outputs number as is (and ignores the locales and options props).
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
 * @example
 * <NumberField source="score" />
 * // renders the record { id: 1234, score: 567 } as
 * <span>567</span>
 *
 * <NumberField source="score" className="red" />
 * // renders the record { id: 1234, score: 567 } as
 * <span class="red">567</span>
 *
 * <NumberField source="share" options={{ style: 'percent' }} />
 * // renders the record { id: 1234, share: 0.2545 } as
 * <span>25%</span>
 *
 * <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
 * // renders the record { id: 1234, price: 25.99 } as
 * <span>$25.99</span>
 *
 * <NumberField source="price" locales="fr-FR" options={{ style: 'currency', currency: 'USD' }} />
 * // renders the record { id: 1234, price: 25.99 } as
 * <span>25,99 $US</span>
 */
exports.NumberField = react_1.memo(function (_a) {
    var className = _a.className, emptyText = _a.emptyText, record = _a.record, source = _a.source, locales = _a.locales, options = _a.options, textAlign = _a.textAlign, rest = __rest(_a, ["className", "emptyText", "record", "source", "locales", "options", "textAlign"]);
    if (!record) {
        return null;
    }
    var value = get_1.default(record, source);
    if (value == null) {
        return emptyText ? (React.createElement(Typography_1.default, __assign({ component: "span", variant: "body2", className: className }, sanitizeFieldRestProps_1.default(rest)), emptyText)) : null;
    }
    return (React.createElement(Typography_1.default, __assign({ variant: "body2", component: "span", className: className }, sanitizeFieldRestProps_1.default(rest)), hasNumberFormat
        ? value.toLocaleString(locales, options)
        : value));
});
// what? TypeScript looses the displayName if we don't set it explicitly
exports.NumberField.displayName = 'NumberField';
exports.NumberField.defaultProps = {
    addLabel: true,
    textAlign: 'right',
};
exports.NumberField.propTypes = __assign(__assign(__assign({}, Typography_1.default.propTypes), types_1.fieldPropTypes), { locales: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.arrayOf(prop_types_1.default.string),
    ]), options: prop_types_1.default.object });
exports.default = exports.NumberField;
