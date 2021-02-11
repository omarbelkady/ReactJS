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
import { useSelector, shallowEqual } from 'react-redux';
import { CRUD_GET_MANY_REFERENCE } from '../actions/dataActions/crudGetManyReference';
import useQueryWithStore from './useQueryWithStore';
import { getReferences, getIds, getTotal, nameRelatedTo, } from '../reducer/admin/references/oneToMany';
import { useMemo } from 'react';
/**
 * Call the dataProvider.getManyReference() method and return the resolved result
 * as well as the loading state.
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
 * @param {string} resource The referenced resource name, e.g. 'comments'
 * @param {string} target The target resource key, e.g. 'post_id'
 * @param {Object} id The identifier of the record to look for in 'target'
 * @param {Object} pagination The request pagination { page, perPage }, e.g. { page: 1, perPage: 10 }
 * @param {Object} sort The request sort { field, order }, e.g. { field: 'id', order: 'DESC' }
 * @param {Object} filter The request filters, e.g. { body: 'hello, world' }
 * @param {string} referencingResource The resource name, e.g. 'posts'. Used to generate a cache key
 * @param {Object} options Options object to pass to the dataProvider. May include side effects to be executed upon success or failure, e.g. { onSuccess: { refresh: true } }
 *
 * @returns The current request state. Destructure as { data, total, ids, error, loading, loaded }.
 *
 * @example
 *
 * import { useGetManyReference } from 'react-admin';
 *
 * const PostComments = ({ post_id }) => {
 *     const { data, ids, loading, error } = useGetManyReference(
 *         'comments',
 *         'post_id',
 *         post_id,
 *         { page: 1, perPage: 10 },
 *         { field: 'published_at', order: 'DESC' }
 *         {},
 *         'posts',
 *     );
 *     if (loading) { return <Loading />; }
 *     if (error) { return <p>ERROR</p>; }
 *     return <ul>{ids.map(id =>
 *         <li key={id}>{data[id].body}</li>
 *     )}</ul>;
 * };
 */
var useGetManyReference = function (resource, target, id, pagination, sort, filter, referencingResource, options) {
    var relatedTo = useMemo(function () { return nameRelatedTo(resource, id, referencingResource, target, filter); }, [filter, resource, id, referencingResource, target]);
    var _a = useQueryWithStore({
        type: 'getManyReference',
        resource: resource,
        payload: { target: target, id: id, pagination: pagination, sort: sort, filter: filter },
    }, __assign(__assign({}, options), { relatedTo: relatedTo, action: CRUD_GET_MANY_REFERENCE }), selectIds(relatedTo), selectTotal(relatedTo)), ids = _a.data, total = _a.total, error = _a.error, loading = _a.loading, loaded = _a.loaded;
    var data = useSelector(selectData(resource, relatedTo), shallowEqual);
    return { data: data, ids: ids, total: total, error: error, loading: loading, loaded: loaded };
};
export default useGetManyReference;
var selectData = function (reference, relatedTo) { return function (state) { return getReferences(state, reference, relatedTo); }; };
var selectIds = function (relatedTo) { return function (state) {
    return getIds(state, relatedTo);
}; };
var selectTotal = function (relatedTo) { return function (state) {
    return getTotal(state, relatedTo);
}; };
