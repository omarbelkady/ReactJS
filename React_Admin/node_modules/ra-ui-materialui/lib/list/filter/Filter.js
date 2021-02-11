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
var styles_1 = require("@material-ui/core/styles");
var ra_core_1 = require("ra-core");
var FilterForm_1 = __importDefault(require("./FilterForm"));
var FilterButton_1 = __importDefault(require("./FilterButton"));
var useStyles = styles_1.makeStyles({
    button: {},
    form: {},
}, { name: 'RaFilter' });
var Filter = function (props) {
    var classes = useStyles(props);
    var _a = ra_core_1.useListContext(props), resource = _a.resource, showFilter = _a.showFilter, hideFilter = _a.hideFilter, setFilters = _a.setFilters, displayedFilters = _a.displayedFilters, filterValues = _a.filterValues;
    var renderButton = function () {
        var classesOverride = props.classes, context = props.context, children = props.children, variant = props.variant, rest = __rest(props, ["classes", "context", "children", "variant"]);
        return (React.createElement(FilterButton_1.default, __assign({ className: classes.button, resource: resource, filters: React.Children.toArray(children), showFilter: showFilter, displayedFilters: displayedFilters, filterValues: filterValues }, ra_core_1.sanitizeListRestProps(rest))));
    };
    var renderForm = function () {
        var classesOverride = props.classes, context = props.context, children = props.children, rest = __rest(props, ["classes", "context", "children"]);
        return (React.createElement(FilterForm_1.default, __assign({ className: classes.form, resource: resource, filters: React.Children.toArray(children), hideFilter: hideFilter, displayedFilters: displayedFilters, initialValues: filterValues, setFilters: setFilters }, ra_core_1.sanitizeListRestProps(rest))));
    };
    return props.context === 'button' ? renderButton() : renderForm();
};
Filter.propTypes = {
    children: prop_types_1.default.node,
    classes: prop_types_1.default.object,
    context: prop_types_1.default.oneOf(['form', 'button']),
};
exports.default = Filter;
