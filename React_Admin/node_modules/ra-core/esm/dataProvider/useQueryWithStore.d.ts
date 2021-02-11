import { ReduxState, OnSuccess, OnFailure } from '../types';
export interface Query {
    type: string;
    resource: string;
    payload: object;
}
export interface StateResult {
    data?: any;
    total?: number;
    error?: any;
    loading: boolean;
    loaded: boolean;
}
export interface QueryOptions {
    onSuccess?: OnSuccess;
    onFailure?: OnFailure;
    action?: string;
    [key: string]: any;
}
export declare type PartialQueryState = {
    error?: any;
    loading: boolean;
    loaded: boolean;
};
/**
 * Fetch the data provider through Redux, return the value from the store.
 *
 * The return value updates according to the request state:
 *
 * - start: { loading: true, loaded: false }
 * - success: { data: [data from response], total: [total from response], loading: false, loaded: true }
 * - error: { error: [error from response], loading: false, loaded: true }
 *
 * This hook will return the cached result when called a second time
 * with the same parameters, until the response arrives.
 *
 * @param {Object} query
 * @param {string} query.type The verb passed to th data provider, e.g. 'getList', 'getOne'
 * @param {string} query.resource A resource name, e.g. 'posts', 'comments'
 * @param {Object} query.payload The payload object, e.g; { post_id: 12 }
 * @param {Object} options
 * @param {string} options.action Redux action type
 * @param {Function} options.onSuccess Side effect function to be executed upon success, e.g. () => refresh()
 * @param {Function} options.onFailure Side effect function to be executed upon failure, e.g. (error) => notify(error.message)
 * @param {Function} dataSelector Redux selector to get the result. Required.
 * @param {Function} totalSelector Redux selector to get the total (optional, only for LIST queries)
 * @param {Function} isDataLoaded
 *
 * @returns The current request state. Destructure as { data, total, error, loading, loaded }.
 *
 * @example
 *
 * import { useQueryWithStore } from 'react-admin';
 *
 * const UserProfile = ({ record }) => {
 *     const { data, loading, error } = useQueryWithStore(
 *         {
 *             type: 'getOne',
 *             resource: 'users',
 *             payload: { id: record.id }
 *         },
 *         {},
 *         state => state.admin.resources.users.data[record.id]
 *     );
 *     if (loading) { return <Loading />; }
 *     if (error) { return <p>ERROR</p>; }
 *     return <div>User {data.username}</div>;
 * };
 */
declare const useQueryWithStore: <State extends ReduxState = ReduxState>(query: Query, options?: QueryOptions, dataSelector?: (state: State) => any, totalSelector?: (state: State) => number, isDataLoaded?: (data: any) => boolean) => {
    data?: any;
    total?: number;
    error?: any;
    loading: boolean;
    loaded: boolean;
};
export default useQueryWithStore;
