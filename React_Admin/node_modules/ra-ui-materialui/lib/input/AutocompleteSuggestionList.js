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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles({
    suggestionsContainer: {
        zIndex: 2,
    },
    suggestionsPaper: {
        maxHeight: '50vh',
        overflowY: 'auto',
    },
}, { name: 'RaAutocompleteSuggestionList' });
var AutocompleteSuggestionList = function (props) {
    var children = props.children, className = props.className, isOpen = props.isOpen, menuProps = props.menuProps, inputEl = props.inputEl, suggestionsContainerProps = props.suggestionsContainerProps;
    var classes = useStyles(props);
    return (React.createElement(core_1.Popper, __assign({ open: isOpen, anchorEl: inputEl, className: classnames_1.default(classes.suggestionsContainer, className), modifiers: {} }, suggestionsContainerProps),
        React.createElement("div", __assign({}, (isOpen ? menuProps : {})),
            React.createElement(core_1.Paper, { square: true, style: {
                    marginTop: 8,
                    minWidth: inputEl ? inputEl.clientWidth : null,
                }, className: classes.suggestionsPaper }, children))));
};
exports.default = AutocompleteSuggestionList;
