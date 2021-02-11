"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUD_UPDATE_MANY_SUCCESS = exports.CRUD_UPDATE_MANY_FAILURE = exports.CRUD_UPDATE_MANY_LOADING = exports.CRUD_UPDATE_MANY = exports.crudUpdateMany = void 0;
var core_1 = require("../../core");
exports.crudUpdateMany = function (resource, ids, data, basePath, refresh) {
    if (refresh === void 0) { refresh = true; }
    return ({
        type: exports.CRUD_UPDATE_MANY,
        payload: { ids: ids, data: data },
        meta: {
            resource: resource,
            fetch: core_1.UPDATE_MANY,
            onSuccess: {
                notification: {
                    body: 'ra.notification.updated',
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
exports.CRUD_UPDATE_MANY = 'RA/CRUD_UPDATE_MANY';
exports.CRUD_UPDATE_MANY_LOADING = 'RA/CRUD_UPDATE_MANY_LOADING';
exports.CRUD_UPDATE_MANY_FAILURE = 'RA/CRUD_UPDATE_MANY_FAILURE';
exports.CRUD_UPDATE_MANY_SUCCESS = 'RA/CRUD_UPDATE_MANY_SUCCESS';
