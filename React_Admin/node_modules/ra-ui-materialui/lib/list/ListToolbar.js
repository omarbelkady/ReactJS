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
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) {
    var _a, _b;
    return ({
        toolbar: (_a = {
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                paddingRight: 0
            },
            _a[theme.breakpoints.up('xs')] = {
                paddingLeft: 0,
            },
            _a[theme.breakpoints.down('xs')] = {
                paddingLeft: theme.spacing(2),
                backgroundColor: theme.palette.background.paper,
            },
            _a),
        actions: (_b = {
                paddingTop: theme.spacing(3),
                minHeight: theme.spacing(5)
            },
            _b[theme.breakpoints.down('xs')] = {
                padding: theme.spacing(1),
                backgroundColor: theme.palette.background.paper,
            },
            _b),
    });
}, { name: 'RaListToolbar' });
var ListToolbar = function (props) {
    var classesOverride = props.classes, filters = props.filters, actions = props.actions, rest = __rest(props, ["classes", "filters", "actions"]);
    var classes = useStyles(props);
    return (React.createElement(core_1.Toolbar, { className: classes.toolbar },
        filters &&
            React.cloneElement(filters, __assign(__assign({}, rest), { context: 'form' })),
        React.createElement("span", null),
        actions &&
            React.cloneElement(actions, __assign(__assign(__assign({}, rest), { className: classes.actions, filters: filters }), actions.props))));
};
ListToolbar.propTypes = {
    classes: prop_types_1.default.object,
    filters: prop_types_1.default.element,
    // @ts-ignore
    actions: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.element]),
    // @ts-ignore
    exporter: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
};
exports.default = React.memo(ListToolbar);
