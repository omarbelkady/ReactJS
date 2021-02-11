"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTranslatableContext = void 0;
var react_1 = require("react");
var TranslatableContext_1 = require("./TranslatableContext");
/**
 * Gives access to the current TranslatableContext.
 *
 * @example
 * <TranslatableFields
 *     selector={<MyLanguageSelector />}
 *     locales={['en', 'fr']}
 * >
 *     <TextField source={getSource('title')} />
 * <TranslatableFields>
 *
 * const MyLanguageSelector = () => {
 *     const {
 *         locales,
 *         selectedLocale,
 *         selectLocale,
 *     } = useTranslatableContext();
 *
 *     return (
 *         <select onChange={selectLocale}>
 *             {locales.map((locale) => (
 *                 <option selected={locale.locale === selectedLocale}>
 *                     {locale.name}
 *                 </option>
 *             ))}
 *        </select>
 *     );
 * }
 */
exports.useTranslatableContext = function () {
    var context = react_1.useContext(TranslatableContext_1.TranslatableContext);
    if (!context) {
        throw new Error('useTranslatableContext must be used inside a TranslatableContextProvider');
    }
    return context;
};
