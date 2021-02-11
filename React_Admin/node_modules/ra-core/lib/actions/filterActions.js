"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFilter = exports.CRUD_SET_FILTER = exports.hideFilter = exports.CRUD_HIDE_FILTER = exports.showFilter = exports.CRUD_SHOW_FILTER = void 0;
exports.CRUD_SHOW_FILTER = 'RA/CRUD_SHOW_FILTER';
exports.showFilter = function (resource, field) { return ({
    type: exports.CRUD_SHOW_FILTER,
    payload: { field: field },
    meta: { resource: resource },
}); };
exports.CRUD_HIDE_FILTER = 'RA/CRUD_HIDE_FILTER';
exports.hideFilter = function (resource, field) { return ({
    type: exports.CRUD_HIDE_FILTER,
    payload: { field: field },
    meta: { resource: resource },
}); };
exports.CRUD_SET_FILTER = 'RA/CRUD_SET_FILTER';
exports.setFilter = function (resource, field, value) { return ({
    type: exports.CRUD_SET_FILTER,
    payload: { field: field, value: value },
    meta: { resource: resource },
}); };
