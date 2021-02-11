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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var core_1 = require("@material-ui/core");
var ra_core_1 = require("ra-core");
var PaginationActions_1 = __importDefault(require("./PaginationActions"));
var PaginationLimit_1 = __importDefault(require("./PaginationLimit"));
var emptyArray = [];
var Pagination = function (props) {
    var rowsPerPageOptions = props.rowsPerPageOptions, actions = props.actions, limit = props.limit, rest = __rest(props, ["rowsPerPageOptions", "actions", "limit"]);
    var _a = ra_core_1.useListPaginationContext(props), loading = _a.loading, page = _a.page, perPage = _a.perPage, total = _a.total, setPage = _a.setPage, setPerPage = _a.setPerPage;
    var translate = ra_core_1.useTranslate();
    var isSmall = core_1.useMediaQuery(function (theme) {
        return theme.breakpoints.down('sm');
    });
    var totalPages = react_1.useMemo(function () {
        return Math.ceil(total / perPage) || 1;
    }, [perPage, total]);
    /**
     * Warning: material-ui's page is 0-based
     */
    var handlePageChange = react_1.useCallback(function (event, page) {
        event && event.stopPropagation();
        if (page < 0 || page > totalPages - 1) {
            throw new Error(translate('ra.navigation.page_out_of_boundaries', {
                page: page + 1,
            }));
        }
        setPage(page + 1);
    }, [totalPages, setPage, translate]);
    var handlePerPageChange = react_1.useCallback(function (event) {
        setPerPage(event.target.value);
    }, [setPerPage]);
    var labelDisplayedRows = react_1.useCallback(function (_a) {
        var from = _a.from, to = _a.to, count = _a.count;
        return translate('ra.navigation.page_range_info', {
            offsetBegin: from,
            offsetEnd: to,
            total: count,
        });
    }, [translate]);
    // Avoid rendering TablePagination if "page" value is invalid
    if (total === null || total === 0 || page < 1 || page > totalPages) {
        return loading ? React.createElement(core_1.Toolbar, { variant: "dense" }) : limit;
    }
    if (isSmall) {
        return (React.createElement(core_1.TablePagination, __assign({ count: total, rowsPerPage: perPage, page: page - 1, onChangePage: handlePageChange, rowsPerPageOptions: emptyArray, component: "span", labelDisplayedRows: labelDisplayedRows }, ra_core_1.sanitizeListRestProps(rest))));
    }
    return (React.createElement(core_1.TablePagination, __assign({ count: total, rowsPerPage: perPage, page: page - 1, onChangePage: handlePageChange, onChangeRowsPerPage: handlePerPageChange, ActionsComponent: actions, component: "span", labelRowsPerPage: translate('ra.navigation.page_rows_per_page'), labelDisplayedRows: labelDisplayedRows, rowsPerPageOptions: rowsPerPageOptions }, ra_core_1.sanitizeListRestProps(rest))));
};
Pagination.propTypes = {
    actions: ra_core_1.ComponentPropType,
    limit: prop_types_1.default.element,
    rowsPerPageOptions: prop_types_1.default.arrayOf(prop_types_1.default.number),
};
Pagination.defaultProps = {
    actions: PaginationActions_1.default,
    limit: React.createElement(PaginationLimit_1.default, null),
    rowsPerPageOptions: [5, 10, 25],
};
exports.default = React.memo(Pagination);
