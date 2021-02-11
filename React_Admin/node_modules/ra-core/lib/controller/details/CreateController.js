"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateController = void 0;
var i18n_1 = require("../../i18n");
var useCreateController_1 = require("./useCreateController");
/**
 * Render prop version of the useCreateController hook
 *
 * @see useCreateController
 * @example
 *
 * const CreateView = () => <div>...</div>
 * const MyCreate = props => (
 *     <CreateController {...props}>
 *         {controllerProps => <CreateView {...controllerProps} {...props} />}
 *     </CreateController>
 * );
 */
exports.CreateController = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var controllerProps = useCreateController_1.useCreateController(props);
    var translate = i18n_1.useTranslate(); // injected for backwards compatibility
    return children(__assign({ translate: translate }, controllerProps));
};
