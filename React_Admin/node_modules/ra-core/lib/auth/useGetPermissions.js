"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useAuthProvider_1 = __importDefault(require("./useAuthProvider"));
var getPermissionsWithoutProvider = function () { return Promise.resolve([]); };
/**
 * Get a callback for calling the authProvider.getPermissions() method.
 *
 * @see useAuthProvider
 *
 * @returns {Function} getPermissions callback
 *
 * This is a low level hook. See those more specialized hooks
 * offering state handling.
 *
 * @see usePermissions
 *
 * @example
 *
 * import { useGetPermissions } from 'react-admin';
 *
 * const Roles = () => {
 *     const [permissions, setPermissions] = useState([]);
 *     const getPermissions = useGetPermissions();
 *     useEffect(() => {
 *         getPermissions().then(permissions => setPermissions(permissions))
 *     }, [])
 *     return (
 *         <ul>
 *             {permissions.map((permission, key) => (
 *                 <li key={key}>{permission}</li>
 *             ))}
 *         </ul>
 *     );
 * }
 */
var useGetPermissions = function () {
    var authProvider = useAuthProvider_1.default();
    var getPermissions = react_1.useCallback(function (params) {
        if (params === void 0) { params = {}; }
        return authProvider.getPermissions(params);
    }, [authProvider]);
    return authProvider ? getPermissions : getPermissionsWithoutProvider;
};
exports.default = useGetPermissions;
