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
var styles_1 = require("@material-ui/core/styles");
var classnames_1 = __importDefault(require("classnames"));
var CircularProgress_1 = __importDefault(require("@material-ui/core/CircularProgress"));
var ra_core_1 = require("ra-core");
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
            _a[theme.breakpoints.down('lg')] = {
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
    });
}, { name: 'RaLoading' });
var Loading = function (props) {
    var className = props.className, _a = props.loadingPrimary, loadingPrimary = _a === void 0 ? 'ra.page.loading' : _a, _b = props.loadingSecondary, loadingSecondary = _b === void 0 ? 'ra.message.loading' : _b;
    var classes = useStyles(props);
    var translate = ra_core_1.useTranslate();
    return (React.createElement("div", { className: classnames_1.default(classes.container, className) },
        React.createElement("div", { className: classes.message },
            React.createElement(CircularProgress_1.default, { className: classes.icon, color: "primary" }),
            React.createElement("h1", null, translate(loadingPrimary)),
            React.createElement("div", null,
                translate(loadingSecondary),
                "."))));
};
Loading.propTypes = {
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    loadingPrimary: prop_types_1.default.string,
    loadingSecondary: prop_types_1.default.string,
};
Loading.defaultProps = {
    loadingPrimary: 'ra.page.loading',
    loadingSecondary: 'ra.message.loading',
};
exports.default = Loading;
