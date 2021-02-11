"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useCheckAuth_1 = __importDefault(require("./useCheckAuth"));
var emptyParams = {};
/**
 * Restrict access to authenticated users.
 * Redirect anonymous users to the login page.
 *
 * Use it in your custom page components to require
 * authentication.
 *
 * You can set additional `authParams` at will if your authProvider
 * requires it.
 *
 * @example
 *     import { useAuthenticated } from 'react-admin';
 *     const FooPage = () => {
 *         useAuthenticated();
 *         return <Foo />;
 *     }
 *     const CustomRoutes = [
 *         <Route path="/foo" render={() => <FooPage />} />
 *     ];
 *     const App = () => (
 *         <Admin customRoutes={customRoutes}>
 *             ...
 *         </Admin>
 *     );
 */
exports.default = (function (params) {
    if (params === void 0) { params = emptyParams; }
    var checkAuth = useCheckAuth_1.default();
    react_1.useEffect(function () {
        checkAuth(params).catch(function () { });
    }, [checkAuth, params]);
});
