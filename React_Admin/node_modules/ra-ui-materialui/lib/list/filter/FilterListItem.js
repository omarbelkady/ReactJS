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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var CancelOutlined_1 = __importDefault(require("@material-ui/icons/CancelOutlined"));
var ra_core_1 = require("ra-core");
var react_redux_1 = require("react-redux");
var matches_1 = __importDefault(require("lodash/matches"));
var pickBy_1 = __importDefault(require("lodash/pickBy"));
var useStyles = styles_1.makeStyles(function (theme) { return ({
    listItem: {
        paddingLeft: '2em',
    },
    listItemText: {
        margin: 0,
    },
}); });
/**
 * Button to enable/disable a list filter.
 *
 * Expects 2 props:
 *
 * - label: The text to be displayed for this item. Will be translated.
 * - value: An object to be merged into the filter value when enabling the filter
 * (e.g. { is_published: true, published_at_gte: '2020-07-08' })
 *
 * @example
 *
 * import * as React from 'react';
 * import { Card, CardContent } from '@material-ui/core';
 * import MailIcon from '@material-ui/icons/MailOutline';
 * import { FilterList, FilterListItem } from 'react-admin';
 *
 * const FilterSidebar = () => (
 *     <Card>
 *         <CardContent>
 *             <FilterList
 *                 label="Subscribed to newsletter"
 *                 icon={<MailIcon />}
 *             >
 *                 <FilterListItem
 *                     label="Yes"
 *                     value={{ has_newsletter: true }}
 *                  />
 *                 <FilterListItem
 *                     label="No"
 *                     value={{ has_newsletter: false }}
 *                  />
 *             </FilterList>
 *         </CardContent>
 *     </Card>
 * );
 *
 * @example // The value prop can contain multiple keys
 *
 * import * as React from 'react';
 * import {
 *     endOfYesterday,
 *     startOfWeek,
 *     subWeeks,
 *     startOfMonth,
 *     subMonths,
 * } from 'date-fns';
 * import { Card, CardContent } from '@material-ui/core';
 * import AccessTimeIcon from '@material-ui/icons/AccessTime';
 * import { FilterList, FilterListItem } from 'react-admin';
 *
 * const FilterSidebar = () => (
 *     <Card>
 *         <CardContent>
 *             <FilterList
 *                 label="Last visited"
 *                 icon={<AccessTimeIcon />}
 *             >
 *                 <FilterListItem
 *                     label="Today"
 *                     value={{
 *                         last_seen_gte: endOfYesterday().toISOString(),
 *                         last_seen_lte: undefined,
 *                     }}
 *                 />
 *                 <FilterListItem
 *                     label="This week"
 *                     value={{
 *                         last_seen_gte: startOfWeek(
 *                             new Date()
 *                         ).toISOString(),
 *                         last_seen_lte: undefined,
 *                     }}
 *                 />
 *                 <FilterListItem
 *                     label="Last week"
 *                     value={{
 *                         last_seen_gte: subWeeks(
 *                             startOfWeek(new Date()),
 *                             1
 *                         ).toISOString(),
 *                         last_seen_lte: startOfWeek(
 *                             new Date()
 *                         ).toISOString(),
 *                     }}
 *                 />
 *                 <FilterListItem
 *                     label="This month"
 *                     value={{
 *                         last_seen_gte: startOfMonth(
 *                             new Date()
 *                         ).toISOString(),
 *                         last_seen_lte: undefined,
 *                     }}
 *                 />
 *                 <FilterListItem
 *                     label="Last month"
 *                     value={{
 *                         last_seen_gte: subMonths(
 *                             startOfMonth(new Date()),
 *                             1
 *                         ).toISOString(),
 *                         last_seen_lte: startOfMonth(
 *                             new Date()
 *                         ).toISOString(),
 *                     }}
 *                 />
 *                 <FilterListItem
 *                     label="Earlier"
 *                     value={{
 *                         last_seen_gte: undefined,
 *                         last_seen_lte: subMonths(
 *                             startOfMonth(new Date()),
 *                             1
 *                         ).toISOString(),
 *                     }}
 *                 />
 *             </FilterList>
 *         </CardContent>
 *     </Card>
 * );
 */
var FilterListItem = function (props) {
    var label = props.label, value = props.value;
    var _a = ra_core_1.useListFilterContext(), filterValues = _a.filterValues, setFilters = _a.setFilters;
    var translate = ra_core_1.useTranslate();
    var classes = useStyles(props);
    var isSelected = matches_1.default(pickBy_1.default(value, function (val) { return typeof val !== 'undefined'; }))(filterValues);
    var addFilter = function () {
        setFilters(__assign(__assign({}, filterValues), value), null, false);
    };
    var removeFilter = function () {
        var keysToRemove = Object.keys(value);
        var filters = Object.keys(filterValues).reduce(function (acc, key) {
            var _a;
            return keysToRemove.includes(key)
                ? acc
                : __assign(__assign({}, acc), (_a = {}, _a[key] = filterValues[key], _a));
        }, {});
        setFilters(filters, null, false);
    };
    var toggleFilter = function () { return (isSelected ? removeFilter() : addFilter()); };
    return (React.createElement(core_1.ListItem, { button: true, onClick: toggleFilter, selected: isSelected, className: classes.listItem },
        React.createElement(core_1.ListItemText, { primary: translate(label, { _: label }), className: classes.listItemText, "data-selected": isSelected ? 'true' : 'false' }),
        isSelected && (React.createElement(core_1.ListItemSecondaryAction, null,
            React.createElement(core_1.IconButton, { size: "small", onClick: toggleFilter },
                React.createElement(CancelOutlined_1.default, null))))));
};
var arePropsEqual = function (prevProps, nextProps) {
    return prevProps.label === nextProps.label &&
        react_redux_1.shallowEqual(prevProps.value, nextProps.value);
};
exports.default = react_1.memo(FilterListItem, arePropsEqual);
