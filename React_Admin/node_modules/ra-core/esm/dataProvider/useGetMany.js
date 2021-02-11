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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { useMemo } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import debounce from 'lodash/debounce';
import union from 'lodash/union';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';
import { CRUD_GET_MANY } from '../actions/dataActions/crudGetMany';
import { useSafeSetState } from '../util/hooks';
import useDataProvider from './useDataProvider';
import { useEffect } from 'react';
var queriesToCall = {};
var dataProvider;
var DataProviderOptions = { action: CRUD_GET_MANY };
/**
 * Call the dataProvider.getMany() method and return the resolved result
 * as well as the loading state.
 *
 * The return value updates according to the request state:
 *
 * - start: { loading: true, loaded: false }
 * - success: { data: [data from response], loading: false, loaded: true }
 * - error: { error: [error from response], loading: false, loaded: true }
 *
 * This hook will return the cached result when called a second time
 * with the same parameters, until the response arrives.
 *
 * This hook aggregates and deduplicates calls to the same resource, so for instance, if an app calls:
 *
 * useGetMany('tags', [1, 2, 3]);
 * useGetMany('tags', [3, 4]);
 *
 * during the same tick, the hook will only call the dataProvider once with the following parameters:
 *
 * dataProvider(GET_MANY, 'tags', [1, 2, 3, 4])
 *
 * @param resource The resource name, e.g. 'posts'
 * @param ids The resource identifiers, e.g. [123, 456, 789]
 * @param options Options object to pass to the dataProvider. May include side effects to be executed upon success or failure, e.g. { onSuccess: { refresh: true } }
 *
 * @returns The current request state. Destructure as { data, error, loading, loaded }.
 *
 * @example
 *
 * import { useGetMany } from 'react-admin';
 *
 * const PostTags = ({ record }) => {
 *     const { data, loading, error } = useGetMany('tags', record.tagIds);
 *     if (loading) { return <Loading />; }
 *     if (error) { return <p>ERROR</p>; }
 *     return (
 *          <ul>
 *              {data.map(tag => (
 *                  <li key={tag.id}>{tag.name}</li>
 *              ))}
 *          </ul>
 *      );
 * };
 */
var useGetMany = function (resource, ids, options) {
    if (options === void 0) { options = {}; }
    // we can't use useQueryWithStore here because we're aggregating queries first
    // therefore part of the useQueryWithStore logic will have to be repeated below
    var selectMany = useMemo(makeGetManySelector, []);
    var data = useSelector(function (state) {
        return selectMany(state, resource, ids);
    });
    var _a = useSafeSetState({
        data: data,
        error: null,
        loading: ids.length !== 0,
        loaded: ids.length === 0 ||
            (data.length !== 0 && !data.includes(undefined)),
    }), state = _a[0], setState = _a[1];
    if (!isEqual(state.data, data)) {
        setState(__assign(__assign({}, state), { data: data, loaded: true }));
    }
    dataProvider = useDataProvider(); // not the best way to pass the dataProvider to a function outside the hook, but I couldn't find a better one
    useEffect(function () {
        if (!queriesToCall[resource]) {
            queriesToCall[resource] = [];
        }
        /**
         * queriesToCall stores the queries to call under the following shape:
         *
         * {
         *   'posts': [
         *     { ids: [1, 2], setState }
         *     { ids: [2, 3], setState, onSuccess }
         *     { ids: [4, 5], setState }
         *   ],
         *   'comments': [
         *     { ids: [345], setState, onFailure }
         *   ]
         * }
         */
        queriesToCall[resource] = queriesToCall[resource].concat({
            ids: ids,
            setState: setState,
            onSuccess: options && options.onSuccess,
            onFailure: options && options.onFailure,
        });
        callQueries(); // debounced by lodash
    }, [JSON.stringify({ resource: resource, ids: ids, options: options }), dataProvider]); // eslint-disable-line react-hooks/exhaustive-deps
    return state;
};
/**
 * Memoized selector for getting an array of resources based on an array of ids
 *
 * @see https://react-redux.js.org/next/api/hooks#using-memoizing-selectors
 */
var makeGetManySelector = function () {
    return createSelector([
        function (state, resource) {
            return get(state, ['admin', 'resources', resource, 'data']);
        },
        function (_, __, ids) { return ids; },
    ], function (resourceData, ids) {
        return resourceData
            ? ids.map(function (id) { return resourceData[id]; })
            : ids.map(function (id) { return undefined; });
    });
};
/**
 * Call the dataProvider once per resource
 */
var callQueries = debounce(function () {
    var resources = Object.keys(queriesToCall);
    resources.forEach(function (resource) {
        var queries = __spreadArrays(queriesToCall[resource]); // cloning to avoid side effects
        /**
         * Extract ids from queries, aggregate and deduplicate them
         *
         * @example from [[1, 2], [2, null, 3], [4, null]] to [1, 2, 3, 4]
         */
        var accumulatedIds = queries
            .reduce(function (acc, _a) {
            var ids = _a.ids;
            return union(acc, ids);
        }, []) // concat + unique
            .filter(function (v) { return v != null && v !== ''; }); // remove null values
        if (accumulatedIds.length === 0) {
            // no need to call the data provider if all the ids are null
            queries.forEach(function (_a) {
                var ids = _a.ids, setState = _a.setState, onSuccess = _a.onSuccess;
                setState({
                    data: emptyArray,
                    loading: false,
                    loaded: true,
                });
                if (onSuccess) {
                    onSuccess({ data: emptyArray });
                }
            });
            return;
        }
        dataProvider
            .getMany(resource, { ids: accumulatedIds }, DataProviderOptions)
            .then(function (response) {
            // Forces batching, see https://stackoverflow.com/questions/48563650/does-react-keep-the-order-for-state-updates/48610973#48610973
            return ReactDOM.unstable_batchedUpdates(function () {
                return queries.forEach(function (_a) {
                    var ids = _a.ids, setState = _a.setState, onSuccess = _a.onSuccess;
                    setState(function (prevState) { return (__assign(__assign({}, prevState), { error: null, loading: false, loaded: true })); });
                    if (onSuccess) {
                        var subData = ids.map(function (id) {
                            return response.data.find(function (datum) { return datum.id == id; });
                        } // eslint-disable-line eqeqeq
                        );
                        onSuccess({ data: subData });
                    }
                });
            });
        })
            .catch(function (error) {
            return ReactDOM.unstable_batchedUpdates(function () {
                return queries.forEach(function (_a) {
                    var setState = _a.setState, onFailure = _a.onFailure;
                    setState({ error: error, loading: false, loaded: false });
                    onFailure && onFailure(error);
                });
            });
        });
        delete queriesToCall[resource];
    });
});
var emptyArray = [];
export default useGetMany;
