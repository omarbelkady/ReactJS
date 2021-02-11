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
import PropTypes from 'prop-types';
import { Avatar, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { linkToRecord, sanitizeListRestProps, useListContext, } from 'ra-core';
import SimpleListLoading from './SimpleListLoading';
var useStyles = makeStyles({
    tertiary: { float: 'right', opacity: 0.541176 },
}, { name: 'RaSimpleList' });
/**
 * The <SimpleList> component renders a list of records as a material-ui <List>.
 * It is usually used as a child of react-admin's <List> and <ReferenceManyField> components.
 *
 * Also widely used on Mobile.
 *
 * Props:
 * - primaryText: function returning a React element (or some text) based on the record
 * - secondaryText: same
 * - tertiaryText: same
 * - leftAvatar: function returning a React element based on the record
 * - leftIcon: same
 * - rightAvatar: same
 * - rightIcon: same
 * - linkType: 'edit' or 'show', or a function returning 'edit' or 'show' based on the record
 * - rowStyle: function returning a style object based on (record, index)
 *
 * @example // Display all posts as a List
 * const postRowStyle = (record, index) => ({
 *     backgroundColor: record.views >= 500 ? '#efe' : 'white',
 * });
 * export const PostList = (props) => (
 *     <List {...props}>
 *         <SimpleList
 *             primaryText={record => record.title}
 *             secondaryText={record => `${record.views} views`}
 *             tertiaryText={record =>
 *                 new Date(record.published_at).toLocaleDateString()
 *             }
 *             rowStyle={postRowStyle}
 *          />
 *     </List>
 * );
 */
var SimpleList = function (props) {
    var className = props.className, classesOverride = props.classes, hasBulkActions = props.hasBulkActions, leftAvatar = props.leftAvatar, leftIcon = props.leftIcon, _a = props.linkType, linkType = _a === void 0 ? 'edit' : _a, primaryText = props.primaryText, rightAvatar = props.rightAvatar, rightIcon = props.rightIcon, secondaryText = props.secondaryText, tertiaryText = props.tertiaryText, rowStyle = props.rowStyle, rest = __rest(props, ["className", "classes", "hasBulkActions", "leftAvatar", "leftIcon", "linkType", "primaryText", "rightAvatar", "rightIcon", "secondaryText", "tertiaryText", "rowStyle"]);
    var _b = useListContext(props), basePath = _b.basePath, data = _b.data, ids = _b.ids, loaded = _b.loaded, total = _b.total;
    var classes = useStyles(props);
    if (loaded === false) {
        return (React.createElement(SimpleListLoading, { classes: classes, className: className, hasLeftAvatarOrIcon: !!leftIcon || !!leftAvatar, hasRightAvatarOrIcon: !!rightIcon || !!rightAvatar, hasSecondaryText: !!secondaryText, hasTertiaryText: !!tertiaryText }));
    }
    return (total > 0 && (React.createElement(List, __assign({ className: className }, sanitizeListRestProps(rest)), ids.map(function (id, rowIndex) { return (React.createElement(LinkOrNot, { linkType: linkType, basePath: basePath, id: id, key: id, record: data[id] },
        React.createElement(ListItem, { button: !!linkType, style: rowStyle
                ? rowStyle(data[id], rowIndex)
                : undefined },
            leftIcon && (React.createElement(ListItemIcon, null, leftIcon(data[id], id))),
            leftAvatar && (React.createElement(ListItemAvatar, null,
                React.createElement(Avatar, null, leftAvatar(data[id], id)))),
            React.createElement(ListItemText, { primary: React.createElement("div", null,
                    primaryText(data[id], id),
                    tertiaryText && (React.createElement("span", { className: classes.tertiary }, tertiaryText(data[id], id)))), secondary: secondaryText && secondaryText(data[id], id) }),
            (rightAvatar || rightIcon) && (React.createElement(ListItemSecondaryAction, null,
                rightAvatar && (React.createElement(Avatar, null, rightAvatar(data[id], id))),
                rightIcon && (React.createElement(ListItemIcon, null, rightIcon(data[id], id)))))))); }))));
};
SimpleList.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object,
    leftAvatar: PropTypes.func,
    leftIcon: PropTypes.func,
    linkType: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.func,
    ]),
    primaryText: PropTypes.func,
    rightAvatar: PropTypes.func,
    rightIcon: PropTypes.func,
    secondaryText: PropTypes.func,
    tertiaryText: PropTypes.func,
    rowStyle: PropTypes.func,
};
var useLinkOrNotStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
}, { name: 'RaLinkOrNot' });
var LinkOrNot = function (_a) {
    var classesOverride = _a.classes, linkType = _a.linkType, basePath = _a.basePath, id = _a.id, children = _a.children, record = _a.record;
    var classes = useLinkOrNotStyles({ classes: classesOverride });
    var link = typeof linkType === 'function' ? linkType(record, id) : linkType;
    return link === 'edit' || link === true ? (React.createElement(Link, { to: linkToRecord(basePath, id), className: classes.link }, children)) : link === 'show' ? (React.createElement(Link, { to: linkToRecord(basePath, id) + "/show", className: classes.link }, children)) : (React.createElement("span", null, children));
};
export default SimpleList;
