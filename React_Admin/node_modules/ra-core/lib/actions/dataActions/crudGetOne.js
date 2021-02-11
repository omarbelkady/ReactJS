"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUD_GET_ONE_SUCCESS = exports.CRUD_GET_ONE_FAILURE = exports.CRUD_GET_ONE_LOADING = exports.CRUD_GET_ONE = exports.crudGetOne = void 0;
var core_1 = require("../../core");
exports.crudGetOne = function (resource, id, basePath, refresh) {
    if (refresh === void 0) { refresh = true; }
    return ({
        type: exports.CRUD_GET_ONE,
        payload: { id: id },
        meta: {
            resource: resource,
            fetch: core_1.GET_ONE,
            basePath: basePath,
            onFailure: {
                notification: {
                    body: 'ra.notification.item_doesnt_exist',
                    level: 'warning',
                },
                redirectTo: 'list',
                refresh: refresh,
            },
        },
    });
};
exports.CRUD_GET_ONE = 'RA/CRUD_GET_ONE';
exports.CRUD_GET_ONE_LOADING = 'RA/CRUD_GET_ONE_LOADING';
exports.CRUD_GET_ONE_FAILURE = 'RA/CRUD_GET_ONE_FAILURE';
exports.CRUD_GET_ONE_SUCCESS = 'RA/CRUD_GET_ONE_SUCCESS';
