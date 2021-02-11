"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationContext = void 0;
var react_1 = require("react");
var TranslationContext = react_1.createContext({
    locale: 'en',
    setLocale: function () { },
    i18nProvider: {
        translate: function (x) { return x; },
        changeLocale: function () { return Promise.resolve(); },
        getLocale: function () { return 'en'; },
    },
});
exports.TranslationContext = TranslationContext;
TranslationContext.displayName = 'TranslationContext';
