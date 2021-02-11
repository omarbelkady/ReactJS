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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var get_1 = __importDefault(require("lodash/get"));
var crudGetMatching_1 = require("../actions/dataActions/crudGetMatching");
var useQueryWithStore_1 = __importDefault(require("./useQueryWithStore"));
var reducer_1 = require("../reducer");
var referenceSource = function (resource, source) { return resource + "@" + source; };
/**
 * Call the dataProvider.getList() method return the resolved result
 * as well as the loading state.
 *
 * React-admin uses a different store location for the result of this query
 * than for useGetList(). Therefore, calling useGetMatching() does not modify
 * the ids and total for the resource.
 *
 * The return value updates according to the request state:
 *
 * - start: { loading: true, loaded: false }
 * - success: { data: [data from store], ids: [ids from response], total: [total from response], loading: false, loaded: true }
 * - error: { error: [error from response], loading: false, loaded: true }
 *
 * This hook will return the cached result when called a second time
 * with the same parameters, until the response arrives.
 *
 * @param {string} resource The referenced resource name, e.g. 'tags'
 * @param {Object} pagination The request pagination { page, perPage }, e.g. { page: 1, perPage: 10 }
 * @param {Object} sort The request sort { field, order }, e.g. { field: 'id', order: 'DESC' }
 * @param {Object} filter The request filters, e.g. { title: 'hello, world' }
 * @param {string} source The field in resource containing the ids of the referenced records, e.g. 'tag_ids'
 * @param {string} referencingResource The resource name, e.g. 'posts'. Used to build a cache key
 * @param {Object} options Options object to pass to the dataProvider. May include side effects to be executed upon success or failure, e.g. { onSuccess: { refresh: true } }
 *
 * @returns The current request state. Destructure as { data, total, ids, error, loading, loaded }.
 *
 * @example
 *
 * import { useGetMatching } from 'react-admin';
 *
 * const PostTags = () => {
 *     // call dataProvider.getList('tags', { pagination: { page: 1, perPage: 10 }, sort: { { field: 'published_at', order: 'DESC' } } })
 *     const { data, loading, error } = useGetMatching(
 *         'tags',
 *         { page: 1, perPage: 10 },
 *         { field: 'published_at', order: 'DESC' },
 *         {},
 *         'tag_ids',
 *         'posts',
 *     );
 *     if (loading) { return <Loading />; }
 *     if (error) { return <p>ERROR</p>; }
 *     return <ul>{data.map(tag =>
 *         <li key={tag.id}>{tag.name}</li>
 *     )}</ul>;
 * };
 */
var useGetMatching = function (resource, pagination, sort, filter, source, referencingResource, options) {
    var relatedTo = referenceSource(referencingResource, source);
    var payload = { pagination: pagination, sort: sort, filter: filter };
    var _a = useQueryWithStore_1.default({
        type: 'getList',
        resource: resource,
        payload: payload,
    }, __assign(__assign({}, options), { relatedTo: relatedTo, action: crudGetMatching_1.CRUD_GET_MATCHING }), function (state) {
        return reducer_1.getPossibleReferenceValues(state, {
            referenceSource: referenceSource,
            resource: referencingResource,
            source: source,
        });
    }, function (state) {
        return get_1.default(state.admin.resources, [
            resource,
            'list',
            'cachedRequests',
            JSON.stringify(payload),
            'total',
        ], null);
    }), possibleValues = _a.data, total = _a.total, error = _a.error, loading = _a.loading, loaded = _a.loaded;
    var referenceState = react_redux_1.useSelector(function (state) {
        return reducer_1.getReferenceResource(state, {
            reference: resource,
        });
    });
    var possibleReferences = reducer_1.getPossibleReferences(referenceState, possibleValues, []);
    return {
        data: possibleReferences,
        ids: possibleValues,
        total: total,
        error: error,
        loading: loading,
        loaded: loaded,
    };
};
exports.default = useGetMatching;
