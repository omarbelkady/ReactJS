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
var prop_types_1 = __importDefault(require("prop-types"));
var Avatar_1 = __importDefault(require("@material-ui/core/Avatar"));
var List_1 = __importDefault(require("@material-ui/core/List"));
var ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
var ListItemAvatar_1 = __importDefault(require("@material-ui/core/ListItemAvatar"));
var ListItemSecondaryAction_1 = __importDefault(require("@material-ui/core/ListItemSecondaryAction"));
var ListItemText_1 = __importDefault(require("@material-ui/core/ListItemText"));
var styles_1 = require("@material-ui/core/styles");
var Placeholder_1 = __importDefault(require("./Placeholder"));
var ra_core_1 = require("ra-core");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    primary: {
        width: '30vw',
        display: 'inline-block',
        marginBottom: theme.spacing(),
    },
    tertiary: { float: 'right', opacity: 0.541176, minWidth: '10vw' },
}); }, { name: 'RaSimpleListLoading' });
var times = function (nbChildren, fn) {
    return Array.from({ length: nbChildren }, function (_, key) { return fn(key); });
};
var SimpleListLoading = function (props) {
    var classesOverride = props.classes, className = props.className, hasLeftAvatarOrIcon = props.hasLeftAvatarOrIcon, hasRightAvatarOrIcon = props.hasRightAvatarOrIcon, hasSecondaryText = props.hasSecondaryText, hasTertiaryText = props.hasTertiaryText, _a = props.nbFakeLines, nbFakeLines = _a === void 0 ? 5 : _a, rest = __rest(props, ["classes", "className", "hasLeftAvatarOrIcon", "hasRightAvatarOrIcon", "hasSecondaryText", "hasTertiaryText", "nbFakeLines"]);
    var classes = useStyles(props);
    var oneSecondHasPassed = ra_core_1.useTimeout(1000);
    return oneSecondHasPassed ? (React.createElement(List_1.default, __assign({ className: className }, rest), times(nbFakeLines, function (key) { return (React.createElement(ListItem_1.default, null,
        hasLeftAvatarOrIcon && (React.createElement(ListItemAvatar_1.default, null,
            React.createElement(Avatar_1.default, null, "\u00A0"))),
        React.createElement(ListItemText_1.default, { primary: React.createElement("div", null,
                React.createElement(Placeholder_1.default, { className: classes.primary }),
                hasTertiaryText && (React.createElement("span", { className: classes.tertiary },
                    React.createElement(Placeholder_1.default, null)))), secondary: hasSecondaryText ? React.createElement(Placeholder_1.default, null) : undefined }),
        hasRightAvatarOrIcon && (React.createElement(ListItemSecondaryAction_1.default, null,
            React.createElement(Avatar_1.default, null, "\u00A0"))))); }))) : null;
};
SimpleListLoading.propTypes = {
    className: prop_types_1.default.string,
    hasLeftAvatarOrIcon: prop_types_1.default.bool,
    hasRightAvatarOrIcon: prop_types_1.default.bool,
    hasSecondaryText: prop_types_1.default.bool,
    hasTertiaryText: prop_types_1.default.bool,
    nbFakeLines: prop_types_1.default.number,
};
exports.default = SimpleListLoading;
