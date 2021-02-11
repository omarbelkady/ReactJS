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
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var Add_1 = __importDefault(require("@material-ui/icons/Add"));
var classnames_1 = __importDefault(require("classnames"));
var react_router_dom_1 = require("react-router-dom");
var ra_core_1 = require("ra-core");
var Button_1 = __importStar(require("./Button"));
var CreateButton = function (props) {
    var _a = props.basePath, basePath = _a === void 0 ? '' : _a, className = props.className, classesOverride = props.classes, _b = props.label, label = _b === void 0 ? 'ra.action.create' : _b, _c = props.icon, icon = _c === void 0 ? defaultIcon : _c, variant = props.variant, rest = __rest(props, ["basePath", "className", "classes", "label", "icon", "variant"]);
    var classes = useStyles(props);
    var translate = ra_core_1.useTranslate();
    var isSmall = core_1.useMediaQuery(function (theme) {
        return theme.breakpoints.down('sm');
    });
    return isSmall ? (React.createElement(core_1.Fab, __assign({ component: react_router_dom_1.Link, color: "primary", className: classnames_1.default(classes.floating, className), to: basePath + "/create", "aria-label": label && translate(label) }, Button_1.sanitizeButtonRestProps(rest)), icon)) : (React.createElement(Button_1.default, __assign({ component: react_router_dom_1.Link, to: basePath + "/create", className: className, label: label, variant: variant }, rest), icon));
};
var defaultIcon = React.createElement(Add_1.default, null);
var useStyles = styles_1.makeStyles(function (theme) { return ({
    floating: {
        color: theme.palette.getContrastText(theme.palette.primary.main),
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 60,
        left: 'auto',
        position: 'fixed',
        zIndex: 1000,
    },
    floatingLink: {
        color: 'inherit',
    },
}); }, { name: 'RaCreateButton' });
CreateButton.propTypes = {
    basePath: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    icon: prop_types_1.default.element,
    label: prop_types_1.default.string,
};
exports.default = react_1.memo(CreateButton, function (prevProps, nextProps) {
    return (prevProps.basePath === nextProps.basePath &&
        prevProps.label === nextProps.label &&
        prevProps.translate === nextProps.translate &&
        prevProps.to === nextProps.to);
});
