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
exports.sanitizeButtonRestProps = void 0;
var React = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var classnames_1 = __importDefault(require("classnames"));
var ra_core_1 = require("ra-core");
/**
 * A generic Button with side icon. Only the icon is displayed on small screens.
 *
 * The component translates the label. Pass the icon as child.
 * The icon displays on the left side of the button by default. Set alignIcon prop to 'right' to inverse.
 *
 * @example
 *
 * <Button label="Edit" color="secondary" onClick={doEdit}>
 *   <ContentCreate />
 * </Button>
 *
 */
var Button = function (props) {
    var _a;
    var _b = props.alignIcon, alignIcon = _b === void 0 ? 'left' : _b, children = props.children, classesOverride = props.classes, className = props.className, color = props.color, disabled = props.disabled, label = props.label, size = props.size, rest = __rest(props, ["alignIcon", "children", "classes", "className", "color", "disabled", "label", "size"]);
    var translate = ra_core_1.useTranslate();
    var classes = useStyles(props);
    var isXSmall = core_1.useMediaQuery(function (theme) {
        return theme.breakpoints.down('xs');
    });
    var restProps = exports.sanitizeButtonRestProps(rest);
    return isXSmall ? (label && !disabled ? (React.createElement(core_1.Tooltip, { title: translate(label, { _: label }) },
        React.createElement(core_1.IconButton, __assign({ "aria-label": translate(label, { _: label }), className: className, color: color }, restProps), children))) : (React.createElement(core_1.IconButton, __assign({ className: className, color: color, disabled: disabled }, restProps), children))) : (React.createElement(core_1.Button, __assign({ className: classnames_1.default(classes.button, className), color: color, size: size, "aria-label": label ? translate(label, { _: label }) : undefined, disabled: disabled }, restProps),
        alignIcon === 'left' &&
            children &&
            React.cloneElement(children, {
                className: classes[size + "Icon"],
            }),
        label && (React.createElement("span", { className: classnames_1.default((_a = {},
                _a[classes.label] = alignIcon === 'left',
                _a[classes.labelRightIcon] = alignIcon !== 'left',
                _a)) }, translate(label, { _: label }))),
        alignIcon === 'right' &&
            children &&
            React.cloneElement(children, {
                className: classes[size + "Icon"],
            })));
};
var useStyles = styles_1.makeStyles({
    button: {
        display: 'inline-flex',
        alignItems: 'center',
    },
    label: {
        paddingLeft: '0.5em',
    },
    labelRightIcon: {
        paddingRight: '0.5em',
    },
    smallIcon: {
        fontSize: 20,
    },
    mediumIcon: {
        fontSize: 22,
    },
    largeIcon: {
        fontSize: 24,
    },
}, { name: 'RaButton' });
exports.sanitizeButtonRestProps = function (_a) {
    var 
    // The next props are injected by Toolbar
    basePath = _a.basePath, handleSubmit = _a.handleSubmit, handleSubmitWithRedirect = _a.handleSubmitWithRedirect, invalid = _a.invalid, onSave = _a.onSave, pristine = _a.pristine, record = _a.record, redirect = _a.redirect, resource = _a.resource, saving = _a.saving, submitOnEnter = _a.submitOnEnter, undoable = _a.undoable, rest = __rest(_a, ["basePath", "handleSubmit", "handleSubmitWithRedirect", "invalid", "onSave", "pristine", "record", "redirect", "resource", "saving", "submitOnEnter", "undoable"]);
    return rest;
};
Button.propTypes = {
    alignIcon: prop_types_1.default.oneOf(['left', 'right']),
    children: prop_types_1.default.element,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    color: prop_types_1.default.oneOf(['default', 'inherit', 'primary', 'secondary']),
    disabled: prop_types_1.default.bool,
    label: prop_types_1.default.string,
    size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
};
Button.defaultProps = {
    color: 'primary',
    size: 'small',
};
exports.default = Button;
