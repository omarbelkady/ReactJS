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
exports.ReferenceManyFieldView = exports.ReferenceManyField = void 0;
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var ra_core_1 = require("ra-core");
var types_1 = require("./types");
var sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
/**
 * Render related records to the current one.
 *
 * You must define the fields to be passed to the iterator component as children.
 *
 * @example Display all the comments of the current post as a datagrid
 * <ReferenceManyField reference="comments" target="post_id">
 *     <Datagrid>
 *         <TextField source="id" />
 *         <TextField source="body" />
 *         <DateField source="created_at" />
 *         <EditButton />
 *     </Datagrid>
 * </ReferenceManyField>
 *
 * @example Display all the books by the current author, only the title
 * <ReferenceManyField reference="books" target="author_id">
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 *
 * By default, restricts the displayed values to 25. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceManyField perPage={10} reference="comments" target="post_id">
 *    ...
 * </ReferenceManyField>
 *
 * By default, orders the possible values by id desc. You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceManyField sort={{ field: 'created_at', order: 'DESC' }} reference="comments" target="post_id">
 *    ...
 * </ReferenceManyField>
 *
 * Also, you can filter the query used to populate the possible values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceManyField filter={{ is_published: true }} reference="comments" target="post_id">
 *    ...
 * </ReferenceManyField>
 */
exports.ReferenceManyField = function (props) {
    var basePath = props.basePath, children = props.children, filter = props.filter, _a = props.page, page = _a === void 0 ? 1 : _a, perPage = props.perPage, record = props.record, reference = props.reference, resource = props.resource, sort = props.sort, source = props.source, target = props.target;
    if (react_1.default.Children.count(children) !== 1) {
        throw new Error('<ReferenceManyField> only accepts a single child (like <Datagrid>)');
    }
    var controllerProps = ra_core_1.useReferenceManyFieldController({
        basePath: basePath,
        filter: filter,
        page: page,
        perPage: perPage,
        record: record,
        reference: reference,
        resource: resource,
        sort: sort,
        source: source,
        target: target,
    });
    return (react_1.default.createElement(ra_core_1.ResourceContextProvider, { value: reference },
        react_1.default.createElement(ra_core_1.ListContextProvider, { value: controllerProps },
            react_1.default.createElement(exports.ReferenceManyFieldView, __assign({}, props, controllerProps)))));
};
exports.ReferenceManyField.propTypes = {
    addLabel: prop_types_1.default.bool,
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element.isRequired,
    className: prop_types_1.default.string,
    filter: prop_types_1.default.object,
    label: prop_types_1.default.string,
    perPage: prop_types_1.default.number,
    record: prop_types_1.default.any,
    reference: prop_types_1.default.string.isRequired,
    resource: prop_types_1.default.string,
    sortBy: prop_types_1.default.string,
    sortByOrder: types_1.fieldPropTypes.sortByOrder,
    source: prop_types_1.default.string.isRequired,
    sort: prop_types_1.default.exact({
        field: prop_types_1.default.string,
        order: prop_types_1.default.string,
    }),
    target: prop_types_1.default.string.isRequired,
};
exports.ReferenceManyField.defaultProps = {
    filter: {},
    perPage: 25,
    sort: { field: 'id', order: 'DESC' },
    source: 'id',
    addLabel: true,
};
exports.ReferenceManyFieldView = function (props) {
    var basePath = props.basePath, children = props.children, pagination = props.pagination, reference = props.reference, rest = __rest(props, ["basePath", "children", "pagination", "reference"]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.cloneElement(react_1.Children.only(children), __assign(__assign({}, sanitizeFieldRestProps_1.default(rest)), { basePath: basePath, resource: reference })),
        pagination &&
            props.total !== undefined &&
            react_1.cloneElement(pagination)));
};
exports.ReferenceManyFieldView.propTypes = {
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element,
    className: prop_types_1.default.string,
    currentSort: prop_types_1.default.exact({
        field: prop_types_1.default.string,
        order: prop_types_1.default.string,
    }),
    data: prop_types_1.default.any,
    ids: prop_types_1.default.array,
    loaded: prop_types_1.default.bool,
    pagination: prop_types_1.default.element,
    reference: prop_types_1.default.string,
    setSort: prop_types_1.default.func,
};
exports.default = exports.ReferenceManyField;
