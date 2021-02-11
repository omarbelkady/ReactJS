"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var sideEffect_1 = require("../sideEffect");
var useIsAutomaticRefreshEnabled_1 = __importDefault(require("./useIsAutomaticRefreshEnabled"));
/**
 * Trigger a refresh of the page when the page comes back from background after a certain delay
 *
 * @param {number} delay Delay in milliseconds since the time the page was hidden. Defaults to 5 minutes.
 */
var useRefreshWhenVisible = function (delay) {
    if (delay === void 0) { delay = 1000 * 60 * 5; }
    var refresh = sideEffect_1.useRefresh();
    var automaticRefreshEnabled = useIsAutomaticRefreshEnabled_1.default();
    react_1.useEffect(function () {
        var lastHiddenTime;
        var handleVisibilityChange = function () {
            if (!automaticRefreshEnabled) {
                return;
            }
            if (document.hidden) {
                // tab goes hidden
                lastHiddenTime = Date.now();
            }
            else {
                // tab goes visible
                if (Date.now() - lastHiddenTime > delay) {
                    refresh();
                }
                lastHiddenTime = null;
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange, {
            capture: true,
        });
        return function () {
            return document.removeEventListener('visibilitychange', handleVisibilityChange, { capture: true });
        };
    }, [automaticRefreshEnabled, delay, refresh]);
};
exports.default = useRefreshWhenVisible;
