"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var useMutation_1 = __importDefault(require("./useMutation"));
/**
 * Get a callback to call the dataProvider.update() method, the result and the loading state.
 *
 * The return value updates according to the request state:
 *
 * - start: [callback, { loading: true, loaded: false }]
 * - success: [callback, { data: [data from response], loading: false, loaded: true }]
 * - error: [callback, { error: [error from response], loading: false, loaded: true }]
 *
 * @param resource The resource name, e.g. 'posts'
 * @param id The resource identifier, e.g. 123
 * @param data The updates to merge into the record, e.g. { views: 10 }
 * @param previousData The record before the update is applied
 * @param options Options object to pass to the dataProvider. May include side effects to be executed upon success or failure, e.g. { onSuccess: { refresh: true } }
 *
 * @returns The current request state. Destructure as [update, { data, error, loading, loaded }].
 *
 * @example
 *
 * import { useUpdate } from 'react-admin';
 *
 * const IncreaseLikeButton = ({ record }) => {
 *     const diff = { likes: record.likes + 1 };
 *     const [update, { loading, error }] = useUpdate('likes', record.id, diff, record);
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={loading} onClick={update}>Like</div>;
 * };
 */
var useUpdate = function (resource, id, data, previousData, options) {
    return useMutation_1.default({ type: 'update', resource: resource, payload: { id: id, data: data, previousData: previousData } }, options);
};
exports.default = useUpdate;
