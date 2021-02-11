import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { showNotification, } from '../actions/notificationActions';
/**
 * Hook for Notification Side Effect
 *
 * @example
 *
 * const notify = useNotify();
 * // simple message (info level)
 * notify('Level complete');
 * // specify level
 * notify('A problem occurred', 'warning')
 * // pass arguments to the translation function
 * notify('Deleted %{count} elements', 'info', { smart_count: 23 })
 * // show the action as undoable in the notification
 * notify('Post renamed', 'info', {}, true)
 */
var useNotify = function () {
    var dispatch = useDispatch();
    return useCallback(function (message, type, messageArgs, undoable, autoHideDuration) {
        if (type === void 0) { type = 'info'; }
        if (messageArgs === void 0) { messageArgs = {}; }
        if (undoable === void 0) { undoable = false; }
        dispatch(showNotification(message, type, {
            messageArgs: messageArgs,
            undoable: undoable,
            autoHideDuration: autoHideDuration,
        }));
    }, [dispatch]);
};
export default useNotify;
