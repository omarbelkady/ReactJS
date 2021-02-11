import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { refreshView } from '../actions/uiActions';
/**
 * Hook for Refresh Side Effect
 *
 * @example
 *
 * const refresh = useRefresh();
 * refresh();
 */
var useRefresh = function () {
    var dispatch = useDispatch();
    return useCallback(function (doRefresh) {
        if (doRefresh === void 0) { doRefresh = true; }
        return doRefresh && dispatch(refreshView());
    }, [dispatch]);
};
export default useRefresh;
