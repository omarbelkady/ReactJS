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
exports.defaultSort = void 0;
var react_1 = require("react");
var queryReducer_1 = require("../reducer/admin/resource/list/queryReducer");
var sortReducer = function (state, action) {
    switch (action.type) {
        case 'SET_SORT':
            return action.payload.sort;
        case 'SET_SORT_FIELD': {
            var field = action.payload.field;
            var order = state.field === field
                ? state.order === queryReducer_1.SORT_ASC
                    ? queryReducer_1.SORT_DESC
                    : queryReducer_1.SORT_ASC
                : queryReducer_1.SORT_ASC;
            return { field: field, order: order };
        }
        case 'SET_SORT_ORDER': {
            var order = action.payload.order;
            return __assign(__assign({}, state), { order: order });
        }
        default:
            return state;
    }
};
exports.defaultSort = { field: 'id', order: 'DESC' };
/**
 * Set the sort { field, order }
 * @name setSort
 * @function
 * @param {SortPayload} sort the sort object
 */
/**
 * Set the sort field, swap the order if the field is the same
 * @name setSortField
 * @function
 * @param {string} field the sort field
 */
/**
 * Set the sort order
 * @name setSortOrder
 * @function
 * @param {string} order The sort order, either ASC or DESC
 */
/**
 * @typedef SortProps
 * @type {Object}
 * @property {Object} sort: the sort object.
 * @property {string} sort.field: the sort object.
 * @property {'ASC' | 'DESC'} sort.order: the sort object.
 * @property {setSort} setSort
 * @property {setSortField} setSortField
 * @property {setSortOrder} setSortOrder
 */
/**
 * Hooks to provide sort state
 *
 * @example
 *
 * const { sort, setSort, setSortField, setSortOrder } = useSort({
 *      field: 'name',
 *      order: 'ASC',
 * });
 *
 * setSort({ field: 'name', order: 'ASC' });
 * // is the same as
 * setSortField('name');
 * setSortOrder('ASC');
 *
 * @param {Object} initialSort
 * @param {string} initialSort.field The initial sort field
 * @param {string} initialSort.order The initial sort order
 * @returns {SortProps} The sort props
 */
var useSortState = function (initialSort) {
    if (initialSort === void 0) { initialSort = exports.defaultSort; }
    var _a = react_1.useReducer(sortReducer, initialSort), sort = _a[0], dispatch = _a[1];
    var isFirstRender = react_1.useRef(true);
    react_1.useEffect(function () {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        dispatch({ type: 'SET_SORT', payload: { sort: initialSort } });
    }, [initialSort.field, initialSort.order]); // eslint-disable-line react-hooks/exhaustive-deps
    return {
        setSort: react_1.useCallback(function (sort) {
            return dispatch({ type: 'SET_SORT', payload: { sort: sort } });
        }, [dispatch]),
        setSortField: react_1.useCallback(function (field) {
            return dispatch({ type: 'SET_SORT_FIELD', payload: { field: field } });
        }, [dispatch]),
        setSortOrder: react_1.useCallback(function (order) {
            return dispatch({ type: 'SET_SORT_ORDER', payload: { order: order } });
        }, [dispatch]),
        sort: sort,
    };
};
exports.default = useSortState;
