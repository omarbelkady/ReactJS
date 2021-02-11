"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var notificationActions_1 = require("../actions/notificationActions");
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
    var dispatch = react_redux_1.useDispatch();
    return react_1.useCallback(function (message, type, messageArgs, undoable, autoHideDuration) {
        if (type === void 0) { type = 'info'; }
        if (messageArgs === void 0) { messageArgs = {}; }
        if (undoable === void 0) { undoable = false; }
        dispatch(notificationActions_1.showNotification(message, type, {
            messageArgs: messageArgs,
            undoable: undoable,
            autoHideDuration: autoHideDuration,
        }));
    }, [dispatch]);
};
exports.default = useNotify;
