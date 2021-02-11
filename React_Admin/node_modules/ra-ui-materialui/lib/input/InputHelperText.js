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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var ra_core_1 = require("ra-core");
var InputHelperText = function (_a) {
    var helperText = _a.helperText, touched = _a.touched, error = _a.error;
    var translate = ra_core_1.useTranslate();
    return touched && error ? (React.createElement(ra_core_1.ValidationError, { error: error })) : typeof helperText === 'string' ? (React.createElement(React.Fragment, null, translate(helperText, { _: helperText }))) : helperText !== false ? (
    // material-ui's HelperText cannot reserve space unless we pass a single
    // space as child, which isn't possible when the child is a component.
    // Therefore, we must reserve the space ourselves by passing the same
    // markup as material-ui.
    // @see https://github.com/mui-org/material-ui/blob/62e439b7022d519ab638d65201e204b59b77f8da/packages/material-ui/src/FormHelperText/FormHelperText.js#L85-L90
    // eslint-disable-next-line react/no-danger
    React.createElement("span", { dangerouslySetInnerHTML: defaultInnerHTML })) : null;
};
var defaultInnerHTML = { __html: '&#8203;' };
exports.default = InputHelperText;
