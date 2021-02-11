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
exports.DEFAULT_LOCALE = exports.useTranslate = exports.useSetLocale = exports.useLocale = exports.TestTranslationProvider = exports.TranslationProvider = exports.TranslationContext = exports.withTranslate = exports.translate = void 0;
var translate_1 = __importDefault(require("./translate"));
exports.translate = translate_1.default;
var TranslationContext_1 = require("./TranslationContext");
Object.defineProperty(exports, "TranslationContext", { enumerable: true, get: function () { return TranslationContext_1.TranslationContext; } });
var TranslationProvider_1 = __importDefault(require("./TranslationProvider"));
exports.TranslationProvider = TranslationProvider_1.default;
var TestTranslationProvider_1 = __importDefault(require("./TestTranslationProvider"));
exports.TestTranslationProvider = TestTranslationProvider_1.default;
var useLocale_1 = __importDefault(require("./useLocale"));
exports.useLocale = useLocale_1.default;
var useSetLocale_1 = __importDefault(require("./useSetLocale"));
exports.useSetLocale = useSetLocale_1.default;
var useTranslate_1 = __importDefault(require("./useTranslate"));
exports.useTranslate = useTranslate_1.default;
// Alias to translate to avoid shadowed variable names error with tslint
var withTranslate = translate_1.default;
exports.withTranslate = withTranslate;
exports.DEFAULT_LOCALE = 'en';
__exportStar(require("./TranslationUtils"), exports);
__exportStar(require("./TranslationContext"), exports);
__exportStar(require("./TranslationMessages"), exports);
__exportStar(require("./TranslatableContext"), exports);
__exportStar(require("./TranslatableContextProvider"), exports);
__exportStar(require("./useTranslatable"), exports);
__exportStar(require("./useTranslatableContext"), exports);
