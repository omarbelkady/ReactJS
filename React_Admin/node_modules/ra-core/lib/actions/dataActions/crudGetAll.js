"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUD_GET_ALL_SUCCESS = exports.CRUD_GET_ALL_FAILURE = exports.CRUD_GET_ALL_LOADING = exports.CRUD_GET_ALL = exports.crudGetAll = void 0;
var core_1 = require("../../core");
exports.crudGetAll = function (resource, sort, filter, maxResults, callback) { return ({
    type: exports.CRUD_GET_ALL,
    payload: { sort: sort, filter: filter, pagination: { page: 1, perPage: maxResults } },
    meta: {
        resource: resource,
        fetch: core_1.GET_LIST,
        onSuccess: {
            callback: callback,
        },
        onFailure: {
            notification: {
                body: 'ra.notification.http_error',
                level: 'warning',
            },
        },
    },
}); };
exports.CRUD_GET_ALL = 'RA/CRUD_GET_ALL';
exports.CRUD_GET_ALL_LOADING = 'RA/CRUD_GET_ALL_LOADING';
exports.CRUD_GET_ALL_FAILURE = 'RA/CRUD_GET_ALL_FAILURE';
exports.CRUD_GET_ALL_SUCCESS = 'RA/CRUD_GET_ALL_SUCCESS';
