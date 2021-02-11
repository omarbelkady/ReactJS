"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sideEffect_1 = require("../sideEffect");
var react_1 = require("react");
var defaultSideEffects = {
    onSuccess: undefined,
    onFailure: undefined,
};
var useDeclarativeSideEffects = function () {
    var notify = sideEffect_1.useNotify();
    var redirect = sideEffect_1.useRedirect();
    var refresh = sideEffect_1.useRefresh();
    var unselectAll = sideEffect_1.useUnselectAll();
    return react_1.useMemo(function () { return function (resource, _a) {
        var _b = _a === void 0 ? defaultSideEffects : _a, onSuccess = _b.onSuccess, onFailure = _b.onFailure;
        var convertToFunctionSideEffect = function (resource, sideEffects) {
            if (!sideEffects || typeof sideEffects === 'function') {
                return sideEffects;
            }
            if (Object.keys(sideEffects).length === 0) {
                return undefined;
            }
            var notification = sideEffects.notification, redirectTo = sideEffects.redirectTo, needRefresh = sideEffects.refresh, needUnselectAll = sideEffects.unselectAll;
            return function () {
                if (notification) {
                    notify(notification.body, notification.level, notification.messageArgs);
                }
                if (redirectTo) {
                    redirect(redirectTo);
                }
                if (needRefresh) {
                    refresh();
                }
                if (needUnselectAll) {
                    unselectAll(resource);
                }
            };
        };
        return {
            onSuccess: convertToFunctionSideEffect(resource, onSuccess),
            onFailure: convertToFunctionSideEffect(resource, onFailure),
        };
    }; }, [notify, redirect, refresh, unselectAll]);
};
exports.default = useDeclarativeSideEffects;
