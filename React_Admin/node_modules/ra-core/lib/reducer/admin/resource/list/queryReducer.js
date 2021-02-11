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
exports.SET_FILTER = exports.SET_PER_PAGE = exports.SET_PAGE = exports.SORT_DESC = exports.SORT_ASC = exports.SET_SORT = void 0;
exports.SET_SORT = 'SET_SORT';
exports.SORT_ASC = 'ASC';
exports.SORT_DESC = 'DESC';
exports.SET_PAGE = 'SET_PAGE';
exports.SET_PER_PAGE = 'SET_PER_PAGE';
exports.SET_FILTER = 'SET_FILTER';
var oppositeOrder = function (direction) {
    return direction === exports.SORT_DESC ? exports.SORT_ASC : exports.SORT_DESC;
};
/**
 * This reducer is for the react-router query string, NOT for redux.
 */
var queryReducer = function (previousState, _a) {
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case exports.SET_SORT:
            if (payload.sort === previousState.sort) {
                return __assign(__assign({}, previousState), { order: oppositeOrder(previousState.order), page: 1 });
            }
            return __assign(__assign({}, previousState), { sort: payload.sort, order: payload.order || exports.SORT_ASC, page: 1 });
        case exports.SET_PAGE:
            return __assign(__assign({}, previousState), { page: payload });
        case exports.SET_PER_PAGE:
            return __assign(__assign({}, previousState), { page: 1, perPage: payload });
        case exports.SET_FILTER: {
            return __assign(__assign({}, previousState), { page: 1, filter: payload.filter, displayedFilters: payload.displayedFilters
                    ? payload.displayedFilters
                    : previousState.displayedFilters });
        }
        default:
            return previousState;
    }
};
exports.default = queryReducer;
