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
import { useState, useCallback, useRef, } from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import ContentFilter from '@material-ui/icons/FilterList';
import classnames from 'classnames';
import lodashGet from 'lodash/get';
import { FilterButtonMenuItem } from './FilterButtonMenuItem';
import Button from '../../button/Button';
var useStyles = makeStyles({
    root: { display: 'inline-block' },
}, { name: 'RaFilterButton' });
var FilterButton = function (props) {
    var filters = props.filters, _a = props.displayedFilters, displayedFilters = _a === void 0 ? {} : _a, filterValues = props.filterValues, showFilter = props.showFilter, classesOverride = props.classes, className = props.className, resource = props.resource, rest = __rest(props, ["filters", "displayedFilters", "filterValues", "showFilter", "classes", "className", "resource"]);
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var anchorEl = useRef();
    var classes = useStyles(props);
    var hiddenFilters = filters.filter(function (filterElement) {
        return !filterElement.props.alwaysOn &&
            !displayedFilters[filterElement.props.source] &&
            typeof lodashGet(filterValues, filterElement.props.source) ===
                'undefined';
    });
    var handleClickButton = useCallback(function (event) {
        // This prevents ghost click.
        event.preventDefault();
        setOpen(true);
        anchorEl.current = event.currentTarget;
    }, [anchorEl, setOpen]);
    var handleRequestClose = useCallback(function () {
        setOpen(false);
    }, [setOpen]);
    var handleShow = useCallback(function (_a) {
        var source = _a.source, defaultValue = _a.defaultValue;
        showFilter(source, defaultValue);
        setOpen(false);
    }, [showFilter, setOpen]);
    if (hiddenFilters.length === 0)
        return null;
    return (React.createElement("div", __assign({ className: classnames(classes.root, className) }, rest),
        React.createElement(Button, { className: "add-filter", label: "ra.action.add_filter", onClick: handleClickButton },
            React.createElement(ContentFilter, null)),
        React.createElement(Menu, { open: open, anchorEl: anchorEl.current, onClose: handleRequestClose }, hiddenFilters.map(function (filterElement) { return (React.createElement(FilterButtonMenuItem, { key: filterElement.props.source, filter: filterElement, resource: resource, onShow: handleShow })); }))));
};
FilterButton.propTypes = {
    resource: PropTypes.string.isRequired,
    filters: PropTypes.arrayOf(PropTypes.node).isRequired,
    displayedFilters: PropTypes.object,
    filterValues: PropTypes.object.isRequired,
    showFilter: PropTypes.func.isRequired,
    classes: PropTypes.object,
    className: PropTypes.string,
};
export default FilterButton;
