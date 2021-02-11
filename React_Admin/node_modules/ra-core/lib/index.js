"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameRelatedTo = exports.getReferencesByIds = exports.getReferences = exports.getIds = exports.getPossibleReferenceValues = exports.getPossibleReferences = exports.getNotification = exports.getReferenceResource = exports.getResources = exports.queryReducer = exports.adminReducer = exports.createAppReducer = void 0;
var reducer_1 = __importDefault(require("./reducer"));
exports.createAppReducer = reducer_1.default;
var admin_1 = __importDefault(require("./reducer/admin"));
exports.adminReducer = admin_1.default;
var queryReducer_1 = __importDefault(require("./reducer/admin/resource/list/queryReducer"));
exports.queryReducer = queryReducer_1.default;
__exportStar(require("./core"), exports);
__exportStar(require("./actions"), exports);
__exportStar(require("./auth"), exports);
__exportStar(require("./dataProvider"), exports);
__exportStar(require("./export"), exports);
__exportStar(require("./i18n"), exports);
__exportStar(require("./inference"), exports);
__exportStar(require("./loading"), exports);
__exportStar(require("./util"), exports);
__exportStar(require("./controller"), exports);
__exportStar(require("./form"), exports);
var reducer_2 = require("./reducer");
Object.defineProperty(exports, "getResources", { enumerable: true, get: function () { return reducer_2.getResources; } });
Object.defineProperty(exports, "getReferenceResource", { enumerable: true, get: function () { return reducer_2.getReferenceResource; } });
Object.defineProperty(exports, "getNotification", { enumerable: true, get: function () { return reducer_2.getNotification; } });
Object.defineProperty(exports, "getPossibleReferences", { enumerable: true, get: function () { return reducer_2.getPossibleReferences; } });
Object.defineProperty(exports, "getPossibleReferenceValues", { enumerable: true, get: function () { return reducer_2.getPossibleReferenceValues; } });
var oneToMany_1 = require("./reducer/admin/references/oneToMany");
Object.defineProperty(exports, "getIds", { enumerable: true, get: function () { return oneToMany_1.getIds; } });
Object.defineProperty(exports, "getReferences", { enumerable: true, get: function () { return oneToMany_1.getReferences; } });
Object.defineProperty(exports, "getReferencesByIds", { enumerable: true, get: function () { return oneToMany_1.getReferencesByIds; } });
Object.defineProperty(exports, "nameRelatedTo", { enumerable: true, get: function () { return oneToMany_1.nameRelatedTo; } });
__exportStar(require("./sideEffect"), exports);
__exportStar(require("./types"), exports);
