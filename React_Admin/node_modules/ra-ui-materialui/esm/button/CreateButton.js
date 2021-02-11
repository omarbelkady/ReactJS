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
import { Fab, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ContentAdd from '@material-ui/icons/Add';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { useTranslate } from 'ra-core';
import Button, { sanitizeButtonRestProps } from './Button';
var CreateButton = function (props) {
    var _a = props.basePath, basePath = _a === void 0 ? '' : _a, className = props.className, classesOverride = props.classes, _b = props.label, label = _b === void 0 ? 'ra.action.create' : _b, _c = props.icon, icon = _c === void 0 ? defaultIcon : _c, variant = props.variant, rest = __rest(props, ["basePath", "className", "classes", "label", "icon", "variant"]);
    var classes = useStyles(props);
    var translate = useTranslate();
    var isSmall = useMediaQuery(function (theme) {
        return theme.breakpoints.down('sm');
    });
    return isSmall ? (React.createElement(Fab, __assign({ component: Link, color: "primary", className: classnames(classes.floating, className), to: basePath + "/create", "aria-label": label && translate(label) }, sanitizeButtonRestProps(rest)), icon)) : (React.createElement(Button, __assign({ component: Link, to: basePath + "/create", className: className, label: label, variant: variant }, rest), icon));
};
var defaultIcon = React.createElement(ContentAdd, null);
var useStyles = makeStyles(function (theme) { return ({
    floating: {
        color: theme.palette.getContrastText(theme.palette.primary.main),
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 60,
        left: 'auto',
        position: 'fixed',
        zIndex: 1000,
    },
    floatingLink: {
        color: 'inherit',
    },
}); }, { name: 'RaCreateButton' });
CreateButton.propTypes = {
    basePath: PropTypes.string,
    classes: PropTypes.object,
    className: PropTypes.string,
    icon: PropTypes.element,
    label: PropTypes.string,
};
export default memo(CreateButton, function (prevProps, nextProps) {
    return (prevProps.basePath === nextProps.basePath &&
        prevProps.label === nextProps.label &&
        prevProps.translate === nextProps.translate &&
        prevProps.to === nextProps.to);
});
