"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var TranslationContext_1 = require("./TranslationContext");
/**
 * Get the current locale from the TranslationContext
 *
 * This hook re-renders when the locale changes.
 *
 * @example
 *
 * import { useLocale } from 'react-admin';
 *
 * const availableLanguages = {
 *     en: 'English',
 *     fr: 'Français',
 * }
 * const CurrentLanguage = () => {
 *     const locale = useLocale();
 *     return <span>{availableLanguages[locale]}</span>;
 * }
 */
var useLocale = function () {
    var locale = react_1.useContext(TranslationContext_1.TranslationContext).locale;
    return locale;
};
exports.default = useLocale;
