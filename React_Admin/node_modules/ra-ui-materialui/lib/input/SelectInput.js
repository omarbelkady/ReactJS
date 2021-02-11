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
var get_1 = __importDefault(require("lodash/get"));
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var styles_1 = require("@material-ui/core/styles");
var ra_core_1 = require("ra-core");
var ResettableTextField_1 = __importDefault(require("./ResettableTextField"));
var InputHelperText_1 = __importDefault(require("./InputHelperText"));
var sanitizeInputRestProps_1 = __importDefault(require("./sanitizeInputRestProps"));
var Labeled_1 = __importDefault(require("./Labeled"));
var layout_1 = require("../layout");
var sanitizeRestProps = function (_a) {
    var addLabel = _a.addLabel, afterSubmit = _a.afterSubmit, allowNull = _a.allowNull, beforeSubmit = _a.beforeSubmit, choices = _a.choices, className = _a.className, crudGetMatching = _a.crudGetMatching, crudGetOne = _a.crudGetOne, data = _a.data, filter = _a.filter, filterToQuery = _a.filterToQuery, formatOnBlur = _a.formatOnBlur, isEqual = _a.isEqual, limitChoicesToValue = _a.limitChoicesToValue, multiple = _a.multiple, name = _a.name, pagination = _a.pagination, perPage = _a.perPage, ref = _a.ref, reference = _a.reference, render = _a.render, setFilter = _a.setFilter, setPagination = _a.setPagination, setSort = _a.setSort, sort = _a.sort, subscription = _a.subscription, type = _a.type, validateFields = _a.validateFields, validation = _a.validation, value = _a.value, rest = __rest(_a, ["addLabel", "afterSubmit", "allowNull", "beforeSubmit", "choices", "className", "crudGetMatching", "crudGetOne", "data", "filter", "filterToQuery", "formatOnBlur", "isEqual", "limitChoicesToValue", "multiple", "name", "pagination", "perPage", "ref", "reference", "render", "setFilter", "setPagination", "setSort", "sort", "subscription", "type", "validateFields", "validation", "value"]);
    return sanitizeInputRestProps_1.default(rest);
};
var useStyles = styles_1.makeStyles(function (theme) { return ({
    input: {
        minWidth: theme.spacing(20),
    },
}); }, { name: 'RaSelectInput' });
/**
 * An Input component for a select box, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property as the option text
 * @example
 * const choices = [
 *    { id: 'M', name: 'Male' },
 *    { id: 'F', name: 'Female' },
 * ];
 * <SelectInput source="gender" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <SelectInput source="author_id" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <SelectInput source="author_id" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that will be cloned and receive
 * the related choice as the `record` prop. You can use Field components there.
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const FullNameField = ({ record }) => <span>{record.first_name} {record.last_name}</span>;
 * <SelectInput source="gender" choices={choices} optionText={<FullNameField />}/>
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'M', name: 'myroot.gender.male' },
 *    { id: 'F', name: 'myroot.gender.female' },
 * ];
 *
 * However, in some cases (e.g. inside a `<ReferenceInput>`), you may not want
 * the choice to be translated. In that case, set the `translateChoice` prop to false.
 * @example
 * <SelectInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the material-ui <Select> component
 *
 * You can disable some choices by providing a `disableValue` field which name is `disabled` by default
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 *    { id: 976, first_name: 'William', last_name: 'Rinkerd', disabled: true },
 * ];
 *
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 *    { id: 976, first_name: 'William', last_name: 'Rinkerd', not_available: true },
 * ];
 * <SelectInput source="gender" choices={choices} disableValue="not_available" />
 *
 */
