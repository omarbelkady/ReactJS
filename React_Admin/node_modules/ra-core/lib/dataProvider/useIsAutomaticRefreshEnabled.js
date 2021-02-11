"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var useIsAutomaticRefreshEnabled = function () {
    var automaticRefreshEnabled = react_redux_1.useSelector(function (state) { return state.admin.ui.automaticRefreshEnabled; });
    return automaticRefreshEnabled;
};
exports.default = useIsAutomaticRefreshEnabled;
