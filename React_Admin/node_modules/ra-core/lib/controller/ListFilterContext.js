"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePickFilterContext = void 0;
var react_1 = require("react");
var pick_1 = __importDefault(require("lodash/pick"));
/**
 * Context to store the filter part of the useListController() result.
 *
 * Use the useListFilterContext() hook to read the context. That's what many
 * List components do in react-admin (e.g. <Filter>, <FilterListItem>).
 *
 * @typedef {Object} ListFilterContextValue
 * @prop {Object}   filterValues a dictionary of filter values, e.g. { title: 'lorem', nationality: 'fr' }
 * @prop {Function} setFilters a callback to update the filters, e.g. setFilters(filters, displayedFilters)
 * @prop {Object}   displayedFilters a dictionary of the displayed filters, e.g. { title: true, nationality: true }
 * @prop {Function} showFilter a callback to show one of the filters, e.g. showFilter('title', defaultValue)
 * @prop {Function} hideFilter a callback to hide one of the filters, e.g. hideFilter('title')
 * @prop {string}   resource the resource name, deduced from the location. e.g. 'posts'
 *
 * @typedef Props
 * @prop {ListFilterContextValue} value
 *
 * @param {Props}
 *
 * @see useListController
 * @see useListFilterContext
 *
 * @example
 *
 * import { useListController, usePickFilterContext, ListFilterContext } from 'ra-core';
 *
 * const List = props => {
 *     const controllerProps = useListController(props);
 *     return (
 *         <ListFilterContext.Provider value={usePickFilterContext(controllerProps)}>
 *             ...
 *         </ListFilterContext.Provider>
 *     );
 * };
 */
var ListFilterContext = react_1.createContext({
    displayedFilters: null,
    filterValues: null,
    hideFilter: null,
    setFilters: null,
    showFilter: null,
    resource: null,
});
exports.usePickFilterContext = function (context) {
    return react_1.useMemo(function () {
        return pick_1.default(context, [
            'displayedFilters',
            'filterValues',
            'hideFilter',
            'setFilters',
            'showFilter',
            'resource',
        ]);
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        context.displayedFilters,
        context.filterValues,
        context.hideFilter,
        context.setFilters,
        context.showFilter,
    ]);
};
ListFilterContext.displayName = 'ListFilterContext';
exports.default = ListFilterContext;
