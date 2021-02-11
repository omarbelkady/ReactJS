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
var classnames_1 = __importDefault(require("classnames"));
var CardContent_1 = __importDefault(require("@material-ui/core/CardContent"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) {
    var _a;
    return ({
        root: {
            paddingTop: 0,
            paddingBottom: 0,
            '&:first-child': {
                paddingTop: 16,
            },
            '&:last-child': (_a = {
                    paddingBottom: 16
                },
                _a[theme.breakpoints.only('xs')] = {
                    paddingBottom: 70,
                },
                _a),
        },
    });
}, { name: 'RaCardContentInner' });
/**
 * Overrides material-ui CardContent to allow inner content
 *
 * When using several CardContent inside the same Card, the top and bottom
 * padding double the spacing between each CardContent, leading to too much
 * wasted space. Use this component as a CardContent alternative.
 */
var CardContentInner = function (props) {
    var className = props.className, children = props.children;
    var classes = useStyles(props);
    return (React.createElement(CardContent_1.default, { className: classnames_1.default(classes.root, className) }, children));
};
CardContentInner.propTypes = {
    className: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    children: prop_types_1.default.node,
};
exports.default = CardContentInner;
