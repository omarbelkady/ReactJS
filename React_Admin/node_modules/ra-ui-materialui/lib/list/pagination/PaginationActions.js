"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var styles_1 = require("@material-ui/core/styles");
var ChevronLeft_1 = __importDefault(require("@material-ui/icons/ChevronLeft"));
var ChevronRight_1 = __importDefault(require("@material-ui/icons/ChevronRight"));
var ra_core_1 = require("ra-core");
var classnames_1 = __importDefault(require("classnames"));
var useStyles = styles_1.makeStyles(function (theme) { return ({
    actions: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: 20,
    },
    button: {},
    currentPageButton: {},
    hellip: { padding: '1.2em' },
}); }, { name: 'RaPaginationActions' });
function PaginationActions(props) {
    var page = props.page, rowsPerPage = props.rowsPerPage, count = props.count, onChangePage = props.onChangePage, color = props.color, size = props.size;
    var classes = useStyles(props);
    var translate = ra_core_1.useTranslate();
    var theme = styles_1.useTheme();
    /**
     * Warning: material-ui's page is 0-based
     */
    var range = function () {
        var nbPages = Math.ceil(count / rowsPerPage) || 1;
        if (isNaN(page) || nbPages === 1) {
            return [];
        }
        var input = [];
        // display page links around the current page
        if (page > 1) {
            input.push(1);
        }
        if (page === 3) {
            input.push(2);
        }
        if (page > 3) {
            input.push('.');
        }
        if (page > 0) {
            input.push(page);
        }
        input.push(page + 1);
        if (page < nbPages - 1) {
            input.push(page + 2);
        }
        if (page === nbPages - 4) {
            input.push(nbPages - 1);
        }
        if (page < nbPages - 4) {
            input.push('.');
        }
        if (page < nbPages - 2) {
            input.push(nbPages);
        }
        return input;
    };
    var getNbPages = function () { return Math.ceil(count / rowsPerPage) || 1; };
    var prevPage = function (event) {
        if (page === 0) {
            throw new Error(translate('ra.navigation.page_out_from_begin'));
        }
        onChangePage(event, page - 1);
    };
    var nextPage = function (event) {
        if (page > getNbPages() - 1) {
            throw new Error(translate('ra.navigation.page_out_from_end'));
        }
        onChangePage(event, page + 1);
    };
    var gotoPage = function (event) {
        var page = parseInt(event.currentTarget.dataset.page, 10);
        if (page < 0 || page > getNbPages() - 1) {
            throw new Error(translate('ra.navigation.page_out_of_boundaries', {
                page: page + 1,
            }));
        }
        onChangePage(event, page);
    };
    var renderPageNums = function () {
        return range().map(function (pageNum, index) {
            var _a;
            return pageNum === '.' ? (React.createElement("span", { key: "hyphen_" + index, className: classes.hellip }, "\u2026")) : (React.createElement(Button_1.default, { size: size, className: classnames_1.default('page-number', classes.button, (_a = {},
                    _a[classes.currentPageButton] = pageNum === page + 1,
                    _a)), color: pageNum === page + 1 ? 'default' : color, key: pageNum, "data-page": pageNum - 1, onClick: gotoPage }, pageNum));
        });
    };
    var nbPages = getNbPages();
    if (nbPages === 1) {
        return React.createElement("div", { className: classes.actions });
    }
    return (React.createElement("div", { className: classes.actions },
        page > 0 && (React.createElement(Button_1.default, { color: color, size: size, key: "prev", onClick: prevPage, className: "previous-page" },
            theme.direction === 'rtl' ? (React.createElement(ChevronRight_1.default, null)) : (React.createElement(ChevronLeft_1.default, null)),
            translate('ra.navigation.prev'))),
        renderPageNums(),
        page !== nbPages - 1 && (React.createElement(Button_1.default, { color: color, size: size, key: "next", onClick: nextPage, className: "next-page" },
            translate('ra.navigation.next'),
            theme.direction === 'rtl' ? (React.createElement(ChevronLeft_1.default, null)) : (React.createElement(ChevronRight_1.default, null))))));
}
/**
 * PaginationActions propTypes are copied over from material-ui’s
 * TablePaginationActions propTypes. See
 * https://github.com/mui-org/material-ui/blob/869692ecf3812bc4577ed4dde81a9911c5949695/packages/material-ui/src/TablePaginationActions/TablePaginationActions.js#L53-L85
 * for reference.
 */
PaginationActions.propTypes = {
    backIconButtonProps: prop_types_1.default.object,
    count: prop_types_1.default.number.isRequired,
    classes: prop_types_1.default.object,
    nextIconButtonProps: prop_types_1.default.object,
    onChangePage: prop_types_1.default.func.isRequired,
    page: prop_types_1.default.number.isRequired,
    rowsPerPage: prop_types_1.default.number.isRequired,
    color: prop_types_1.default.oneOf(['primary', 'secondary']),
    size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
    theme: prop_types_1.default.object,
};
PaginationActions.defaultProps = {
    color: 'primary',
    size: 'small',
};
exports.default = React.memo(PaginationActions);
