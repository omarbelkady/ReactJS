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
import * as React from 'react';
import { memo } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Typography from '@material-ui/core/Typography';
import sanitizeFieldRestProps from './sanitizeFieldRestProps';
import { fieldPropTypes } from './types';
export var removeTags = function (input) {
    return input ? input.replace(/<[^>]+>/gm, '') : '';
};
var RichTextField = memo(function (_a) {
    var className = _a.className, emptyText = _a.emptyText, source = _a.source, _b = _a.record, record = _b === void 0 ? {} : _b, stripTags = _a.stripTags, rest = __rest(_a, ["className", "emptyText", "source", "record", "stripTags"]);
    var value = get(record, source);
    return (React.createElement(Typography, __assign({ className: className, variant: "body2", component: "span" }, sanitizeFieldRestProps(rest)), value == null && emptyText ? (emptyText) : stripTags ? (removeTags(value)) : (React.createElement("span", { dangerouslySetInnerHTML: { __html: value } }))));
});
RichTextField.defaultProps = {
    addLabel: true,
    stripTags: false,
};
RichTextField.propTypes = __assign(__assign(__assign({}, Typography.propTypes), fieldPropTypes), { stripTags: PropTypes.bool });
RichTextField.displayName = 'RichTextField';
export default RichTextField;
