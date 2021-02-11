"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUD_CREATE_SUCCESS = exports.CRUD_CREATE_FAILURE = exports.CRUD_CREATE_LOADING = exports.CRUD_CREATE = exports.crudCreate = void 0;
var core_1 = require("../../core");
exports.crudCreate = function (resource, data, basePath, redirectTo) {
    if (redirectTo === void 0) { redirectTo = 'edit'; }
    return ({
        type: exports.CRUD_CREATE,
        payload: { data: data },
        meta: {
            resource: resource,
            fetch: core_1.CREATE,
            onSuccess: {
                notification: {
                    body: 'ra.notification.created',
                    level: 'info',
                    messageArgs: {
                        smart_count: 1,
                    },
                },
                redirectTo: redirectTo,
                basePath: basePath,
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
exports.CRUD_CREATE = 'RA/CRUD_CREATE';
exports.CRUD_CREATE_LOADING = 'RA/CRUD_CREATE_LOADING';
exports.CRUD_CREATE_FAILURE = 'RA/CRUD_CREATE_FAILURE';
exports.CRUD_CREATE_SUCCESS = 'RA/CRUD_CREATE_SUCCESS';
