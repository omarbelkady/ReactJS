"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("../actions");
var util_1 = require("../util");
/**
 * Hook for Unselect All Side Effect
 *
 * @example
 *
 * const unselectAll = useUnselectAll('posts');
 * unselectAll();
 */
var useUnselectAll = function (resource1) {
    var dispatch = react_redux_1.useDispatch();
    return react_1.useCallback(function (resource2) {
        util_1.warning(!resource2 && !resource1, "You didn't specify the resource at initialization (useUnselectAll('posts')) nor when using the callback (unselectAll('posts'))");
        dispatch(actions_1.setListSelectedIds(resource2 || resource1, []));
    }, [dispatch, resource1]);
};
exports.default = useUnselectAll;
