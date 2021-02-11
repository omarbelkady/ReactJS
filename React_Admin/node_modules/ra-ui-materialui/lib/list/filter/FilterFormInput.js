"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var HighlightOff_1 = __importDefault(require("@material-ui/icons/HighlightOff"));
var styles_1 = require("@material-ui/core/styles");
var classnames_1 = __importDefault(require("classnames"));
var ra_core_1 = require("ra-core");
var emptyRecord = {};
var useStyles = styles_1.makeStyles(function (theme) { return ({
    body: {
        display: 'flex',
        alignItems: 'flex-end',
        pointerEvents: 'auto',
    },
    spacer: { width: theme.spacing(2) },
    hideButton: {},
}); }, { name: 'RaFilterFormInput' });
var FilterFormInput = function (props) {
    var filterElement = props.filterElement, handleHide = props.handleHide, variant = props.variant, margin = props.margin;
    var resource = ra_core_1.useResourceContext(props);
    var translate = ra_core_1.useTranslate();
    var classes = useStyles(props);
    return (React.createElement("div", { "data-source": filterElement.props.source, className: classnames_1.default('filter-field', classes.body) },
        !filterElement.props.alwaysOn && (React.createElement(IconButton_1.default, { className: classnames_1.default('hide-filter', classes.hideButton), onClick: handleHide, "data-key": filterElement.props.source, title: translate('ra.action.remove_filter') },
            React.createElement(HighlightOff_1.default, null))),
        React.cloneElement(filterElement, {
            allowEmpty: filterElement.props.allowEmpty === undefined
                ? true
                : filterElement.props.allowEmpty,
            resource: resource,
            record: emptyRecord,
            variant: variant,
            margin: margin,
            helperText: false,
            // ignore defaultValue in Field because it was already set in Form (via mergedInitialValuesWithDefaultValues)
            defaultValue: undefined,
        }),
        React.createElement("div", { className: classes.spacer }, "\u00A0")));
};
FilterFormInput.propTypes = {
    filterElement: prop_types_1.default.node,
    handleHide: prop_types_1.default.func,
    classes: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    margin: prop_types_1.default.string,
    variant: prop_types_1.default.string,
};
exports.default = FilterFormInput;
