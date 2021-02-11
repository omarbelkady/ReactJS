import { Identifier, Record } from '../types';
interface UseGetManyResult {
    data: Record[];
    error?: any;
    loading: boolean;
    loaded: boolean;
}
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
declare const useGetMany: (resource: string, ids: Identifier[], options?: any) => UseGetManyResult;
export default useGetMany;
