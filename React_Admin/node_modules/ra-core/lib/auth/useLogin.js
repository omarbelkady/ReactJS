"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var useAuthProvider_1 = __importStar(require("./useAuthProvider"));
var notificationActions_1 = require("../actions/notificationActions");
/**
 * Get a callback for calling the authProvider.login() method
 * and redirect to the previous authenticated page (or the home page) on success.
 *
 * @see useAuthProvider
 *
 * @returns {Function} login callback
 *
 * @example
 *
 * import { useLogin } from 'react-admin';
 *
 * const LoginButton = () => {
 *     const [loading, setLoading] = useState(false);
 *     const login = useLogin();
 *     const handleClick = {
 *         setLoading(true);
 *         login({ username: 'john', password: 'p@ssw0rd' }, '/posts')
 *             .then(() => setLoading(false));
 *     }
 *     return <button onClick={handleClick}>Login</button>;
 * }
 */
var useLogin = function () {
    var authProvider = useAuthProvider_1.default();
    var location = react_router_dom_1.useLocation();
    var locationState = location.state;
    var history = react_router_dom_1.useHistory();
    var dispatch = react_redux_1.useDispatch();
    var nextPathName = locationState && locationState.nextPathname;
    var login = react_1.useCallback(function (params, pathName) {
        if (params === void 0) { params = {}; }
        return authProvider.login(params).then(function (ret) {
            dispatch(notificationActions_1.resetNotification());
            var redirectUrl = pathName
                ? pathName
                : nextPathName || useAuthProvider_1.defaultAuthParams.afterLoginUrl;
            history.push(redirectUrl);
            return ret;
        });
    }, [authProvider, history, nextPathName, dispatch]);
    var loginWithoutProvider = react_1.useCallback(function (_, __) {
        dispatch(notificationActions_1.resetNotification());
        history.push(useAuthProvider_1.defaultAuthParams.afterLoginUrl);
        return Promise.resolve();
    }, [history, dispatch]);
    return authProvider ? login : loginWithoutProvider;
};
exports.default = useLogin;
