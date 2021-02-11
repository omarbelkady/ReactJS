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
exports.CloneButton = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var Queue_1 = __importDefault(require("@material-ui/icons/Queue"));
var react_router_dom_1 = require("react-router-dom");
var query_string_1 = require("query-string");
var Button_1 = __importDefault(require("./Button"));
exports.CloneButton = function (_a) {
    var _b = _a.basePath, basePath = _b === void 0 ? '' : _b, _c = _a.label, label = _c === void 0 ? 'ra.action.clone' : _c, record = _a.record, _d = _a.icon, icon = _d === void 0 ? defaultIcon : _d, rest = __rest(_a, ["basePath", "label", "record", "icon"]);
    return (React.createElement(Button_1.default, __assign({ component: react_router_dom_1.Link, to: record
            ? {
                pathname: basePath + "/create",
                search: query_string_1.stringify({
                    source: JSON.stringify(omitId(record)),
                }),
            }
            : basePath + "/create", label: label, onClick: stopPropagation }, rest), icon));
};
var defaultIcon = React.createElement(Queue_1.default, null);
// useful to prevent click bubbling in a datagrid with rowClick
var stopPropagation = function (e) { return e.stopPropagation(); };
var omitId = function (_a) {
    var id = _a.id, rest = __rest(_a, ["id"]);
    return rest;
};
exports.CloneButton.propTypes = {
    basePath: prop_types_1.default.string,
    icon: prop_types_1.default.element,
    label: prop_types_1.default.string,
    record: prop_types_1.default.any,
};
exports.default = react_1.memo(exports.CloneButton);
