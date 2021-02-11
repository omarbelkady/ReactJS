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
var classnames_1 = __importDefault(require("classnames"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var ExpansionPanel_1 = __importDefault(require("@material-ui/core/ExpansionPanel"));
var ExpansionPanelDetails_1 = __importDefault(require("@material-ui/core/ExpansionPanelDetails"));
var ExpansionPanelSummary_1 = __importDefault(require("@material-ui/core/ExpansionPanelSummary"));
var styles_1 = require("@material-ui/core/styles");
var Report_1 = __importDefault(require("@material-ui/icons/Report"));
var ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
var History_1 = __importDefault(require("@material-ui/icons/History"));
var ra_core_1 = require("ra-core");
var Title_1 = __importStar(require("./Title"));
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return ({
        container: (_a = {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            },
            _a[theme.breakpoints.down('sm')] = {
                padding: '1em',
            },
            _a.fontFamily = 'Roboto, sans-serif',
            _a.opacity = 0.5,
            _a),
        title: {
            display: 'flex',
            alignItems: 'center',
        },
        icon: {
            width: '2em',
            height: '2em',
            marginRight: '0.5em',
        },
        panel: {
            marginTop: '1em',
        },
        panelDetails: {
            whiteSpace: 'pre-wrap',
        },
        toolbar: {
            marginTop: '2em',
        },
    });
}, { name: 'RaError' });
function goBack() {
    window.history.go(-1);
}
var Error = function (props) {
    var error = props.error, errorInfo = props.errorInfo, classesOverride = props.classes, className = props.className, title = props.title, rest = __rest(props, ["error", "errorInfo", "classes", "className", "title"]);
    var classes = useStyles(props);
    var translate = ra_core_1.useTranslate();
    return (React.createElement(react_1.Fragment, null,
        title && React.createElement(Title_1.default, { defaultTitle: title }),
        React.createElement("div", __assign({ className: classnames_1.default(classes.container, className) }, rest),
            React.createElement("h1", { className: classes.title, role: "alert" },
                React.createElement(Report_1.default, { className: classes.icon }),
                translate('ra.page.error')),
            React.createElement("div", null, translate('ra.message.error')),
            process.env.NODE_ENV !== 'production' && (React.createElement(ExpansionPanel_1.default, { className: classes.panel },
                React.createElement(ExpansionPanelSummary_1.default, { expandIcon: React.createElement(ExpandMore_1.default, null) }, translate('ra.message.details')),
                React.createElement(ExpansionPanelDetails_1.default, { className: classes.panelDetails },
                    React.createElement("div", null,
                        React.createElement("h2", null, translate(error.toString())),
                        errorInfo && errorInfo.componentStack)))),
            React.createElement("div", { className: classes.toolbar },
                React.createElement(Button_1.default, { variant: "contained", startIcon: React.createElement(History_1.default, null), onClick: goBack }, translate('ra.action.back'))))));
};
Error.propTypes = {
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    error: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.string]).isRequired,
    errorInfo: prop_types_1.default.object,
    title: Title_1.TitlePropType,
};
exports.default = Error;
