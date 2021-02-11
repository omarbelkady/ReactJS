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
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.main,
    },
}); }, { name: 'RaLink' });
var Link = function (props) {
    var to = props.to, children = props.children, classesOverride = props.classes, className = props.className, rest = __rest(props, ["to", "children", "classes", "className"]);
    var classes = useStyles(props);
    return (React.createElement(react_router_dom_1.Link, __assign({ to: to, className: classnames_1.default(classes.link, className) }, rest), children));
};
Link.propTypes = {
    className: prop_types_1.default.string,
    children: prop_types_1.default.node,
    to: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
};
exports.default = Link;
