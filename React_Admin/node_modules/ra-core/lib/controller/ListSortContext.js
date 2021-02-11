"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePickSortContext = void 0;
var react_1 = require("react");
var pick_1 = __importDefault(require("lodash/pick"));
/**
 * Context to store the sort part of the useListController() result.
 *
 * Use the useListSortContext() hook to read the context. That's what many
 * List components do in react-admin (e.g. <SortButton>).
 *
 * @typedef {Object} ListSortContextValue
 * @prop {Object}   currentSort a sort object { field, order }, e.g. { field: 'date', order: 'DESC' }
 * @prop {Function} setSort a callback to change the sort, e.g. setSort('name', 'ASC')
 * @prop {string}   resource the resource name, deduced from the location. e.g. 'posts'
 *
 * @typedef Props
 * @prop {ListSortContextValue} value
 *
 * @param {Props}
 *
 * @see useListController
 * @see useListSortContext
 *
 * @example
 *
 * import { useListController, usePickSortContext, ListSortContext } from 'ra-core';
 *
 * const List = props => {
 *     const controllerProps = useListController(props);
 *     return (
 *         <ListSortContext.Provider value={usePickSortContext(controllerProps)}>
 *             ...
 *         </ListSortContext.Provider>
 *     );
 * };
 */
var ListSortContext = react_1.createContext({
    currentSort: null,
    setSort: null,
    resource: null,
});
exports.usePickSortContext = function (context) {
    return react_1.useMemo(function () { return pick_1.default(context, ['currentSort', 'setSort', 'resource']); }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [context.currentSort, context.setSort]);
};
ListSortContext.displayName = 'ListSortContext';
exports.default = ListSortContext;
