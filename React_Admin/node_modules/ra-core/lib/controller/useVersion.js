"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
/**
 * Get the UI version from the store
 *
 * The UI version is an integer incremented by the refresh button;
 * it serves to force running fetch hooks again.
 */
var useVersion = function () {
    return react_redux_1.useSelector(function (reduxState) { return reduxState.admin.ui.viewVersion; });
};
exports.default = useVersion;
