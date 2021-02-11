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
var parse_1 = __importDefault(require("autosuggest-highlight/parse"));
var match_1 = __importDefault(require("autosuggest-highlight/match"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var classnames_1 = __importDefault(require("classnames"));
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        fontWeight: 400,
    },
    selected: {
        fontWeight: 500,
    },
    suggestion: {
        display: 'block',
        fontFamily: theme.typography.fontFamily,
        minHeight: 24,
    },
    suggestionText: { fontWeight: 300 },
    highlightedSuggestionText: { fontWeight: 500 },
}); }, { name: 'RaAutocompleteSuggestionItem' });
var AutocompleteSuggestionItem = function (props) {
    var _a;
    var suggestion = props.suggestion, index = props.index, highlightedIndex = props.highlightedIndex, isSelected = props.isSelected, filterValue = props.filterValue, classesOverride = props.classes, getSuggestionText = props.getSuggestionText, rest = __rest(props, ["suggestion", "index", "highlightedIndex", "isSelected", "filterValue", "classes", "getSuggestionText"]);
    var classes = useStyles(props);
    var isHighlighted = highlightedIndex === index;
    var suggestionText = getSuggestionText(suggestion);
    var matches;
    var parts;
    if (!react_1.isValidElement(suggestionText)) {
        matches = match_1.default(suggestionText, filterValue);
        parts = parse_1.default(suggestionText, matches);
    }
    return (React.createElement(core_1.MenuItem, __assign({ key: suggestionText, selected: isHighlighted, className: classnames_1.default(classes.root, (_a = {},
            _a[classes.selected] = isSelected,
            _a)) }, rest), react_1.isValidElement(suggestionText) ? (react_1.cloneElement(suggestionText, { filterValue: filterValue })) : (React.createElement("div", { className: classes.suggestion }, parts.map(function (part, index) {
        return part.highlight ? (React.createElement("span", { key: index, className: classes.highlightedSuggestionText }, part.text)) : (React.createElement("strong", { key: index, className: classes.suggestionText }, part.text));
    })))));
};
exports.default = AutocompleteSuggestionItem;
