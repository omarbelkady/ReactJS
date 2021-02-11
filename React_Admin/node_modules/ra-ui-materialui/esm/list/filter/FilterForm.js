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
import * as React from 'react';
import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Form, FormSpy } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import lodashSet from 'lodash/set';
import lodashGet from 'lodash/get';
import FilterFormInput from './FilterFormInput';
var useStyles = makeStyles(function (theme) { return ({
    form: {
        marginTop: -theme.spacing(2),
        paddingTop: 0,
        display: 'flex',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        minHeight: theme.spacing(10),
        pointerEvents: 'none',
    },
    clearFix: { clear: 'right' },
}); }, { name: 'RaFilterForm' });
var sanitizeRestProps = function (_a) {
    var active = _a.active, dirty = _a.dirty, dirtyFields = _a.dirtyFields, dirtyFieldsSinceLastSubmit = _a.dirtyFieldsSinceLastSubmit, dirtySinceLastSubmit = _a.dirtySinceLastSubmit, error = _a.error, errors = _a.errors, filterValues = _a.filterValues, form = _a.form, handleSubmit = _a.handleSubmit, hasSubmitErrors = _a.hasSubmitErrors, hasValidationErrors = _a.hasValidationErrors, invalid = _a.invalid, modified = _a.modified, modifiedSinceLastSubmit = _a.modifiedSinceLastSubmit, pristine = _a.pristine, setFilters = _a.setFilters, submitError = _a.submitError, submitErrors = _a.submitErrors, submitFailed = _a.submitFailed, submitSucceeded = _a.submitSucceeded, submitting = _a.submitting, touched = _a.touched, valid = _a.valid, validating = _a.validating, values = _a.values, visited = _a.visited, props = __rest(_a, ["active", "dirty", "dirtyFields", "dirtyFieldsSinceLastSubmit", "dirtySinceLastSubmit", "error", "errors", "filterValues", "form", "handleSubmit", "hasSubmitErrors", "hasValidationErrors", "invalid", "modified", "modifiedSinceLastSubmit", "pristine", "setFilters", "submitError", "submitErrors", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "validating", "values", "visited"]);
    return props;
};
export var FilterForm = function (_a) {
    var _b = _a.classes, classes = _b === void 0 ? {} : _b, className = _a.className, resource = _a.resource, margin = _a.margin, variant = _a.variant, filters = _a.filters, _c = _a.displayedFilters, displayedFilters = _c === void 0 ? {} : _c, hideFilter = _a.hideFilter, initialValues = _a.initialValues, rest = __rest(_a, ["classes", "className", "resource", "margin", "variant", "filters", "displayedFilters", "hideFilter", "initialValues"]);
    useEffect(function () {
        filters.forEach(function (filter) {
            if (filter.props.alwaysOn && filter.props.defaultValue) {
                throw new Error('Cannot use alwaysOn and defaultValue on a filter input. Please set the filterDefaultValues props on the <List> element instead.');
            }
        });
    }, [filters]);
    var getShownFilters = function () {
        return filters.filter(function (filterElement) {
            return filterElement.props.alwaysOn ||
                displayedFilters[filterElement.props.source] ||
                typeof lodashGet(initialValues, filterElement.props.source) !==
                    'undefined';
        });
    };
    var handleHide = useCallback(function (event) { return hideFilter(event.currentTarget.dataset.key); }, [hideFilter]);
    return (React.createElement("form", __assign({ className: classnames(className, classes.form) }, sanitizeRestProps(rest), { onSubmit: handleSubmit }),
        getShownFilters().map(function (filterElement) { return (React.createElement(FilterFormInput, { key: filterElement.props.source, filterElement: filterElement, handleHide: handleHide, resource: resource, variant: filterElement.props.variant || variant, margin: filterElement.props.margin || margin })); }),
        React.createElement("div", { className: classes.clearFix })));
};
var handleSubmit = function (event) {
    event.preventDefault();
    return false;
};
FilterForm.propTypes = {
    resource: PropTypes.string.isRequired,
    filters: PropTypes.arrayOf(PropTypes.node).isRequired,
    displayedFilters: PropTypes.object,
    hideFilter: PropTypes.func.isRequired,
    initialValues: PropTypes.object,
    classes: PropTypes.object,
    className: PropTypes.string,
};
export var mergeInitialValuesWithDefaultValues = function (_a) {
    var initialValues = _a.initialValues, filters = _a.filters;
    return (__assign(__assign({}, filters
        .filter(function (filterElement) {
        return filterElement.props.alwaysOn && filterElement.props.defaultValue;
    })
        .reduce(function (acc, filterElement) {
        return lodashSet(__assign({}, acc), filterElement.props.source, filterElement.props.defaultValue);
    }, {})), initialValues));
};
var EnhancedFilterForm = function (props) {
    var classesOverride = props.classes, rest = __rest(props, ["classes"]);
    var classes = useStyles(props);
    var mergedInitialValuesWithDefaultValues = mergeInitialValuesWithDefaultValues(props);
    var initialValues = rest.initialValues, rest2 = __rest(rest, ["initialValues"]);
    return (React.createElement(Form, { onSubmit: handleFinalFormSubmit, initialValues: mergedInitialValuesWithDefaultValues, mutators: __assign({}, arrayMutators), render: function (formProps) { return (React.createElement(React.Fragment, null,
            React.createElement(FormSpy, { subscription: FormSpySubscription, onChange: function (_a) {
                    var pristine = _a.pristine, values = _a.values;
                    if (pristine) {
                        return;
                    }
                    rest && rest.setFilters(values);
                } }),
            React.createElement(FilterForm, __assign({ classes: classes }, formProps, rest2)))); } }));
};
var handleFinalFormSubmit = function () { };
// Options to instruct the FormSpy that it should only listen to the values and pristine changes
var FormSpySubscription = { values: true, pristine: true };
export default EnhancedFilterForm;