var SelectInput = function (props) {
    var allowEmpty = props.allowEmpty, _a = props.choices, choices = _a === void 0 ? [] : _a, classesOverride = props.classes, className = props.className, disableValue = props.disableValue, emptyText = props.emptyText, emptyValue = props.emptyValue, format = props.format, helperText = props.helperText, label = props.label, loaded = props.loaded, loading = props.loading, onBlur = props.onBlur, onChange = props.onChange, onFocus = props.onFocus, options = props.options, optionText = props.optionText, optionValue = props.optionValue, parse = props.parse, resource = props.resource, source = props.source, translateChoice = props.translateChoice, validate = props.validate, rest = __rest(props, ["allowEmpty", "choices", "classes", "className", "disableValue", "emptyText", "emptyValue", "format", "helperText", "label", "loaded", "loading", "onBlur", "onChange", "onFocus", "options", "optionText", "optionValue", "parse", "resource", "source", "translateChoice", "validate"]);
    var translate = ra_core_1.useTranslate();
    var classes = useStyles(props);
    ra_core_1.warning(source === undefined, "If you're not wrapping the SelectInput inside a ReferenceInput, you must provide the source prop");
    ra_core_1.warning(choices === undefined, "If you're not wrapping the SelectInput inside a ReferenceInput, you must provide the choices prop");
    var _b = ra_core_1.useChoices({
        optionText: optionText,
        optionValue: optionValue,
        translateChoice: translateChoice,
    }), getChoiceText = _b.getChoiceText, getChoiceValue = _b.getChoiceValue;
    var _c = ra_core_1.useInput(__assign({ format: format,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        parse: parse,
        resource: resource,
        source: source,
        validate: validate }, rest)), id = _c.id, input = _c.input, isRequired = _c.isRequired, meta = _c.meta;
    var touched = meta.touched, error = meta.error, submitError = meta.submitError;
    var renderEmptyItemOption = react_1.useCallback(function () {
        return React.isValidElement(emptyText)
            ? React.cloneElement(emptyText)
            : emptyText === ''
                ? ' ' // em space, forces the display of an empty line of normal height
                : translate(emptyText, { _: emptyText });
    }, [emptyText, translate]);
    var renderMenuItemOption = react_1.useCallback(function (choice) { return getChoiceText(choice); }, [
        getChoiceText,
    ]);
    if (loading) {
        return (React.createElement(Labeled_1.default, { id: id, label: label, source: source, resource: resource, className: className, isRequired: isRequired, meta: meta, input: input },
            React.createElement(layout_1.LinearProgress, null)));
    }
    return (React.createElement(ResettableTextField_1.default, __assign({ id: id }, input, { select: true, label: label !== '' &&
            label !== false && (React.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired })), className: classes.input + " " + className, clearAlwaysVisible: true, error: !!(touched && (error || submitError)), helperText: React.createElement(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }) }, options, sanitizeRestProps(rest)),
        allowEmpty ? (React.createElement(MenuItem_1.default, { value: emptyValue, key: "null", "aria-label": translate('ra.action.clear_input_value'), title: translate('ra.action.clear_input_value') }, renderEmptyItemOption())) : null,
        choices.map(function (choice) { return (React.createElement(MenuItem_1.default, { key: getChoiceValue(choice), value: getChoiceValue(choice), disabled: get_1.default(choice, disableValue) }, renderMenuItemOption(choice))); })));
};
SelectInput.propTypes = {
    allowEmpty: prop_types_1.default.bool,
    emptyText: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.element]),
    emptyValue: prop_types_1.default.any,
    choices: prop_types_1.default.arrayOf(prop_types_1.default.object),
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    options: prop_types_1.default.object,
    optionText: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.func,
        prop_types_1.default.element,
    ]).isRequired,
    optionValue: prop_types_1.default.string.isRequired,
    disableValue: prop_types_1.default.string,
    resettable: prop_types_1.default.bool,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
    translateChoice: prop_types_1.default.bool,
};
SelectInput.defaultProps = {
    emptyText: '',
    emptyValue: '',
    options: {},
    optionText: 'name',
    optionValue: 'id',
    translateChoice: true,
    disableValue: 'disabled',
};
exports.default = SelectInput;
