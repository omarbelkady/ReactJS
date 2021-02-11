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
var react_redux_1 = require("react-redux");
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Refresh_1 = __importDefault(require("@material-ui/icons/Refresh"));
var ra_core_1 = require("ra-core");
var RefreshIconButton = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'ra.action.refresh' : _b, _c = _a.icon, icon = _c === void 0 ? defaultIcon : _c, onClick = _a.onClick, className = _a.className, rest = __rest(_a, ["label", "icon", "onClick", "className"]);
    var dispatch = react_redux_1.useDispatch();
    var translate = ra_core_1.useTranslate();
    var handleClick = react_1.useCallback(function (event) {
        event.preventDefault();
        dispatch(ra_core_1.refreshView());
        if (typeof onClick === 'function') {
            onClick(event);
        }
    }, [dispatch, onClick]);
    return (React.createElement(Tooltip_1.default, { title: label && translate(label, { _: label }) },
        React.createElement(IconButton_1.default, __assign({ "aria-label": label && translate(label, { _: label }), className: className, color: "inherit", onClick: handleClick }, rest), icon)));
};
var defaultIcon = React.createElement(Refresh_1.default, null);
RefreshIconButton.propTypes = {
    className: prop_types_1.default.string,
    label: prop_types_1.default.string,
    icon: prop_types_1.default.element,
};
exports.default = RefreshIconButton;
