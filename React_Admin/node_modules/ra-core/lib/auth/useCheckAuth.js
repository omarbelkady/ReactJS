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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useAuthProvider_1 = __importStar(require("./useAuthProvider"));
var useLogout_1 = __importDefault(require("./useLogout"));
var useNotify_1 = __importDefault(require("../sideEffect/useNotify"));
/**
 * Get a callback for calling the authProvider.checkAuth() method.
 * In case of rejection, redirects to the login page, displays a notification,
 * and throws an error.
 *
 * This is a low level hook. See those more specialized hooks
 * for common authentication tasks, based on useCheckAuth.
 *
 * @see useAuthenticated
 * @see useAuthState
 *
 * @returns {Function} checkAuth callback
 *
 * @example
 *
 * import { useCheckAuth } from 'react-admin';
 *
 * const MyProtectedPage = () => {
 *     const checkAuth = useCheckAuth();
 *     useEffect(() => {
 *         checkAuth().catch(() => {});
 *     }, []);
 *     return <p>Private content: EZAEZEZAET</p>
 * } // tip: use useAuthenticated() hook instead
 *
 * const MyPage = () => {
 *     const checkAuth = useCheckAuth();
 *     const [authenticated, setAuthenticated] = useState(true); // optimistic auth
 *     useEffect(() => {
 *         checkAuth({}, false)
 *              .then(() => setAuthenticated(true))
 *              .catch(() => setAuthenticated(false));
 *     }, []);
 *     return authenticated ? <Bar /> : <BarNotAuthenticated />;
 * } // tip: use useAuthState() hook instead
 */
var useCheckAuth = function () {
    var authProvider = useAuthProvider_1.default();
    var notify = useNotify_1.default();
    var logout = useLogout_1.default();
    var checkAuth = react_1.useCallback(function (params, logoutOnFailure, redirectTo, disableNotification) {
        if (params === void 0) { params = {}; }
        if (logoutOnFailure === void 0) { logoutOnFailure = true; }
        if (redirectTo === void 0) { redirectTo = useAuthProvider_1.defaultAuthParams.loginUrl; }
        if (disableNotification === void 0) { disableNotification = false; }
        return authProvider.checkAuth(params).catch(function (error) {
            if (logoutOnFailure) {
                logout({}, error && error.redirectTo
                    ? error.redirectTo
                    : redirectTo);
                var shouldSkipNotify = disableNotification ||
                    (error && error.message === false);
                !shouldSkipNotify &&
                    notify(getErrorMessage(error, 'ra.auth.auth_check_error'), 'warning');
            }
            throw error;
        });
    }, [authProvider, logout, notify]);
    return authProvider ? checkAuth : checkAuthWithoutAuthProvider;
};
var checkAuthWithoutAuthProvider = function () { return Promise.resolve(); };
var getErrorMessage = function (error, defaultMessage) {
    return typeof error === 'string'
        ? error
        : typeof error === 'undefined' || !error.message
            ? defaultMessage
            : error.message;
};
exports.default = useCheckAuth;
