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
export var SET_SORT = 'SET_SORT';
export var SORT_ASC = 'ASC';
export var SORT_DESC = 'DESC';
export var SET_PAGE = 'SET_PAGE';
export var SET_PER_PAGE = 'SET_PER_PAGE';
export var SET_FILTER = 'SET_FILTER';
var oppositeOrder = function (direction) {
    return direction === SORT_DESC ? SORT_ASC : SORT_DESC;
};
/**
 * This reducer is for the react-router query string, NOT for redux.
 */
var queryReducer = function (previousState, _a) {
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case SET_SORT:
            if (payload.sort === previousState.sort) {
                return __assign(__assign({}, previousState), { order: oppositeOrder(previousState.order), page: 1 });
            }
            return __assign(__assign({}, previousState), { sort: payload.sort, order: payload.order || SORT_ASC, page: 1 });
        case SET_PAGE:
            return __assign(__assign({}, previousState), { page: payload });
        case SET_PER_PAGE:
            return __assign(__assign({}, previousState), { page: 1, perPage: payload });
        case SET_FILTER: {
            return __assign(__assign({}, previousState), { page: 1, filter: payload.filter, displayedFilters: payload.displayedFilters
                    ? payload.displayedFilters
                    : previousState.displayedFilters });
        }
        default:
            return previousState;
    }
};
export default queryReducer;
