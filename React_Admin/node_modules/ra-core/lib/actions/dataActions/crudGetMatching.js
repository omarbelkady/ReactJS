"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUD_GET_MATCHING_SUCCESS = exports.CRUD_GET_MATCHING_FAILURE = exports.CRUD_GET_MATCHING_LOADING = exports.CRUD_GET_MATCHING = exports.crudGetMatching = void 0;
var core_1 = require("../../core");
exports.crudGetMatching = function (reference, relatedTo, pagination, sort, filter) { return ({
    type: exports.CRUD_GET_MATCHING,
    payload: { pagination: pagination, sort: sort, filter: filter },
    meta: {
        resource: reference,
        relatedTo: relatedTo,
        fetch: core_1.GET_LIST,
        onFailure: {
            notification: {
                body: 'ra.notification.http_error',
                level: 'warning',
            },
        },
    },
}); };
exports.CRUD_GET_MATCHING = 'RA/CRUD_GET_MATCHING';
exports.CRUD_GET_MATCHING_LOADING = 'RA/CRUD_GET_MATCHING_LOADING';
exports.CRUD_GET_MATCHING_FAILURE = 'RA/CRUD_GET_MATCHING_FAILURE';
exports.CRUD_GET_MATCHING_SUCCESS = 'RA/CRUD_GET_MATCHING_SUCCESS';
