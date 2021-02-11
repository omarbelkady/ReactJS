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
var LinearProgress_1 = __importDefault(require("@material-ui/core/LinearProgress"));
var styles_1 = require("@material-ui/core/styles");
var ra_core_1 = require("ra-core");
var Link_1 = __importDefault(require("../Link"));
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: -theme.spacing(1),
        marginBottom: -theme.spacing(1),
    },
    link: {},
}); }, { name: 'RaSingleFieldList' });
// useful to prevent click bubbling in a datagrid with rowClick
var stopPropagation = function (e) { return e.stopPropagation(); };
// Our handleClick does nothing as we wrap the children inside a Link but it is
// required by ChipField, which uses a Chip from material-ui.
// The material-ui Chip requires an onClick handler to behave like a clickable element.
var handleClick = function () { };
/**
 * Iterator component to be used to display a list of entities, using a single field
 *
 * @example Display all the books by the current author
 * <ReferenceManyField reference="books" target="author_id">
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 *
 * By default, it includes a link to the <Edit> page of the related record
 * (`/books/:id` in the previous example).
 *
 * Set the linkType prop to "show" to link to the <Show> page instead.
 *
 * @example
 * <ReferenceManyField reference="books" target="author_id" linkType="show">
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 *
 * You can also prevent `<SingleFieldList>` from adding link to children by setting
 * `linkType` to false.
 *
 * @example
 * <ReferenceManyField reference="books" target="author_id" linkType={false}>
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 */
var SingleFieldList = function (props) {
    var classesOverride = props.classes, className = props.className, children = props.children, _a = props.linkType, linkType = _a === void 0 ? 'edit' : _a, rest = __rest(props, ["classes", "className", "children", "linkType"]);
    var _b = ra_core_1.useListContext(props), ids = _b.ids, data = _b.data, loaded = _b.loaded, basePath = _b.basePath;
    var resource = ra_core_1.useResourceContext(props);
    var classes = useStyles(props);
    if (loaded === false) {
        return React.createElement(LinearProgress_1.default, null);
    }
    return (React.createElement("div", __assign({ className: classnames_1.default(classes.root, className) }, ra_core_1.sanitizeListRestProps(rest)), ids.map(function (id) {
        var resourceLinkPath = !linkType
            ? false
            : ra_core_1.linkToRecord(basePath, id, linkType);
        if (resourceLinkPath) {
            return (React.createElement(Link_1.default, { className: classes.link, key: id, to: resourceLinkPath, onClick: stopPropagation }, react_1.cloneElement(react_1.Children.only(children), {
                record: data[id],
                resource: resource,
                basePath: basePath,
                // Workaround to force ChipField to be clickable
                onClick: handleClick,
            })));
        }
        return react_1.cloneElement(react_1.Children.only(children), {
            key: id,
            record: data[id],
            resource: resource,
            basePath: basePath,
        });
    })));
};
SingleFieldList.propTypes = {
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element.isRequired,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    data: prop_types_1.default.object,
    ids: prop_types_1.default.array,
    // @ts-ignore
    linkType: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    resource: prop_types_1.default.string,
};
exports.default = SingleFieldList;
