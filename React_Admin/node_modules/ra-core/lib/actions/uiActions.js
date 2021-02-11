"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAutomaticRefresh = exports.SET_AUTOMATIC_REFRESH = exports.refreshView = exports.REFRESH_VIEW = exports.setSidebarVisibility = exports.SET_SIDEBAR_VISIBILITY = exports.toggleSidebar = exports.TOGGLE_SIDEBAR = void 0;
exports.TOGGLE_SIDEBAR = 'RA/TOGGLE_SIDEBAR';
exports.toggleSidebar = function () { return ({
    type: exports.TOGGLE_SIDEBAR,
}); };
exports.SET_SIDEBAR_VISIBILITY = 'RA/SET_SIDEBAR_VISIBILITY';
exports.setSidebarVisibility = function (isOpen) { return ({
    type: exports.SET_SIDEBAR_VISIBILITY,
    payload: isOpen,
}); };
exports.REFRESH_VIEW = 'RA/REFRESH_VIEW';
exports.refreshView = function () { return ({
    type: exports.REFRESH_VIEW,
}); };
exports.SET_AUTOMATIC_REFRESH = 'RA/SET_AUTOMATIC_REFRESH';
exports.setAutomaticRefresh = function (enabled) { return ({
    type: exports.SET_AUTOMATIC_REFRESH,
    payload: enabled,
}); };
