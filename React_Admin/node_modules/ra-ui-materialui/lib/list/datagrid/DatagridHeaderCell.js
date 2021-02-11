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
exports.DatagridHeaderCell = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var classnames_1 = __importDefault(require("classnames"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var ra_core_1 = require("ra-core");
// remove the sort icons when not active
var useStyles = styles_1.makeStyles({
    icon: {
        display: 'none',
    },
    active: {
        '& $icon': {
            display: 'inline',
        },
    },
}, { name: 'RaDatagridHeaderCell' });
exports.DatagridHeaderCell = function (props) {
    var className = props.className, classesOverride = props.classes, field = props.field, currentSort = props.currentSort, updateSort = props.updateSort, isSorting = props.isSorting, rest = __rest(props, ["className", "classes", "field", "currentSort", "updateSort", "isSorting"]);
    var resource = ra_core_1.useResourceContext(props);
    var classes = useStyles(props);
    var translate = ra_core_1.useTranslate();
    return (React.createElement(core_1.TableCell, __assign({ className: classnames_1.default(className, field.props.headerClassName), align: field.props.textAlign, variant: "head" }, rest), field.props.sortable !== false &&
        (field.props.sortBy || field.props.source) ? (React.createElement(core_1.Tooltip, { title: translate('ra.action.sort'), placement: field.props.textAlign === 'right'
            ? 'bottom-end'
            : 'bottom-start', enterDelay: 300 },
        React.createElement(core_1.TableSortLabel, { active: currentSort.field ===
                (field.props.sortBy || field.props.source), direction: currentSort.order === 'ASC' ? 'asc' : 'desc', "data-sort": field.props.sortBy || field.props.source, "data-field": field.props.sortBy || field.props.source, "data-order": field.props.sortByOrder || 'ASC', onClick: updateSort, classes: classes },
            React.createElement(ra_core_1.FieldTitle, { label: field.props.label, source: field.props.source, resource: resource })))) : (React.createElement(ra_core_1.FieldTitle, { label: field.props.label, source: field.props.source, resource: resource }))));
};
exports.DatagridHeaderCell.propTypes = {
    className: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    field: prop_types_1.default.element,
    currentSort: prop_types_1.default.shape({
        sort: prop_types_1.default.string,
        order: prop_types_1.default.string,
    }).isRequired,
    isSorting: prop_types_1.default.bool,
    resource: prop_types_1.default.string,
    updateSort: prop_types_1.default.func.isRequired,
};
exports.default = react_1.memo(exports.DatagridHeaderCell, function (props, nextProps) {
    return props.updateSort === nextProps.updateSort &&
        props.currentSort.field === nextProps.currentSort.field &&
        props.currentSort.order === nextProps.currentSort.order &&
        props.isSorting === nextProps.isSorting &&
        props.resource === nextProps.resource;
});
