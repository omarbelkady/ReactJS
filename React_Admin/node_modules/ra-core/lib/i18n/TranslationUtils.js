"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeTranslations = exports.resolveBrowserLocale = void 0;
var merge_1 = __importDefault(require("lodash/merge"));
var index_1 = require("./index");
/**
 * Resolve the browser locale according to the value of the global window.navigator
 *
 * Use it to determine the <Admin> locale at runtime.
 *
 * @example
 *     import * as React from "react";
 *     import { Admin, Resource, resolveBrowserLocale } from 'react-admin';
 *     import englishMessages from 'ra-language-english';
 *     import frenchMessages from 'ra-language-french';
 *     const messages = {
 *        fr: frenchMessages,
 *        en: englishMessages,
 *     };
 *     const App = () => (
 *         <Admin locale={resolveBrowserLocale()} messages={messages}>
 *             ...
 *         </Admin>
 *     );
 *
 * @param {string} defaultLocale Defaults to 'en'
 */
exports.resolveBrowserLocale = function (defaultLocale) {
    if (defaultLocale === void 0) { defaultLocale = index_1.DEFAULT_LOCALE; }
    // from http://blog.ksol.fr/user-locale-detection-browser-javascript/
    // Rely on the window.navigator object to determine user locale
    var _a = window.navigator, language = _a.language, browserLanguage = _a.browserLanguage, userLanguage = _a.userLanguage;
    return (language || browserLanguage || userLanguage || defaultLocale).split('-')[0];
};
/**
 * Compose translations from multiple packages for a single language (eg: 'english').
 *
 * Use it to merge translations from addons with the main react-admin translations.
 *
 * @example
 *     import * as React from "react";
 *     import { Admin, Resource, mergeTranslations } from 'react-admin';
 *     import englishMessages from 'ra-language-english';
 *     import englishTreeMessages from 'ra-tree-language-english';
 *     const messages = {
 *        en: mergeTranslations(englishMessages, englishTreeMessages),
 *     };
 *     const App = () => (
 *         <Admin locale="en" messages={messages}>
 *             ...
 *         </Admin>
 *     );
 */
exports.mergeTranslations = function () {
    var translationsModules = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        translationsModules[_i] = arguments[_i];
    }
    return merge_1.default.apply(void 0, __spreadArrays([{}], translationsModules));
};
