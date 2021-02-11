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
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import resolveRedirectTo from '../util/resolveRedirectTo';
import { refreshView } from '../actions/uiActions';
import { useHistory } from 'react-router-dom';
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
var useRedirect = function () {
    var dispatch = useDispatch();
    var history = useHistory(); // Note: history is mutable. This prevents render loops in useCallback.
    return useCallback(function (redirectTo, basePath, id, data) {
        if (basePath === void 0) { basePath = ''; }
        if (!redirectTo) {
            if (history.location.state || history.location.search) {
                history.replace(__assign(__assign({}, history.location), { state: {}, search: undefined }));
            }
            else {
                dispatch(refreshView());
            }
            return;
        }
        history.push(resolveRedirectTo(redirectTo, basePath, id, data));
    }, [dispatch, history]);
};
export default useRedirect;
