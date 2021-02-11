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
var styles_1 = require("@material-ui/core/styles");
var RemoveCircle_1 = __importDefault(require("@material-ui/icons/RemoveCircle"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var ra_core_1 = require("ra-core");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    removeButton: {},
    removeIcon: {
        color: theme.palette.error.main,
    },
}); }, { name: 'RaFileInputPreview' });
var FileInputPreview = function (props) {
    var children = props.children, classesOverride = props.classes, className = props.className, onRemove = props.onRemove, file = props.file, rest = __rest(props, ["children", "classes", "className", "onRemove", "file"]);
    var classes = useStyles(props);
    var translate = ra_core_1.useTranslate();
    react_1.useEffect(function () {
        return function () {
            var preview = file.rawFile ? file.rawFile.preview : file.preview;
            if (preview) {
                window.URL.revokeObjectURL(preview);
            }
        };
    }, [file]);
    return (React.createElement("div", __assign({ className: className }, rest),
        React.createElement(IconButton_1.default, { className: classes.removeButton, onClick: onRemove, "aria-label": translate('ra.action.delete'), title: translate('ra.action.delete') },
            React.createElement(RemoveCircle_1.default, { className: classes.removeIcon })),
        children));
};
FileInputPreview.propTypes = {
    children: prop_types_1.default.element.isRequired,
    className: prop_types_1.default.string,
    file: prop_types_1.default.object,
    onRemove: prop_types_1.default.func.isRequired,
};
FileInputPreview.defaultProps = {
    file: undefined,
};
exports.default = FileInputPreview;
