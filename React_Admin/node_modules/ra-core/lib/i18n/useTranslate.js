"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var TranslationContext_1 = require("./TranslationContext");
/**
 * Translate a string using the current locale and the translations from the i18nProvider
 *
 * @see Polyglot.t()
 * @link https://airbnb.io/polyglot.js/#polyglotprototypetkey-interpolationoptions
 *
 * @return {Function} A translation function, accepting two arguments
 *   - a string used as key in the translations
 *   - an interpolationOptions object
 *
 * @example
 *
 * import { useTranslate } from 'react-admin';
 *
 * const SettingsMenu = () => {
 *     const translate = useTranslate();
 *     return <MenuItem>{translate('settings')}</MenuItem>;
 * }
 */
var useTranslate = function () {
    var _a = react_1.useContext(TranslationContext_1.TranslationContext), i18nProvider = _a.i18nProvider, locale = _a.locale;
    var translate = react_1.useCallback(function (key, options) {
        return i18nProvider.translate(key, options);
    }, 
    // update the hook each time the locale changes
    [i18nProvider, locale] // eslint-disable-line react-hooks/exhaustive-deps
    );
    return i18nProvider ? translate : identity;
};
var identity = function (key) { return key; };
exports.default = useTranslate;
