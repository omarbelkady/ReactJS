"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
/**
 * Get the loading status, i.e. a boolean indicating if at least one request is pending
 *
 * @see useLoad
 *
 * @example
 *
 * import { useLoading } from 'react-admin';
 *
 * const MyComponent = () => {
 *      const loading = useLoading();
 *      return loading ? <Skeleton /> : <RealContent>;
 * }
 */
exports.default = (function () {
    return react_redux_1.useSelector(function (state) { return state.admin.loading > 0; });
});
