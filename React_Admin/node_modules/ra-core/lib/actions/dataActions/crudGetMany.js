"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUD_GET_MANY_SUCCESS = exports.CRUD_GET_MANY_FAILURE = exports.CRUD_GET_MANY_LOADING = exports.CRUD_GET_MANY = exports.crudGetMany = void 0;
var core_1 = require("../../core");
exports.crudGetMany = function (resource, ids) { return ({
    type: exports.CRUD_GET_MANY,
    payload: { ids: ids },
    meta: {
        resource: resource,
        fetch: core_1.GET_MANY,
        onFailure: {
            notification: {
                body: 'ra.notification.http_error',
                level: 'warning',
            },
        },
    },
}); };
exports.CRUD_GET_MANY = 'RA/CRUD_GET_MANY';
exports.CRUD_GET_MANY_LOADING = 'RA/CRUD_GET_MANY_LOADING';
exports.CRUD_GET_MANY_FAILURE = 'RA/CRUD_GET_MANY_FAILURE';
exports.CRUD_GET_MANY_SUCCESS = 'RA/CRUD_GET_MANY_SUCCESS';
