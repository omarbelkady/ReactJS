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
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var react_router_dom_1 = require("react-router-dom");
var ra_core_1 = require("ra-core");
var SimpleListLoading_1 = __importDefault(require("./SimpleListLoading"));
var useStyles = styles_1.makeStyles({
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
    var _b = ra_core_1.useListContext(props), basePath = _b.basePath, data = _b.data, ids = _b.ids, loaded = _b.loaded, total = _b.total;
    var classes = useStyles(props);
    if (loaded === false) {
        return (React.createElement(SimpleListLoading_1.default, { classes: classes, className: className, hasLeftAvatarOrIcon: !!leftIcon || !!leftAvatar, hasRightAvatarOrIcon: !!rightIcon || !!rightAvatar, hasSecondaryText: !!secondaryText, hasTertiaryText: !!tertiaryText }));
    }
    return (total > 0 && (React.createElement(core_1.List, __assign({ className: className }, ra_core_1.sanitizeListRestProps(rest)), ids.map(function (id, rowIndex) { return (React.createElement(LinkOrNot, { linkType: linkType, basePath: basePath, id: id, key: id, record: data[id] },
        React.createElement(core_1.ListItem, { button: !!linkType, style: rowStyle
                ? rowStyle(data[id], rowIndex)
                : undefined },
            leftIcon && (React.createElement(core_1.ListItemIcon, null, leftIcon(data[id], id))),
            leftAvatar && (React.createElement(core_1.ListItemAvatar, null,
                React.createElement(core_1.Avatar, null, leftAvatar(data[id], id)))),
            React.createElement(core_1.ListItemText, { primary: React.createElement("div", null,
                    primaryText(data[id], id),
                    tertiaryText && (React.createElement("span", { className: classes.tertiary }, tertiaryText(data[id], id)))), secondary: secondaryText && secondaryText(data[id], id) }),
            (rightAvatar || rightIcon) && (React.createElement(core_1.ListItemSecondaryAction, null,
                rightAvatar && (React.createElement(core_1.Avatar, null, rightAvatar(data[id], id))),
                rightIcon && (React.createElement(core_1.ListItemIcon, null, rightIcon(data[id], id)))))))); }))));
};
SimpleList.propTypes = {
    className: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    leftAvatar: prop_types_1.default.func,
    leftIcon: prop_types_1.default.func,
    linkType: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    primaryText: prop_types_1.default.func,
    rightAvatar: prop_types_1.default.func,
    rightIcon: prop_types_1.default.func,
    secondaryText: prop_types_1.default.func,
    tertiaryText: prop_types_1.default.func,
    rowStyle: prop_types_1.default.func,
};
var useLinkOrNotStyles = styles_1.makeStyles({
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
}, { name: 'RaLinkOrNot' });
var LinkOrNot = function (_a) {
    var classesOverride = _a.classes, linkType = _a.linkType, basePath = _a.basePath, id = _a.id, children = _a.children, record = _a.record;
    var classes = useLinkOrNotStyles({ classes: classesOverride });
    var link = typeof linkType === 'function' ? linkType(record, id) : linkType;
    return link === 'edit' || link === true ? (React.createElement(react_router_dom_1.Link, { to: ra_core_1.linkToRecord(basePath, id), className: classes.link }, children)) : link === 'show' ? (React.createElement(react_router_dom_1.Link, { to: ra_core_1.linkToRecord(basePath, id) + "/show", className: classes.link }, children)) : (React.createElement("span", null, children));
};
exports.default = SimpleList;
