"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeFetchType = exports.fetchActionsWithTotalResponse = exports.fetchActionsWithArrayOfRecordsResponse = exports.fetchActionsWithArrayOfIdentifiedRecordsResponse = exports.fetchActionsWithRecordResponse = exports.DELETE_MANY = exports.DELETE = exports.UPDATE_MANY = exports.UPDATE = exports.CREATE = exports.GET_MANY_REFERENCE = exports.GET_MANY = exports.GET_ONE = exports.GET_LIST = void 0;
exports.GET_LIST = 'GET_LIST';
exports.GET_ONE = 'GET_ONE';
exports.GET_MANY = 'GET_MANY';
exports.GET_MANY_REFERENCE = 'GET_MANY_REFERENCE';
exports.CREATE = 'CREATE';
exports.UPDATE = 'UPDATE';
exports.UPDATE_MANY = 'UPDATE_MANY';
exports.DELETE = 'DELETE';
exports.DELETE_MANY = 'DELETE_MANY';
exports.fetchActionsWithRecordResponse = ['getOne', 'create', 'update'];
exports.fetchActionsWithArrayOfIdentifiedRecordsResponse = [
    'getList',
    'getMany',
    'getManyReference',
];
exports.fetchActionsWithArrayOfRecordsResponse = __spreadArrays(exports.fetchActionsWithArrayOfIdentifiedRecordsResponse, [
    'updateMany',
    'deleteMany',
]);
exports.fetchActionsWithTotalResponse = ['getList', 'getManyReference'];
exports.sanitizeFetchType = function (fetchType) {
    switch (fetchType) {
        case exports.GET_LIST:
            return 'getList';
        case exports.GET_ONE:
            return 'getOne';
        case exports.GET_MANY:
            return 'getMany';
        case exports.GET_MANY_REFERENCE:
            return 'getManyReference';
        case exports.CREATE:
            return 'create';
        case exports.UPDATE:
            return 'update';
        case exports.UPDATE_MANY:
            return 'updateMany';
        case exports.DELETE:
            return 'delete';
        case exports.DELETE_MANY:
            return 'deleteMany';
        default:
            return fetchType;
    }
};
