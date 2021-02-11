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
import classnames from 'classnames';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import { Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslate } from 'ra-core';
import { fieldPropTypes } from './types';
import sanitizeFieldRestProps from './sanitizeFieldRestProps';
var useStyles = makeStyles({
    root: {
        display: 'flex',
    },
}, {
    name: 'RaBooleanField',
});
export var BooleanField = memo(function (props) {
    var className = props.className, classesOverride = props.classes, emptyText = props.emptyText, source = props.source, _a = props.record, record = _a === void 0 ? {} : _a, valueLabelTrue = props.valueLabelTrue, valueLabelFalse = props.valueLabelFalse, TrueIcon = props.TrueIcon, FalseIcon = props.FalseIcon, rest = __rest(props, ["className", "classes", "emptyText", "source", "record", "valueLabelTrue", "valueLabelFalse", "TrueIcon", "FalseIcon"]);
    var translate = useTranslate();
    var classes = useStyles(props);
    var value = get(record, source);
    var ariaLabel = value ? valueLabelTrue : valueLabelFalse;
    if (!ariaLabel) {
        ariaLabel =
            value === false ? 'ra.boolean.false' : 'ra.boolean.true';
    }
    if (value === false || value === true) {
        return (React.createElement(Typography, __assign({ component: "span", variant: "body2", className: classnames(classes.root, className) }, sanitizeFieldRestProps(rest)),
            React.createElement(Tooltip, { title: translate(ariaLabel, { _: ariaLabel }) }, value === true ? (React.createElement("span", null,
                React.createElement(TrueIcon, { "data-testid": "true", fontSize: "small" }))) : (React.createElement("span", null,
                React.createElement(FalseIcon, { "data-testid": "false", fontSize: "small" }))))));
    }
    return (React.createElement(Typography, __assign({ component: "span", variant: "body2", className: className }, sanitizeFieldRestProps(rest)), emptyText));
});
BooleanField.defaultProps = {
    addLabel: true,
    TrueIcon: DoneIcon,
    FalseIcon: ClearIcon,
};
BooleanField.propTypes = __assign(__assign(__assign({}, Typography.propTypes), fieldPropTypes), { valueLabelFalse: PropTypes.string, valueLabelTrue: PropTypes.string, TrueIcon: PropTypes.elementType, FalseIcon: PropTypes.elementType });
export default BooleanField;
