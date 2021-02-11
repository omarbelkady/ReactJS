"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var uiActions_1 = require("../actions/uiActions");
/**
 * Hook for Refresh Side Effect
 *
 * @example
 *
 * const refresh = useRefresh();
 * refresh();
 */
var useRefresh = function () {
    var dispatch = react_redux_1.useDispatch();
    return react_1.useCallback(function (doRefresh) {
        if (doRefresh === void 0) { doRefresh = true; }
        return doRefresh && dispatch(uiActions_1.refreshView());
    }, [dispatch]);
};
exports.default = useRefresh;
