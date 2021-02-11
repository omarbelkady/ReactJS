"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var debounce_1 = __importDefault(require("lodash/debounce"));
var useReferenceArrayInputController_1 = __importDefault(require("./useReferenceArrayInputController"));
/**
 * An Input component for fields containing a list of references to another resource.
 * Useful for 'hasMany' relationship.
 *
 * @example
 * The post object has many tags, so the post resource looks like:
 * {
 *    id: 1234,
 *    tag_ids: [ "1", "23", "4" ]
 * }
 *
 * ReferenceArrayInput component fetches the current resources (using
 * `dataProvider.getMany()`) as well as possible resources (using
 * `dataProvider.getList()` REST method) in the reference endpoint. It then
 * delegates rendering to a subcomponent, to which it passes the possible
 * choices as the `choices` attribute.
 *
 * Use it with a selector component as child, like `<SelectArrayInput>`
 * or <CheckboxGroupInput>.
 *
 * @example
 * export const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <ReferenceArrayInput source="tag_ids" reference="tags">
 *                 <SelectArrayInput optionText="name" />
 *             </ReferenceArrayInput>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * By default, restricts the possible values to 25. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      perPage={100}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * By default, orders the possible values by id desc. You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      sort={{ field: 'name', order: 'ASC' }}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * Also, you can filter the query used to populate the possible values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      filter={{ is_public: true }}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * The enclosed component may filter results. ReferenceArrayInput passes a
 * `setFilter` function as prop to its child component. It uses the value to
 * create a filter for the query - by default { q: [searchText] }. You can
 * customize the mapping searchText => searchQuery by setting a custom
 * `filterToQuery` function prop:
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      filterToQuery={searchText => ({ name: searchText })}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 */
var ReferenceArrayInputController = function (_a) {
    var basePath = _a.basePath, children = _a.children, _b = _a.filter, filter = _b === void 0 ? {} : _b, input = _a.input, _c = _a.filterToQuery, filterToQuery = _c === void 0 ? function (searchText) { return ({ q: searchText }); } : _c, _d = _a.perPage, perPage = _d === void 0 ? 25 : _d, reference = _a.reference, resource = _a.resource, _e = _a.sort, sort = _e === void 0 ? { field: 'id', order: 'DESC' } : _e, source = _a.source;
    var _f = useReferenceArrayInputController_1.default({
        basePath: basePath,
        filter: filter,
        filterToQuery: filterToQuery,
        input: input,
        perPage: perPage,
        sort: sort,
        reference: reference,
        resource: resource,
        source: source,
    }), choices = _f.choices, error = _f.error, loaded = _f.loaded, loading = _f.loading, setFilter = _f.setFilter, setPagination = _f.setPagination, setSort = _f.setSort, warning = _f.warning;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var debouncedSetFilter = react_1.useCallback(debounce_1.default(setFilter, 500), [
        setFilter,
    ]);
    return children({
        choices: choices,
        error: error,
        loaded: loaded,
        loading: loading,
        setFilter: debouncedSetFilter,
        setPagination: setPagination,
        setSort: setSort,
        warning: warning,
    });
};
exports.default = ReferenceArrayInputController;
