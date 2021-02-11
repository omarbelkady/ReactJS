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
import { cloneElement, useMemo } from 'react';
import PropTypes from 'prop-types';
import { sanitizeListRestProps, useListContext, useResourceContext, useResourceDefinition, } from 'ra-core';
import TopToolbar from '../layout/TopToolbar';
import { CreateButton, ExportButton } from '../button';
var ListActions = function (props) {
    var className = props.className, exporter = props.exporter, filters = props.filters, rest = __rest(props, ["className", "exporter", "filters"]);
    var _a = useListContext(props), currentSort = _a.currentSort, displayedFilters = _a.displayedFilters, filterValues = _a.filterValues, basePath = _a.basePath, selectedIds = _a.selectedIds, showFilter = _a.showFilter, total = _a.total;
    var resource = useResourceContext(rest);
    var hasCreate = useResourceDefinition(rest).hasCreate;
    return useMemo(function () { return (React.createElement(TopToolbar, __assign({ className: className }, sanitizeListRestProps(rest)),
        filters &&
            cloneElement(filters, {
                resource: resource,
                showFilter: showFilter,
                displayedFilters: displayedFilters,
                filterValues: filterValues,
                context: 'button',
            }),
        hasCreate && React.createElement(CreateButton, { basePath: basePath }),
        exporter !== false && (React.createElement(ExportButton, { disabled: total === 0, resource: resource, sort: currentSort, filterValues: filterValues })))); }, [resource, displayedFilters, filterValues, selectedIds, filters, total] // eslint-disable-line react-hooks/exhaustive-deps
    );
};
ListActions.propTypes = {
    basePath: PropTypes.string,
    className: PropTypes.string,
    currentSort: PropTypes.any,
    displayedFilters: PropTypes.object,
    exporter: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    filters: PropTypes.element,
    filterValues: PropTypes.object,
    hasCreate: PropTypes.bool,
    resource: PropTypes.string,
    onUnselectItems: PropTypes.func.isRequired,
    selectedIds: PropTypes.arrayOf(PropTypes.any),
    showFilter: PropTypes.func,
    total: PropTypes.number,
};
ListActions.defaultProps = {
    selectedIds: [],
    onUnselectItems: function () { return null; },
};
export default ListActions;
