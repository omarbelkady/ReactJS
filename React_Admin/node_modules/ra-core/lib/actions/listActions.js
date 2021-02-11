"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleListItemExpand = exports.TOGGLE_LIST_ITEM_EXPAND = exports.toggleListItem = exports.TOGGLE_LIST_ITEM = exports.setListSelectedIds = exports.SET_LIST_SELECTED_IDS = exports.changeListParams = exports.CRUD_CHANGE_LIST_PARAMS = void 0;
exports.CRUD_CHANGE_LIST_PARAMS = 'RA/CRUD_CHANGE_LIST_PARAMS';
exports.changeListParams = function (resource, params) { return ({
    type: exports.CRUD_CHANGE_LIST_PARAMS,
    payload: params,
    meta: { resource: resource },
}); };
exports.SET_LIST_SELECTED_IDS = 'RA/SET_LIST_SELECTED_IDS';
exports.setListSelectedIds = function (resource, ids) { return ({
    type: exports.SET_LIST_SELECTED_IDS,
    payload: ids,
    meta: { resource: resource },
}); };
exports.TOGGLE_LIST_ITEM = 'RA/TOGGLE_LIST_ITEM';
exports.toggleListItem = function (resource, id) { return ({
    type: exports.TOGGLE_LIST_ITEM,
    payload: id,
    meta: { resource: resource },
}); };
exports.TOGGLE_LIST_ITEM_EXPAND = 'RA/TOGGLE_LIST_ITEM_EXPAND';
/**
 * Action creator to toggle the expanded state of a list item
 *
 * @param {string} resource The resource name, e.g. 'posts'
 * @param {string|integer} id The record identifier, e.g. 123
 *
 * @example
 *
 * const onToggleItem = () => dispatch(toggleListItemExpand('posts', 123));
 */
exports.toggleListItemExpand = function (resource, id) { return ({
    type: exports.TOGGLE_LIST_ITEM_EXPAND,
    payload: id,
    meta: { resource: resource },
}); };
