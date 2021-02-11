"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUD_DELETE_MANY_SUCCESS = exports.CRUD_DELETE_MANY_FAILURE = exports.CRUD_DELETE_MANY_LOADING = exports.CRUD_DELETE_MANY = exports.crudDeleteMany = void 0;
var core_1 = require("../../core");
exports.crudDeleteMany = function (resource, ids, basePath, refresh) {
    if (refresh === void 0) { refresh = true; }
    return ({
        type: exports.CRUD_DELETE_MANY,
        payload: { ids: ids },
        meta: {
            resource: resource,
            fetch: core_1.DELETE_MANY,
            onSuccess: {
                notification: {
                    body: 'ra.notification.deleted',
                    level: 'info',
                    messageArgs: {
                        smart_count: ids.length,
                    },
                },
                basePath: basePath,
                refresh: refresh,
                unselectAll: true,
            },
            onFailure: {
                notification: {
                    body: 'ra.notification.http_error',
                    level: 'warning',
                },
            },
        },
    });
};
exports.CRUD_DELETE_MANY = 'RA/CRUD_DELETE_MANY';
exports.CRUD_DELETE_MANY_LOADING = 'RA/CRUD_DELETE_MANY_LOADING';
exports.CRUD_DELETE_MANY_FAILURE = 'RA/CRUD_DELETE_MANY_FAILURE';
exports.CRUD_DELETE_MANY_SUCCESS = 'RA/CRUD_DELETE_MANY_SUCCESS';
