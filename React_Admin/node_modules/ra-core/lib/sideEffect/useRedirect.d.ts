import { Identifier, Record } from '../types';
declare type RedirectToFunction = (basePath?: string, id?: Identifier, data?: Record) => string;
export declare type RedirectionSideEffect = string | boolean | RedirectToFunction;
/**
 * Hook for Redirection Side Effect
 *
 * @example
 *
 * const redirect = useRedirect();
 * // redirect to list view
 * redirect('list', '/posts');
 * // redirect to edit view
 * redirect('edit', '/posts', 123);
 * // do not redirect (resets the record form)
 * redirect(false);
 * // redirect to the result of a function
 * redirect((redirectTo, basePath, is, data) => ...)
 */
declare const useRedirect: () => (redirectTo: RedirectionSideEffect, basePath?: string, id?: Identifier, data?: Partial<Record>) => void;
export default useRedirect;
