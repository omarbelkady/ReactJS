"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crudGetMatchingAccumulate = exports.CRUD_GET_MATCHING_ACCUMULATE = exports.crudGetManyAccumulate = exports.CRUD_GET_MANY_ACCUMULATE = void 0;
var dataActions_1 = require("./dataActions");
exports.CRUD_GET_MANY_ACCUMULATE = 'RA/CRUD_GET_MANY_ACCUMULATE';
exports.crudGetManyAccumulate = function (resource, ids) { return ({
    type: exports.CRUD_GET_MANY_ACCUMULATE,
    payload: { resource: resource, ids: ids },
    meta: { accumulate: dataActions_1.crudGetMany },
}); };
exports.CRUD_GET_MATCHING_ACCUMULATE = 'RA/CRUD_GET_MATCHING_ACCUMULATE';
exports.crudGetMatchingAccumulate = function (reference, relatedTo, pagination, sort, filter) {
    var action = dataActions_1.crudGetMatching(reference, relatedTo, pagination, sort, filter);
    return {
        type: exports.CRUD_GET_MATCHING_ACCUMULATE,
        meta: {
            accumulate: function () { return action; },
            accumulateValues: function () { return true; },
            accumulateKey: JSON.stringify(__assign({ resource: reference, relatedTo: relatedTo }, action.payload)),
        },
    };
};
