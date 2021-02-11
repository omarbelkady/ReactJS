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
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var styles_1 = require("@material-ui/core/styles");
var HotTub_1 = __importDefault(require("@material-ui/icons/HotTub"));
var History_1 = __importDefault(require("@material-ui/icons/History"));
var classnames_1 = __importDefault(require("classnames"));
var ra_core_1 = require("ra-core");
var Title_1 = __importDefault(require("./Title"));
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return ({
        container: (_a = {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            },
            _a[theme.breakpoints.up('md')] = {
                height: '100%',
            },
            _a[theme.breakpoints.down('sm')] = {
                height: '100vh',
                marginTop: '-3em',
            },
            _a),
        icon: {
            width: '9em',
            height: '9em',
        },
        message: {
            textAlign: 'center',
            fontFamily: 'Roboto, sans-serif',
            opacity: 0.5,
            margin: '0 1em',
        },
        toolbar: {
            textAlign: 'center',
            marginTop: '2em',
        },
    });
}, { name: 'RaNotFound' });
function goBack() {
    window.history.go(-1);
}
var NotFound = function (props) {
    var className = props.className, classesOverride = props.classes, title = props.title, rest = __rest(props, ["className", "classes", "title"]);
    var classes = useStyles(props);
    var translate = ra_core_1.useTranslate();
    ra_core_1.useAuthenticated();
    return (React.createElement("div", __assign({ className: classnames_1.default(classes.container, className) }, sanitizeRestProps(rest)),
        React.createElement(Title_1.default, { defaultTitle: title }),
        React.createElement("div", { className: classes.message },
            React.createElement(HotTub_1.default, { className: classes.icon }),
            React.createElement("h1", null, translate('ra.page.not_found')),
            React.createElement("div", null,
                translate('ra.message.not_found'),
                ".")),
        React.createElement("div", { className: classes.toolbar },
            React.createElement(Button_1.default, { variant: "contained", startIcon: React.createElement(History_1.default, null), onClick: goBack }, translate('ra.action.back')))));
};
var sanitizeRestProps = function (_a) {
    var staticContext = _a.staticContext, history = _a.history, location = _a.location, match = _a.match, rest = __rest(_a, ["staticContext", "history", "location", "match"]);
    return rest;
};
NotFound.propTypes = {
    className: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    title: prop_types_1.default.string,
    location: prop_types_1.default.object,
};
exports.default = NotFound;
