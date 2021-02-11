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
var React = __importStar(require("react"));
var css_mediaquery_1 = __importDefault(require("css-mediaquery"));
var styles_1 = require("@material-ui/styles");
var styles_2 = require("@material-ui/core/styles");
/**
 * Test utility to simulate a device form factor for server-side mediaQueries
 *
 * Do not use inside a browser.
 *
 * @example
 *
 * <DeviceTestWrapper width="sm">
 *     <MyResponsiveComponent />
 * <DeviceTestWrapper>
 */
var DeviceTestWrapper = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 'md' : _b, children = _a.children;
    var theme = styles_2.createMuiTheme();
    // Use https://github.com/ericf/css-mediaquery as polyfill.
    var ssrMatchMedia = function (query) { return ({
        matches: css_mediaquery_1.default.match(query, {
            // The estimated CSS width of the browser.
            // For the sake of this demo, we are using a fixed value.
            // In production, you can look into client-hint https://caniuse.com/#search=client%20hint
            // or user-agent resolution.
            width: theme.breakpoints.width(width),
        }),
    }); };
    return (React.createElement(styles_1.ThemeProvider, { theme: __assign(__assign({}, theme), { props: { MuiUseMediaQuery: { ssrMatchMedia: ssrMatchMedia } } }) }, children));
};
exports.default = DeviceTestWrapper;
