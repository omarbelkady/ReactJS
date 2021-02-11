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
var InputLabel_1 = __importDefault(require("@material-ui/core/InputLabel"));
var FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
var styles_1 = require("@material-ui/core/styles");
var ra_core_1 = require("ra-core");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    label: {
        position: 'relative',
    },
    value: {
        fontFamily: theme.typography.fontFamily,
        color: 'currentColor',
        padding: theme.spacing(1) + "px 0 " + theme.spacing(1) / 2 + "px",
        border: 0,
        boxSizing: 'content-box',
        verticalAlign: 'middle',
        background: 'none',
        margin: 0,
        display: 'block',
        width: '100%',
    },
}); }, { name: 'RaLabeled' });
/**
 * Use any component as read-only Input, labeled just like other Inputs.
 *
 * Useful to use a Field in the Edit or Create components.
 * The child component will receive the current record.
 *
 * This component name doesn't have a typo. We had to choose between
 * the American English "Labeled", and the British English "Labelled".
 * We flipped a coin.
 *
 * @example
 * <Labeled label="Comments">
 *     <FooComponent source="title" />
 * </Labeled>
 */
var Labeled = function (props) {
    var children = props.children, className = props.className, classesOverride = props.classes, fullWidth = props.fullWidth, id = props.id, input = props.input, isRequired = props.isRequired, label = props.label, _a = props.margin, margin = _a === void 0 ? 'dense' : _a, meta = props.meta, resource = props.resource, source = props.source, rest = __rest(props, ["children", "className", "classes", "fullWidth", "id", "input", "isRequired", "label", "margin", "meta", "resource", "source"]);
    var classes = useStyles(props);
    if (!label && !source) {
        // @ts-ignore
        var name_1 = children && children.type && children.type.name;
        throw new Error("Cannot create label for component <" + name_1 + ">: You must set either the label or source props. You can also disable automated label insertion by setting 'addLabel: false' in the component default props");
    }
    var restProps = fullWidth ? __assign(__assign({}, rest), { fullWidth: fullWidth }) : rest;
    return (React.createElement(FormControl_1.default, { className: className, fullWidth: fullWidth, error: meta && meta.touched && !!(meta.error || meta.submitError), margin: margin },
        React.createElement(InputLabel_1.default, { htmlFor: id, shrink: true, className: classes.label },
            React.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired })),
        React.createElement("div", { className: classes.value }, children && typeof children.type !== 'string'
            ? React.cloneElement(children, __assign({ input: input,
                resource: resource }, restProps))
            : children)));
};
Labeled.propTypes = {
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element,
    className: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    fullWidth: prop_types_1.default.bool,
    id: prop_types_1.default.string,
    input: prop_types_1.default.object,
    isRequired: prop_types_1.default.bool,
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.element]),
    meta: prop_types_1.default.object,
    onChange: prop_types_1.default.func,
    record: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
    labelStyle: prop_types_1.default.object,
};
exports.default = Labeled;
