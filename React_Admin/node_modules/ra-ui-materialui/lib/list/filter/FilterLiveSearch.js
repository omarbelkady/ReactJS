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
var core_1 = require("@material-ui/core");
var Search_1 = __importDefault(require("@material-ui/icons/Search"));
var react_final_form_1 = require("react-final-form");
var ra_core_1 = require("ra-core");
var TextInput_1 = __importDefault(require("../../input/TextInput"));
/**
 * Form and search input for doing a full-text search filter.
 *
 * Triggers a search on change (with debounce).
 *
 * @example
 *
 * const FilterPanel = () => (
 *     <Card>
 *         <CardContent>
 *             <FilterLiveSearch source="title" />
 *         </CardContent>
 *     </Card>
 * );
 */
var FilterLiveSearch = function (props) {
    var _a = props.source, source = _a === void 0 ? 'q' : _a, rest = __rest(props, ["source"]);
    var _b = ra_core_1.useListFilterContext(), filterValues = _b.filterValues, setFilters = _b.setFilters;
    var translate = ra_core_1.useTranslate();
    var onSearchChange = function (event) {
        var _a;
        if (event.target) {
            setFilters(__assign(__assign({}, filterValues), (_a = {}, _a[source] = event.target.value, _a)), null);
        }
        else {
            var _b = filterValues, _c = source, _ = _b[_c], filters = __rest(_b, [typeof _c === "symbol" ? _c : _c + ""]);
            setFilters(filters, null);
        }
    };
    var onSubmit = function () { return undefined; };
    return (React.createElement(react_final_form_1.Form, { onSubmit: onSubmit }, function (_a) {
        var handleSubmit = _a.handleSubmit;
        return (React.createElement(TextInput_1.default, __assign({ resettable: true, helperText: false, source: source, label: translate('ra.action.search'), InputProps: {
                endAdornment: (React.createElement(core_1.InputAdornment, { position: "end" },
                    React.createElement(Search_1.default, { color: "disabled" }))),
            }, onChange: onSearchChange }, rest)));
    }));
};
exports.default = react_1.memo(FilterLiveSearch);
