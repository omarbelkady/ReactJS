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
exports.CreateView = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var ra_core_1 = require("ra-core");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var classnames_1 = __importDefault(require("classnames"));
var layout_1 = require("../layout");
exports.CreateView = function (props) {
    var _a;
    var actions = props.actions, aside = props.aside, children = props.children, classesOverride = props.classes, className = props.className, Content = props.component, title = props.title, rest = __rest(props, ["actions", "aside", "children", "classes", "className", "component", "title"]);
    var classes = useStyles(props);
    var _b = ra_core_1.useCreateContext(props), basePath = _b.basePath, defaultTitle = _b.defaultTitle, hasList = _b.hasList, record = _b.record, redirect = _b.redirect, resource = _b.resource, save = _b.save, saving = _b.saving, version = _b.version;
    return (React.createElement("div", __assign({ className: classnames_1.default('create-page', classes.root, className) }, sanitizeRestProps(rest)),
        React.createElement(layout_1.TitleForRecord, { title: title, record: record, defaultTitle: defaultTitle }),
        actions &&
            react_1.cloneElement(actions, __assign({ basePath: basePath,
                resource: resource,
                hasList: hasList }, actions.props)),
        React.createElement("div", { className: classnames_1.default(classes.main, (_a = {},
                _a[classes.noActions] = !actions,
                _a)) },
            React.createElement(Content, { className: classes.card }, react_1.cloneElement(react_1.Children.only(children), {
                basePath: basePath,
                record: record,
                redirect: typeof children.props.redirect === 'undefined'
                    ? redirect
                    : children.props.redirect,
                resource: resource,
                save: typeof children.props.save === 'undefined'
                    ? save
                    : children.props.save,
                saving: saving,
                version: version,
            })),
            aside &&
                react_1.cloneElement(aside, {
                    basePath: basePath,
                    record: record,
                    resource: resource,
                    save: typeof children.props.save === 'undefined'
                        ? save
                        : children.props.save,
                    saving: saving,
                    version: version,
                }))));
};
exports.CreateView.propTypes = {
    actions: prop_types_1.default.element,
    aside: prop_types_1.default.element,
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    defaultTitle: prop_types_1.default.any,
    hasList: prop_types_1.default.bool,
    hasShow: prop_types_1.default.bool,
    record: prop_types_1.default.object,
    redirect: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    resource: prop_types_1.default.string,
    save: prop_types_1.default.func,
    title: prop_types_1.default.node,
    onSuccess: prop_types_1.default.func,
    onFailure: prop_types_1.default.func,
    setOnSuccess: prop_types_1.default.func,
    setOnFailure: prop_types_1.default.func,
    setTransform: prop_types_1.default.func,
};
exports.CreateView.defaultProps = {
    classes: {},
    component: core_1.Card,
};
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return ({
        root: {},
        main: {
            display: 'flex',
        },
        noActions: (_a = {},
            _a[theme.breakpoints.up('sm')] = {
                marginTop: '1em',
            },
            _a),
        card: {
            flex: '1 1 auto',
        },
    });
}, { name: 'RaCreate' });
var sanitizeRestProps = function (_a) {
    var _b = _a.basePath, basePath = _b === void 0 ? null : _b, _c = _a.defaultTitle, defaultTitle = _c === void 0 ? null : _c, _d = _a.hasCreate, hasCreate = _d === void 0 ? null : _d, _e = _a.hasEdit, hasEdit = _e === void 0 ? null : _e, _f = _a.hasList, hasList = _f === void 0 ? null : _f, _g = _a.hasShow, hasShow = _g === void 0 ? null : _g, _h = _a.history, history = _h === void 0 ? null : _h, _j = _a.loaded, loaded = _j === void 0 ? null : _j, _k = _a.loading, loading = _k === void 0 ? null : _k, _l = _a.location, location = _l === void 0 ? null : _l, _m = _a.match, match = _m === void 0 ? null : _m, _o = _a.onFailure, onFailure = _o === void 0 ? null : _o, _p = _a.onFailureRef, onFailureRef = _p === void 0 ? null : _p, _q = _a.onSuccess, onSuccess = _q === void 0 ? null : _q, _r = _a.onSuccessRef, onSuccessRef = _r === void 0 ? null : _r, _s = _a.options, options = _s === void 0 ? null : _s, _t = _a.permissions, permissions = _t === void 0 ? null : _t, _u = _a.save, save = _u === void 0 ? null : _u, _v = _a.saving, saving = _v === void 0 ? null : _v, _w = _a.setOnFailure, setOnFailure = _w === void 0 ? null : _w, _x = _a.setOnSuccess, setOnSuccess = _x === void 0 ? null : _x, _y = _a.setTransform, setTransform = _y === void 0 ? null : _y, _z = _a.transform, transform = _z === void 0 ? null : _z, _0 = _a.transformRef, transformRef = _0 === void 0 ? null : _0, rest = __rest(_a, ["basePath", "defaultTitle", "hasCreate", "hasEdit", "hasList", "hasShow", "history", "loaded", "loading", "location", "match", "onFailure", "onFailureRef", "onSuccess", "onSuccessRef", "options", "permissions", "save", "saving", "setOnFailure", "setOnSuccess", "setTransform", "transform", "transformRef"]);
    return rest;
};
