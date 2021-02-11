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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var get_1 = __importDefault(require("lodash/get"));
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var util_1 = require("../../util");
var dataProvider_1 = require("../../dataProvider");
var sideEffect_1 = require("../../sideEffect");
var usePaginationState_1 = __importDefault(require("../usePaginationState"));
var useSelectionState_1 = __importDefault(require("../useSelectionState"));
var useSortState_1 = __importDefault(require("../useSortState"));
var core_1 = require("../../core");
var emptyArray = [];
var defaultFilter = {};
var defaultSort = { field: null, order: null };
/**
 * Hook that fetches records from another resource specified
 * by an array of *ids* in current record.
 *
 * @example
 *
 * const { ids, data, error, loaded, loading, referenceBasePath } = useReferenceArrayFieldController({
 *      basePath: 'resource';
 *      record: { referenceIds: ['id1', 'id2']};
 *      reference: 'reference';
 *      resource: 'resource';
 *      source: 'referenceIds';
 * });
 *
 * @param {Object} props
 * @param {string} props.basePath basepath to current resource
 * @param {Object} props.record The current resource record
 * @param {string} props.reference The linked resource name
 * @param {string} props.resource The current resource name
 * @param {string} props.source The key of the linked resource identifier
 *
 * @param {Props} props
 *
 * @returns {ReferenceArrayProps} The reference props
 */
var useReferenceArrayFieldController = function (props) {
    var basePath = props.basePath, _a = props.filter, filter = _a === void 0 ? defaultFilter : _a, _b = props.page, initialPage = _b === void 0 ? 1 : _b, _c = props.perPage, initialPerPage = _c === void 0 ? 1000 : _c, record = props.record, reference = props.reference, _d = props.sort, initialSort = _d === void 0 ? defaultSort : _d, source = props.source;
    var resource = core_1.useResourceContext(props);
    var notify = sideEffect_1.useNotify();
    var ids = get_1.default(record, source) || emptyArray;
    var _e = dataProvider_1.useGetMany(reference, ids, {
        onFailure: function (error) {
            return notify(typeof error === 'string'
                ? error
                : error.message || 'ra.notification.http_error', 'warning', {
                _: typeof error === 'string'
                    ? error
                    : error && error.message
                        ? error.message
                        : undefined,
            });
        },
    }), data = _e.data, error = _e.error, loading = _e.loading, loaded = _e.loaded;
    var _f = util_1.useSafeSetState(indexById(data)), finalData = _f[0], setFinalData = _f[1];
    var _g = util_1.useSafeSetState(ids), finalIds = _g[0], setFinalIds = _g[1];
    // pagination logic
    var _h = usePaginationState_1.default({
        page: initialPage,
        perPage: initialPerPage,
    }), page = _h.page, setPage = _h.setPage, perPage = _h.perPage, setPerPage = _h.setPerPage;
    // sort logic
    var _j = useSortState_1.default(initialSort), sort = _j.sort, setSortObject = _j.setSort;
    var setSort = react_1.useCallback(function (field, order) {
        if (order === void 0) { order = 'ASC'; }
        setSortObject({ field: field, order: order });
        setPage(1);
    }, [setPage, setSortObject]);
    // selection logic
    var _k = useSelectionState_1.default(), selectedIds = _k.selectedIds, onSelect = _k.onSelect, onToggleItem = _k.onToggleItem, onUnselectItems = _k.onUnselectItems;
    // filter logic
    var filterRef = react_1.useRef(filter);
    var _l = util_1.useSafeSetState({}), displayedFilters = _l[0], setDisplayedFilters = _l[1];
    var _m = util_1.useSafeSetState(filter), filterValues = _m[0], setFilterValues = _m[1];
    var hideFilter = react_1.useCallback(function (filterName) {
        setDisplayedFilters(function (previousState) {
            var _a = previousState, _b = filterName, _ = _a[_b], newState = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
            return newState;
        });
        setFilterValues(function (previousState) {
            var _a = previousState, _b = filterName, _ = _a[_b], newState = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
            return newState;
        });
    }, [setDisplayedFilters, setFilterValues]);
    var showFilter = react_1.useCallback(function (filterName, defaultValue) {
        setDisplayedFilters(function (previousState) {
            var _a;
            return (__assign(__assign({}, previousState), (_a = {}, _a[filterName] = true, _a)));
        });
        setFilterValues(function (previousState) {
            var _a;
            return (__assign(__assign({}, previousState), (_a = {}, _a[filterName] = defaultValue, _a)));
        });
    }, [setDisplayedFilters, setFilterValues]);
    var setFilters = react_1.useCallback(function (filters, displayedFilters) {
        setFilterValues(util_1.removeEmpty(filters));
        setDisplayedFilters(displayedFilters);
        setPage(1);
    }, [setDisplayedFilters, setFilterValues, setPage]);
    // handle filter prop change
    react_1.useEffect(function () {
        if (!isEqual_1.default(filter, filterRef.current)) {
            filterRef.current = filter;
            setFilterValues(filter);
        }
    });
    // We do all the data processing (filtering, sorting, paginating) client-side
    react_1.useEffect(function () {
        if (!loaded)
            return;
        // 1. filter
        var tempData = data.filter(function (record) {
            return Object.entries(filterValues).every(function (_a) {
                var filterName = _a[0], filterValue = _a[1];
                // eslint-disable-next-line eqeqeq
                return filterValue == get_1.default(record, filterName);
            });
        });
        // 2. sort
        if (sort.field) {
            tempData = tempData.sort(function (a, b) {
                if (get_1.default(a, sort.field) > get_1.default(b, sort.field)) {
                    return sort.order === 'ASC' ? 1 : -1;
                }
                if (get_1.default(a, sort.field) < get_1.default(b, sort.field)) {
                    return sort.order === 'ASC' ? -1 : 1;
                }
                return 0;
            });
        }
        // 3. paginate
        tempData = tempData.slice((page - 1) * perPage, page * perPage);
        setFinalData(indexById(tempData));
        setFinalIds(tempData
            .filter(function (data) { return typeof data !== 'undefined'; })
            .map(function (data) { return data.id; }));
    }, [
        data,
        filterValues,
        loaded,
        page,
        perPage,
        setFinalData,
        setFinalIds,
        sort.field,
        sort.order,
    ]);
    return {
        basePath: basePath.replace(resource, reference),
        currentSort: sort,
        data: finalData,
        defaultTitle: null,
        error: error,
        displayedFilters: displayedFilters,
        filterValues: filterValues,
        hasCreate: false,
        hideFilter: hideFilter,
        ids: finalIds,
        loaded: loaded,
        loading: loading,
        onSelect: onSelect,
        onToggleItem: onToggleItem,
        onUnselectItems: onUnselectItems,
        page: page,
        perPage: perPage,
        resource: reference,
        selectedIds: selectedIds,
        setFilters: setFilters,
        setPage: setPage,
        setPerPage: setPerPage,
        setSort: setSort,
        showFilter: showFilter,
        total: finalIds.length,
    };
};
var indexById = function (records) {
    if (records === void 0) { records = []; }
    return records
        .filter(function (r) { return typeof r !== 'undefined'; })
        .reduce(function (prev, current) {
        prev[current.id] = current;
        return prev;
    }, {});
};
exports.default = useReferenceArrayFieldController;
