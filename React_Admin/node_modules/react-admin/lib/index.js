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
exports.defaultI18nProvider = exports.AdminUI = exports.AdminRouter = exports.AdminContext = exports.Admin = void 0;
var Admin_1 = __importDefault(require("./Admin"));
exports.Admin = Admin_1.default;
var AdminUI_1 = __importDefault(require("./AdminUI"));
exports.AdminUI = AdminUI_1.default;
var AdminContext_1 = __importDefault(require("./AdminContext"));
exports.AdminContext = AdminContext_1.default;
var AdminRouter_1 = __importDefault(require("./AdminRouter"));
exports.AdminRouter = AdminRouter_1.default;
var defaultI18nProvider_1 = __importDefault(require("./defaultI18nProvider"));
exports.defaultI18nProvider = defaultI18nProvider_1.default;
__exportStar(require("ra-core"), exports);
__exportStar(require("ra-ui-materialui"), exports);
