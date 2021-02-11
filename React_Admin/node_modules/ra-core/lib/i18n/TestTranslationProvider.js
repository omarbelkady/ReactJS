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
var React = __importStar(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var TranslationContext_1 = require("./TranslationContext");
exports.default = (function (_a) {
    var translate = _a.translate, messages = _a.messages, children = _a.children;
    return (React.createElement(TranslationContext_1.TranslationContext.Provider, { value: {
            locale: 'en',
            setLocale: function () { return Promise.resolve(); },
            i18nProvider: {
                translate: messages
                    ? function (key, options) {
                        return get_1.default(messages, key)
                            ? get_1.default(messages, key)
                            : options._;
                    }
                    : translate,
                changeLocale: function () { return Promise.resolve(); },
                getLocale: function () { return 'en'; },
            },
        } }, children));
});
