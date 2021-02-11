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
var get_1 = __importDefault(require("lodash/get"));
var react_1 = require("react");
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var util_1 = require("../../util");
var dataProvider_1 = require("../../dataProvider");
var sideEffect_1 = require("../../sideEffect");
var usePaginationState_1 = __importDefault(require("../usePaginationState"));
var useSelectionState_1 = __importDefault(require("../useSelectionState"));
var useSortState_1 = __importDefault(require("../useSortState"));
var core_1 = require("../../core");
var defaultFilter = {};
/**
 * Fetch reference records, and return them when available
 *
 * The reference prop should be the name of one of the <Resource> components
 * added as <Admin> child.
 *
 * @example
 *
 * const { loaded, referenceRecord, resourceLinkPath } = useReferenceManyFieldController({
 *     resource
 *     reference: 'users',
 *     record: {
 *         userId: 7
 *     }
 *     target: 'comments',
 *     source: 'userId',
 *     basePath: '/comments',
 *     page: 1,
 *     perPage: 25,
 * });
 *
 * @param {Object} props
 * @param {string} props.resource The current resource name
 * @param {string} props.reference The linked resource name
 * @param {Object} props.record The current resource record
 * @param {string} props.target The target resource key
 * @param {Object} props.filter The filter applied on the recorded records list
 * @param {string} props.source The key of the linked resource identifier
 * @param {string} props.basePath basepath to current resource
 * @param {number} props.page the page number
 * @param {number} props.perPage the number of item per page
 * @param {Object} props.sort the sort to apply to the referenced records
 *
 * @returns {ReferenceManyProps} The reference many props
 */
var useReferenceManyFieldController = function (props) {
    var reference = props.reference, record = props.record, target = props.target, _a = props.filter, filter = _a === void 0 ? defaultFilter : _a, source = props.source, basePath = props.basePath, initialPage = props.page, initialPerPage = props.perPage, _b = props.sort, initialSort = _b === void 0 ? { field: 'id', order: 'DESC' } : _b;
    var resource = core_1.useResourceContext(props);
    var notify = sideEffect_1.useNotify();
    // pagination logic
    var _c = usePaginationState_1.default({
        page: initialPage,
        perPage: initialPerPage,
    }), page = _c.page, setPage = _c.setPage, perPage = _c.perPage, setPerPage = _c.setPerPage;
    // sort logic
    var _d = useSortState_1.default(initialSort), sort = _d.sort, setSortObject = _d.setSort;
    var setSort = react_1.useCallback(function (field, order) {
        if (order === void 0) { order = 'ASC'; }
        setSortObject({ field: field, order: order });
        setPage(1);
    }, [setPage, setSortObject]);
    // selection logic
    var _e = useSelectionState_1.default(), selectedIds = _e.selectedIds, onSelect = _e.onSelect, onToggleItem = _e.onToggleItem, onUnselectItems = _e.onUnselectItems;
    // filter logic
    var filterRef = react_1.useRef(filter);
    var _f = util_1.useSafeSetState({}), displayedFilters = _f[0], setDisplayedFilters = _f[1];
    var _g = util_1.useSafeSetState(filter), filterValues = _g[0], setFilterValues = _g[1];
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
    var referenceId = get_1.default(record, source);
    var _h = dataProvider_1.useGetManyReference(reference, target, referenceId, { page: page, perPage: perPage }, sort, filterValues, resource, {
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
    }), data = _h.data, ids = _h.ids, total = _h.total, error = _h.error, loading = _h.loading, loaded = _h.loaded;
    return {
        basePath: basePath.replace(resource, reference),
        currentSort: sort,
        data: data,
        defaultTitle: null,
        displayedFilters: displayedFilters,
        error: error,
        filterValues: filterValues,
        hasCreate: false,
        hideFilter: hideFilter,
        ids: ids,
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
        total: total,
    };
};
exports.default = useReferenceManyFieldController;
