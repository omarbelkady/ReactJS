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
exports.getPossibleReferences = exports.getReferenceResource = exports.getResources = exports.getPossibleReferenceValues = exports.getNotification = void 0;
var redux_1 = require("redux");
var connected_react_router_1 = require("connected-react-router");
var admin_1 = __importStar(require("./admin"));
var notifications_1 = require("./admin/notifications");
Object.defineProperty(exports, "getNotification", { enumerable: true, get: function () { return notifications_1.getNotification; } });
exports.default = (function (customReducers, history) {
    return redux_1.combineReducers(__assign({ admin: admin_1.default, router: connected_react_router_1.connectRouter(history) }, customReducers));
});
exports.getPossibleReferenceValues = function (state, props) {
    return admin_1.getPossibleReferenceValues(state.admin, props);
};
exports.getResources = function (state) { return admin_1.getResources(state.admin); };
exports.getReferenceResource = function (state, props) {
    return admin_1.getReferenceResource(state.admin, props);
};
var admin_2 = require("./admin");
Object.defineProperty(exports, "getPossibleReferences", { enumerable: true, get: function () { return admin_2.getPossibleReferences; } });
