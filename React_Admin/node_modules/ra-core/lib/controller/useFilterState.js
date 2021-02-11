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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var debounce_1 = __importDefault(require("lodash/debounce"));
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var util_1 = require("../util");
var defaultFilterToQuery = function (v) { return ({ q: v }); };
/**
 * Hooks to provide filter state and setFilter which update the query part of the filter
 *
 * @example
 *
 * const { filter, setFilter } = useFilter({
 *      filterToQuery: v => ({ query: v }),
 *      permanentFilter: { foo: 'bar' },
 *      debounceTime: 500,
 * });
 * // filter initial value:
 * {
 *      query: '',
 *      foo: 'bar'
 * }
 *  // after updating filter
 *  setFilter('needle');
 *  {
 *      query: 'needle',
 *      foo: 'bar'
 *  }
 *
 * @param {Object} option
 * @param {Function} option.filterToQuery Function to convert the filter string to a filter object. Defaults to v => ({ q: v }).
 * @param {Object} option.permanentFilter Permanent filter to be merged with the filter string. Defaults to {}.
 * @param {number} option.debounceTime Time in ms between filter updates - used to debounce the search. Defaults to 500ms.
 *
 * @returns {UseFilterStateOptions} The filter props
 */
exports.default = (function (_a) {
    var _b = _a.filterToQuery, filterToQuery = _b === void 0 ? defaultFilterToQuery : _b, _c = _a.permanentFilter, permanentFilter = _c === void 0 ? {} : _c, _d = _a.debounceTime, debounceTime = _d === void 0 ? 500 : _d;
    var permanentFilterProp = react_1.useRef(permanentFilter);
    var latestValue = react_1.useRef();
    var _e = util_1.useSafeSetState(__assign(__assign({}, permanentFilter), filterToQuery(''))), filter = _e[0], setFilterValue = _e[1];
    // Developers often pass an object literal as permanent filter
    // e.g. <ReferenceInput source="book_id" reference="books" filter={{ is_published: true }}>
    // The effect should execute again when the parent component updates the filter value,
    // but not when the object literal describes the same values. Therefore,
    // we use JSON.stringify(permanentFilter) in the `useEffect` and `useCallback`
    // dependencies instead of permanentFilter.
    var permanentFilterSignature = JSON.stringify(permanentFilter);
    react_1.useEffect(function () {
        if (!isEqual_1.default(permanentFilterProp.current, permanentFilter)) {
            permanentFilterProp.current = permanentFilter;
            setFilterValue(__assign(__assign({}, permanentFilter), filterToQuery(latestValue.current)));
        }
    }, [permanentFilterSignature, permanentFilterProp, filterToQuery]); // eslint-disable-line react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var setFilter = react_1.useCallback(debounce_1.default(function (value) {
        setFilterValue(__assign(__assign({}, permanentFilter), filterToQuery(value)));
        latestValue.current = value;
    }, debounceTime), [permanentFilterSignature] // eslint-disable-line react-hooks/exhaustive-deps
    );
    return {
        filter: filter,
        setFilter: setFilter,
    };
});
